import sharp from 'sharp';

export async function createModifiedImage(inputBuffer, differences) {
    try {
        const image = sharp(inputBuffer);
        const metadata = await image.metadata();
        const imgWidth = metadata.width || 0;
        const imgHeight = metadata.height || 0;

        const composites = [];

        for (const diff of differences) {
            // Parse bbox: [ymin, xmin, ymax, xmax]
            let [ymin, xmin, ymax, xmax] = diff.bbox;

            // Clamp coordinates
            ymin = Math.max(0, ymin);
            xmin = Math.max(0, xmin);
            ymax = Math.min(imgHeight, ymax);
            xmax = Math.min(imgWidth, xmax);

            const width = xmax - xmin;
            const height = ymax - ymin;

            // SKIP invalid boxes
            if (width <= 0 || height <= 0) continue;

            try {
                const regionProcessor = image.clone().extract({ left: xmin, top: ymin, width, height });
                let buffer;

                if (diff.type === 'color') {
                    buffer = await regionProcessor.modulate({ hue: 90 }).toBuffer();
                } else if (diff.type === 'flip') {
                    buffer = await regionProcessor.flop().toBuffer();
                } else if (diff.type === 'remove') {
                    buffer = await regionProcessor.blur(15).toBuffer();
                }

                if (buffer) {
                    composites.push({ input: buffer, top: ymin, left: xmin });
                }
            } catch (e) {
                console.error(`Failed to process region ${diff.id}: `, e);
            }
        }

        // Apply all composites at once
        if (composites.length > 0) {
            image.composite(composites);
        }

        // Return Buffer instead of writing to file
        return await image.toBuffer();

    } catch (error) {
        console.error("Image Processing Error:", error);
        throw error;
    }
}

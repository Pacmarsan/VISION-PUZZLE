import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import multer from 'multer';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { analyzeImageForDifferences, analyzeImageForFindObject } from './services/vision.js';
import { createModifiedImage } from './services/image.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Helper to convert Buffer to Data URI
const toDataUri = (buffer, mimetype) => {
    return `data:${mimetype};base64,${buffer.toString('base64')}`;
};

app.post('/api/upload', upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No image file uploaded' });
    }

    const gameType = req.body.type || 'spot-diff';

    try {
        const imageBuffer = req.file.buffer;
        const mimeType = req.file.mimetype;

        console.log(`Analyzing ${req.file.originalname} for ${gameType}...`);

        if (gameType === 'find-obj') {
            const analysis = await analyzeImageForFindObject(imageBuffer);
            res.json({
                mode: 'find-obj',
                originalUrl: toDataUri(imageBuffer, mimeType),
                targets: analysis.targets
            });
        } else {
            // Spot the Difference (Default)
            // 1. Analyze with Vision AI
            const analysis = await analyzeImageForDifferences(imageBuffer);

            // 2. Generate Modified Image (Returns Buffer)
            const modifiedBuffer = await createModifiedImage(imageBuffer, analysis.differences);

            // 3. Return Data URIs
            res.json({
                mode: 'spot-diff',
                originalUrl: toDataUri(imageBuffer, mimeType),
                modifiedUrl: toDataUri(modifiedBuffer, 'image/jpeg'), // Sharp defaults to JPEG/PNG depending on input, assuming JPEG for now or we could detect
                differences: analysis.differences
            });
        }

    } catch (error) {
        console.error('Processing failed:', error);
        res.status(500).json({ error: 'Processing failed', details: error.message });
    }
});

// Default export for Vercel
export default app;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

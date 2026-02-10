import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

function bufferToGenerativePart(buffer, mimeType) {
    return {
        inlineData: {
            data: buffer.toString("base64"),
            mimeType
        },
    };
}

export async function analyzeImageForDifferences(imageBuffer) {
    // Mock response if no key
    if (!process.env.GEMINI_API_KEY) {
        console.warn("No GEMINI_API_KEY. Using mock data.");
        return {
            original_width: 800,
            original_height: 600,
            differences: [
                { id: '1', bbox: [100, 100, 200, 200], type: 'color', description: 'Mock Difference' }
            ]
        };
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        const prompt = `
        You are a Puzzle Game Generator.
        Context: The user uploaded an image. We need to create a "Spot the Differences" game.

        Task:
        1. Identify 5-8 distinct objects or clear regions in the image.
        2. For each, precise bounding box coordinates in ABSOLUTE PIXELS are required.
        3. Assign a modification type: "color" (change color), "flip" (mirror horizontally), or "remove" (blur/remove).
        
        Output Format: JSON ONLY. No markdown.
        Schema:
        {
            "differences": [
                {
                    "id": "diff_1",
                    "bbox": [ymin, xmin, ymax, xmax], // Absolute pixel coordinates
                    "type": "color" | "flip" | "remove",
                    "description": "Short description of change"
                }
            ]
        }
        `;

        const imagePart = bufferToGenerativePart(imageBuffer, 'image/jpeg');
        const result = await model.generateContent([prompt, imagePart]);
        const response = await result.response;
        const text = response.text();

        const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(cleanText);

    } catch (error) {
        console.error("Gemini Error:", error);
        throw new Error("Failed to analyze image");
    }
}

export async function analyzeImageForFindObject(imageBuffer) {
    if (!process.env.GEMINI_API_KEY) {
        return {
            targets: [
                { id: '1', label: 'Chair', bbox: [100, 100, 200, 200] }
            ]
        };
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        const prompt = `
        Context: "Find the Object" game.
        Task: Identify 5-10 distinct, clear objects in the image.
        Output: JSON ONLY.
        Schema:
        {
            "targets": [
                {
                    "id": "obj_1",
                    "label": "Red Chair",
                    "bbox": [ymin, xmin, ymax, xmax] // Absolute pixels
                }
            ]
        }
        `;

        const imagePart = bufferToGenerativePart(imageBuffer, 'image/jpeg');
        const result = await model.generateContent([prompt, imagePart]);
        const response = await result.response;
        const text = response.text();
        const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(cleanText);

    } catch (error) {
        console.error("Gemini Find Object Error:", error);
        throw new Error("Failed to analyze image for objects");
    }
}

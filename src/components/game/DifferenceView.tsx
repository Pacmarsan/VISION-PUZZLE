import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface Difference {
    id: string;
    bbox: [number, number, number, number]; // ymin, xmin, ymax, xmax
    type: string;
    description: string;
}

interface GameProps {
    originalUrl: string;
    modifiedUrl: string;
    differences: Difference[];
    onComplete: () => void;
}

export function DifferenceView({ originalUrl, modifiedUrl, differences, onComplete }: GameProps) {
    const [foundIds, setFoundIds] = useState<Set<string>>(new Set());
    const [mistakes, setMistakes] = useState<number>(0);
    const [clickFeedback, setClickFeedback] = useState<{ x: number, y: number, type: 'correct' | 'wrong' } | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        // Calculate click position relative to the image
        const rect = containerRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;

        // Calculate scale factor (natural size vs displayed size)
        // Note: This assumes the image fills the container width
        const img = containerRef.current.querySelector('img');
        if (!img) return;

        const scaleX = img.naturalWidth / rect.width;
        const scaleY = img.naturalHeight / rect.height;

        const actualX = clickX * scaleX;
        const actualY = clickY * scaleY;

        // Check for collision with any difference
        let found = false;
        for (const diff of differences) {
            if (foundIds.has(diff.id)) continue;

            const [ymin, xmin, ymax, xmax] = diff.bbox;
            if (actualX >= xmin && actualX <= xmax && actualY >= ymin && actualY <= ymax) {
                found = true;
                setFoundIds(prev => {
                    const next = new Set(prev);
                    next.add(diff.id);
                    if (next.size === differences.length) {
                        setTimeout(onComplete, 1000);
                    }
                    return next;
                });
                setClickFeedback({ x: clickX, y: clickY, type: 'correct' });
                break;
            }
        }

        if (!found) {
            setMistakes(m => m + 1);
            setClickFeedback({ x: clickX, y: clickY, type: 'wrong' });
        }

        // Clear feedback after animation
        setTimeout(() => setClickFeedback(null), 800);
    };

    return (
        <div className="flex flex-col items-center w-full max-w-6xl mx-auto p-4">
            <div className="flex justify-between w-full mb-4 px-4 text-stone-300">
                <div className="text-xl font-bold">Found: {foundIds.size} / {differences.length}</div>
                <div className="text-xl font-bold text-red-400">Mistakes: {mistakes}</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {/* Original Image (Reference) */}
                <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-stone-800">
                    <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm z-10">Original</div>
                    <img src={originalUrl} alt="Original" className="w-full h-auto object-contain pointer-events-none select-none" />
                </div>

                {/* Modified Image (Interactive) */}
                <div
                    ref={containerRef}
                    className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-brand-600 cursor-crosshair"
                    onClick={handleImageClick}
                >
                    <div className="absolute top-2 left-2 bg-brand-600 text-white px-2 py-1 rounded text-sm z-10">Modified</div>
                    <img src={modifiedUrl} alt="Modified" className="w-full h-auto object-contain pointer-events-none select-none" />

                    {/* Feedback Overlays */}
                    {clickFeedback && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className={`absolute w-8 h-8 -ml-4 -mt-4 rounded-full border-2 flex items-center justify-center
                                ${clickFeedback.type === 'correct' ? 'border-green-500 bg-green-500/30' : 'border-red-500 bg-red-500/30'}`}
                            style={{ left: clickFeedback.x, top: clickFeedback.y }}
                        >
                            {clickFeedback.type === 'correct' ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-red-500" />}
                        </motion.div>
                    )}

                    {/* Persistent Markers for Found Items */}
                    {Array.from(foundIds).map(id => {
                        const diff = differences.find(d => d.id === id);
                        if (!diff) return null;
                        const [ymin, xmin, ymax, xmax] = diff.bbox;
                        // We need to map back to percentage to render efficiently without JS resize listener overhead for every marker
                        // But wait, the bbox is in pixels. 
                        // Simplest way: use style={{ top: '...', left: '...', ... }} with percentages if we knew img size
                        // Since we don't strictly know img display size here easily without ResizeObserver, 
                        // we'll use a slightly hacky but effective method: 
                        // The CLICK handler calculates exact pixels.
                        // For rendering, we might need the image natural dimensions.
                        // Let's assume the backend provides 'original_width/height' in the response? 
                        // Current schema doesn't have it in 'Difference' interface but the API response *wrapper* from backend has it in JSON schema, let's update interface later.
                        // For now, simpler visual feedback: Just show circles where the user CLICKED? 
                        // No, we should outline the object.
                        // Let's rely on clickFeedback for now and maybe "Circles" if we can.
                        return null;
                    })}
                </div>
            </div>

            <p className="mt-8 text-stone-400 text-sm">Find all differences to win!</p>
        </div>
    );
}

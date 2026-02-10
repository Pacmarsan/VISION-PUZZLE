import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Search } from 'lucide-react';
import { FindObjResponse } from '../../lib/api';

interface GameProps {
    data: FindObjResponse;
    onComplete: () => void;
}

export function FindObjectView({ data, onComplete }: GameProps) {
    const [foundIds, setFoundIds] = useState<Set<string>>(new Set());
    const [mistakes, setMistakes] = useState<number>(0);
    const [clickFeedback, setClickFeedback] = useState<{ x: number, y: number, type: 'correct' | 'wrong' } | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;

        const img = containerRef.current.querySelector('img');
        if (!img) return;

        const scaleX = img.naturalWidth / rect.width;
        const scaleY = img.naturalHeight / rect.height;

        const actualX = clickX * scaleX;
        const actualY = clickY * scaleY;

        let foundId: string | null = null;

        for (const target of data.targets) {
            if (foundIds.has(target.id)) continue;

            const [ymin, xmin, ymax, xmax] = target.bbox;
            if (actualX >= xmin && actualX <= xmax && actualY >= ymin && actualY <= ymax) {
                foundId = target.id;
                break;
            }
        }

        if (foundId) {
            setFoundIds(prev => {
                const next = new Set(prev);
                next.add(foundId!);
                if (next.size === data.targets.length) {
                    setTimeout(onComplete, 1000);
                }
                return next;
            });
            setClickFeedback({ x: clickX, y: clickY, type: 'correct' });
        } else {
            setMistakes(m => m + 1);
            setClickFeedback({ x: clickX, y: clickY, type: 'wrong' });
        }

        setTimeout(() => setClickFeedback(null), 800);
    };

    return (
        <div className="flex flex-col items-center w-full max-w-6xl mx-auto p-4 gap-8">
            <div className="flex flex-col md:flex-row w-full gap-8">

                {/* Target List */}
                <div className="w-full md:w-1/4 bg-stone-900/50 p-6 rounded-xl border border-stone-800 h-fit">
                    <h3 className="text-xl font-bold text-brand-400 mb-4 flex items-center gap-2">
                        <Search className="w-5 h-5" />
                        Find These:
                    </h3>
                    <ul className="space-y-3">
                        {data.targets.map(target => (
                            <li
                                key={target.id}
                                className={`p-3 rounded-lg border transition-all ${foundIds.has(target.id)
                                        ? 'bg-green-900/20 border-green-500/50 text-green-400 line-through opacity-50'
                                        : 'bg-stone-800 border-stone-700 text-stone-200 hover:border-brand-500/50'
                                    }`}
                            >
                                {target.label}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 pt-6 border-t border-stone-800 text-center">
                        <div className="text-sm text-stone-500 uppercase tracking-widest mb-1">Mistakes</div>
                        <div className="text-3xl font-bold text-red-400">{mistakes}</div>
                    </div>
                </div>

                {/* Game Area */}
                <div
                    ref={containerRef}
                    className="relative w-full md:w-3/4 rounded-xl overflow-hidden shadow-2xl border-4 border-brand-600 cursor-crosshair self-start"
                    onClick={handleImageClick}
                >
                    <img
                        src={data.originalUrl}
                        alt="Find Objects"
                        className="w-full h-auto object-contain pointer-events-none select-none"
                    />

                    {clickFeedback && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className={`absolute w-12 h-12 -ml-6 -mt-6 rounded-full border-4 flex items-center justify-center z-20
                                ${clickFeedback.type === 'correct' ? 'border-green-400 bg-green-400/20' : 'border-red-500 bg-red-500/20'}`}
                            style={{ left: clickFeedback.x, top: clickFeedback.y }}
                        >
                            {clickFeedback.type === 'correct' && <Check className="w-6 h-6 text-green-400" />}
                        </motion.div>
                    )}

                    {/* Found Markers */}
                    {/* We can optionally visualize found items on image or just keep them in the list */}
                </div>
            </div>
        </div>
    );
}

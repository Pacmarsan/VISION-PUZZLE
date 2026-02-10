import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload, Loader2, Play, Search, ScanEye, ArrowLeft } from 'lucide-react';
import { uploadImage, GameResponse } from '../lib/api';
import { DifferenceView } from '../components/game/DifferenceView';
import { FindObjectView } from '../components/game/FindObjectView';
import clsx from 'clsx';

type GameMode = 'spot-diff' | 'find-obj';

export function Generator() {
    const [mode, setMode] = useState<GameMode>('spot-diff');
    const [isLoading, setIsLoading] = useState(false);
    const [gameData, setGameData] = useState<GameResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsLoading(true);
        setError(null);
        setGameData(null); // Clear previous

        try {
            const data = await uploadImage(file, mode);
            setGameData(data);
        } catch (err) {
            console.error(err);
            setError('Failed to generate puzzle. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    if (gameData) {
        return (
            <div className="animate-in fade-in zoom-in duration-500 w-full">
                <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
                        {gameData.mode === 'spot-diff' ? 'Spot the Difference' : 'Find the Objects'}
                    </h2>
                    <button
                        onClick={() => setGameData(null)}
                        className="px-4 py-2 text-sm bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors"
                    >
                        New Game
                    </button>
                </div>

                {gameData.mode === 'spot-diff' ? (
                    <DifferenceView
                        originalUrl={gameData.originalUrl}
                        modifiedUrl={gameData.modifiedUrl}
                        differences={gameData.differences}
                        onComplete={() => alert("YOU WIN! Great Vision!")}
                    />
                ) : (
                    <FindObjectView
                        data={gameData}
                        onComplete={() => alert("ALL OBJECTS FOUND! Excellent work!")}
                    />
                )}
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8 p-4">
            <Link to="/" className="self-start flex items-center gap-2 text-stone-400 hover:text-white transition-colors mb-4">
                <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>

            <div className="text-center space-y-4">
                <h2 className="text-5xl font-black tracking-tight text-brand-500 drop-shadow-lg">
                    Turn Your Photos Into Games
                </h2>
                <p className="text-xl text-stone-400 max-w-md mx-auto">
                    Upload any image. AI will create a playable puzzle instantly.
                </p>
            </div>

            {/* Mode Selector */}
            <div className="flex bg-stone-900 p-1 rounded-xl border border-stone-800">
                <button
                    onClick={() => setMode('spot-diff')}
                    className={clsx(
                        "flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all",
                        mode === 'spot-diff'
                            ? "bg-brand-600 text-white shadow-lg shadow-brand-900/20"
                            : "text-stone-400 hover:text-white hover:bg-stone-800"
                    )}
                >
                    <ScanEye className="w-5 h-5" />
                    Spot Difference
                </button>
                <button
                    onClick={() => setMode('find-obj')}
                    className={clsx(
                        "flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all",
                        mode === 'find-obj'
                            ? "bg-purple-600 text-white shadow-lg shadow-purple-900/20"
                            : "text-stone-400 hover:text-white hover:bg-stone-800"
                    )}
                >
                    <Search className="w-5 h-5" />
                    Find Object
                </button>
            </div>

            <div className="relative group w-full max-w-md aspect-video rounded-3xl border-2 border-dashed border-stone-700 hover:border-brand-500 bg-stone-900/50 hover:bg-stone-900 transition-all cursor-pointer overflow-hidden flex flex-col items-center justify-center">
                <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                    disabled={isLoading}
                />

                {isLoading ? (
                    <div className="flex flex-col items-center space-y-4 z-10">
                        <Loader2 className="w-12 h-12 text-brand-500 animate-spin" />
                        <p className="text-brand-300 font-medium animate-pulse">
                            {mode === 'spot-diff' ? 'Generating differences...' : 'Detecting objects...'}
                        </p>
                        <p className="text-xs text-stone-500">Powered by Gemini 3 Pro</p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center space-y-4 group-hover:scale-105 transition-transform">
                        <div className="w-16 h-16 bg-stone-800 rounded-2xl flex items-center justify-center group-hover:bg-brand-600 transition-colors shadow-xl">
                            <Upload className="w-8 h-8 text-stone-300 group-hover:text-white" />
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-stone-200 text-lg">Click to Upload</p>
                            <p className="text-sm text-stone-500">JPG or PNG (Max 5MB)</p>
                        </div>
                    </div>
                )}
            </div>

            {error && (
                <div className="mt-8 p-4 bg-red-900/20 border border-red-500/50 rounded-lg text-red-300">
                    {error}
                </div>
            )}
        </div>
    );
}

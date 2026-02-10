import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ScanEye, Search, ArrowRight, Zap } from 'lucide-react';

export function Landing() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center gap-16">

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 max-w-4xl px-4"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/30 border border-brand-500/30 text-brand-300 text-sm font-medium mb-4">
                    <Sparkles className="w-4 h-4" />
                    <span>Powered by Gemini 3 Pro Vision</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
                    Reality <span className="bg-gradient-to-r from-brand-400 via-purple-400 to-brand-500 bg-clip-text text-transparent">Gamified</span>
                </h1>

                <p className="text-xl md:text-2xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
                    Upload any photo. AI instantly converts it into a playable <span className="text-stone-200 font-semibold">Spot the Difference</span> or <span className="text-stone-200 font-semibold">Find the Object</span> puzzle.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link to="/create" className="group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-stone-200 transition-all flex items-center justify-center gap-2 overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">
                            Start Creating <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity" />
                    </Link>
                </div>
            </motion.div>

            {/* Feature Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4"
            >
                <FeatureCard
                    icon={<Zap className="w-8 h-8 text-yellow-400" />}
                    title="Instant Generation"
                    description="No manual editing. Vision AI analyzes scenes and logic in seconds."
                />
                <FeatureCard
                    icon={<ScanEye className="w-8 h-8 text-brand-400" />}
                    title="Spot the Difference"
                    description="AI cleverly modifies objects, changes colors, or removals while keeping it realistic."
                />
                <FeatureCard
                    icon={<Search className="w-8 h-8 text-purple-400" />}
                    title="Find the Object"
                    description="Object detection creates scavenger hunts from cluttered photos."
                />
            </motion.div>

            {/* Visual Demo Strip (Static for now, could be marquee) */}
            <div className="w-full overflow-hidden opacity-50 grayscale hover:grayscale-0 transition-all duration-1000">
                <div className="flex gap-4 justify-center">
                    {/* Placeholders for visual interest */}
                    <div className="w-64 h-40 bg-stone-800 rounded-lg border border-stone-700"></div>
                    <div className="w-64 h-40 bg-stone-800 rounded-lg border border-stone-700"></div>
                    <div className="w-64 h-40 bg-stone-800 rounded-lg border border-stone-700"></div>
                </div>
            </div>
        </div>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="p-6 rounded-2xl bg-stone-900/50 border border-stone-800 hover:border-stone-700 transition-colors text-left space-y-4">
            <div className="w-14 h-14 rounded-xl bg-stone-950 flex items-center justify-center border border-stone-800">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-stone-100">{title}</h3>
            <p className="text-stone-400 leading-relaxed">{description}</p>
        </div>
    );
}

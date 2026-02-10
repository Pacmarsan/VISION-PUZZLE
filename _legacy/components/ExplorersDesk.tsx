import React from 'react';
import { motion } from 'framer-motion';

export const ExplorersDesk: React.FC = () => {
    return (
        <div className="font-serif bg-explorer-bg-light dark:bg-explorer-bg-dark text-gray-800 dark:text-gray-100 min-h-screen flex flex-col overflow-hidden w-full h-full relative">
            <style>{`
        /* Custom styles for realistic effects */
        .wood-texture {
            background-color: #1a120b;
            background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20c0-11.05-8.95-20-20-20S0 8.95 0 20s8.95 20 20 20 20-8.95 20-20S31.05 0 20 0z' fill='%232a1e15' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
        
        .leather-texture {
            background-color: #271c19;
            background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23110b0a' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
            box-shadow: inset 0 0 20px #000;
        }

        .parchment-texture {
            background-color: #eaddcf;
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 1.79 4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
            box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
        }

        .torn-paper-edge {
            position: relative;
        }
        .torn-paper-edge::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 100%;
            height: 10px;
            background: linear-gradient(135deg, transparent 33%, #eaddcf 34%, #eaddcf 66%, transparent 67%) top;
            background-size: 20px 100%;
        }

        /* Stitching effect for leather */
        .stitched {
            border: 2px dashed #6d4c41;
            outline: 2px solid #3e2723;
            outline-offset: -8px;
        }
        `}</style>

            {/* Desk Background Wrapper */}
            <div className="relative flex-grow w-full h-full wood-texture flex flex-col items-center justify-center p-4 md:p-8 lg:p-12">
                {/* Ambient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none z-10"></div>

                {/* Decorative Desk Elements (Absolute positioned) */}
                {/* Compass */}
                <motion.div
                    className="absolute top-10 left-10 md:top-20 md:left-20 w-32 h-32 opacity-80 rotate-12 hidden md:block z-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.8, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="relative w-full h-full rounded-full border-4 border-[#8d6e63] bg-[#1a120b] shadow-2xl flex items-center justify-center">
                        <div className="absolute inset-2 rounded-full border border-explorer-primary/20"></div>
                        <motion.div
                            className="w-1 h-16 bg-red-800 absolute top-4 left-1/2 transform -translate-x-1/2 origin-bottom rotate-45"
                            animate={{ rotate: 50 }}
                            transition={{ repeat: Infinity, repeatType: "reverse", duration: 5, ease: "easeInOut" }}
                        ></motion.div>
                        <motion.div
                            className="w-1 h-16 bg-gray-400 absolute bottom-4 left-1/2 transform -translate-x-1/2 origin-top rotate-45"
                            animate={{ rotate: 50 }}
                            transition={{ repeat: Infinity, repeatType: "reverse", duration: 5, ease: "easeInOut" }}
                        ></motion.div>
                        <div className="w-4 h-4 rounded-full bg-[#cd7f32] z-10 shadow-lg"></div>
                    </div>
                    <div className="text-xs text-explorer-primary/40 font-bold mt-2 text-center tracking-widest uppercase">North</div>
                </motion.div>

                {/* Magnifying Glass Handle Hint */}
                <div className="absolute bottom-[-50px] right-20 w-64 h-8 bg-[#3e2723] rotate-[-15deg] shadow-2xl rounded-full z-20 hidden lg:block"></div>
                <div className="absolute bottom-[20px] right-[240px] w-32 h-32 rounded-full border-[12px] border-[#cd7f32] bg-white/5 backdrop-blur-sm z-20 hidden lg:block shadow-xl"></div>

                {/* Main Content Grid: Explorer's Setup */}
                <div className="relative z-20 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start h-full">

                    {/* LEFT: The Leather Folio (Upload Zone) */}
                    <motion.div
                        className="lg:col-span-8 w-full h-full flex flex-col"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Brass Nameplate Header */}
                        <div className="mb-6 flex items-center justify-center">
                            <div className="bg-gradient-to-r from-[#5d4037] via-[#8d6e63] to-[#5d4037] py-2 px-8 rounded-sm shadow-lg border border-[#3e2723] transform -rotate-1 relative">
                                {/* Screws */}
                                <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#cd7f32] shadow-inner"></div>
                                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#cd7f32] shadow-inner"></div>
                                <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-[#cd7f32] shadow-inner"></div>
                                <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-[#cd7f32] shadow-inner"></div>
                                <h1 className="text-xl md:text-2xl font-bold text-[#f6f8f6] tracking-[0.2em] uppercase" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                                    Artifact Analysis
                                </h1>
                            </div>
                        </div>

                        {/* Leather Bound Frame */}
                        <div className="flex-grow min-h-[400px] leather-texture rounded-xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t border-white/10 relative group">
                            {/* Corner Brass Accents */}
                            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#cd7f32] rounded-tl-lg z-20"></div>
                            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#cd7f32] rounded-tr-lg z-20"></div>
                            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#cd7f32] rounded-bl-lg z-20"></div>
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#cd7f32] rounded-br-lg z-20"></div>

                            {/* Inner Felt/Upload Area */}
                            <div className="w-full h-full bg-[#102216] relative rounded-lg overflow-hidden stitched flex flex-col items-center justify-center transition-all duration-300 hover:bg-[#152e1d] group-hover:border-explorer-primary/50">
                                {/* Magical Grid Overlay */}
                                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #11d452 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.1 }}></div>

                                <div className="text-center p-8 z-10 max-w-md">
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-dashed border-explorer-primary/40 flex items-center justify-center group-hover:scale-110 group-hover:border-explorer-primary transition-all duration-300 bg-explorer-primary/5 shadow-[0_0_15px_rgba(17,212,82,0.1)]">
                                        <span className="material-icons text-4xl text-explorer-primary drop-shadow-[0_0_5px_rgba(17,212,82,0.8)]">upload_file</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#eaddcf] mb-2 font-display">Place Evidence Here</h2>
                                    <p className="text-[#8d6e63] mb-8 font-serif italic text-lg">Drag your maps, relics, or field notes onto the desk surface.</p>
                                    <button className="bg-explorer-primary hover:bg-explorer-primary-dark text-explorer-bg-dark font-bold py-3 px-8 rounded-lg shadow-[0_0_15px_rgba(17,212,82,0.4)] transition-all hover:scale-105 flex items-center gap-2 mx-auto uppercase tracking-wider text-sm font-sans">
                                        <span className="material-icons text-sm">search</span>
                                        Select From Archives
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: The Expedition Scroll (Settings) */}
                    <motion.div
                        className="lg:col-span-4 w-full h-full flex flex-col justify-center"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Paper Scroll Container */}
                        <div className="relative mx-auto w-full max-w-md transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            {/* Top Scroll Roller */}
                            <div className="h-8 bg-gradient-to-b from-[#5d4037] to-[#3e2723] rounded-full shadow-lg relative z-20 border border-[#2d1b18]">
                                <div className="absolute left-2 top-1 bottom-1 w-1 bg-[#8d6e63] rounded-full"></div>
                                <div className="absolute right-2 top-1 bottom-1 w-1 bg-[#8d6e63] rounded-full"></div>
                            </div>

                            {/* Parchment Body */}
                            <div className="parchment-texture px-8 py-6 shadow-2xl relative z-10 min-h-[500px] text-[#3e2723]">
                                <div className="mb-6 text-center border-b-2 border-[#3e2723]/20 pb-4">
                                    <h2 className="text-3xl font-display font-bold text-[#3e2723] mb-1">Expedition Log</h2>
                                    <p className="font-serif italic text-[#5d4037] text-sm">Entry #492-B</p>
                                </div>

                                {/* Form Fields */}
                                <div className="space-y-6 font-display">
                                    {/* Input 1 */}
                                    <div className="group">
                                        <label className="block text-sm font-bold text-[#3e2723] uppercase tracking-wider mb-1 font-sans">Mission Codename</label>
                                        <div className="relative">
                                            <input className="w-full bg-transparent border-0 border-b-2 border-[#5d4037]/40 focus:border-explorer-primary focus:ring-0 px-0 py-2 text-xl font-serif text-[#1a120b] placeholder-[#8d6e63]/50 transition-colors focus:outline-none" placeholder="e.g. The Lost City" type="text" />
                                            <span className="material-icons absolute right-0 top-2 text-[#5d4037]/30">edit</span>
                                        </div>
                                    </div>

                                    {/* Input 2: Slider/Gauge */}
                                    <div>
                                        <div className="flex justify-between items-end mb-2">
                                            <label className="block text-sm font-bold text-[#3e2723] uppercase tracking-wider font-sans">Danger Level</label>
                                            <span className="text-xs font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded border border-red-200 font-sans">HIGH RISK</span>
                                        </div>
                                        <div className="relative pt-1">
                                            <input className="w-full h-2 bg-[#8d6e63]/30 rounded-lg appearance-none cursor-pointer accent-[#b71c1c]" max="100" min="1" type="range" defaultValue="75" />
                                            <div className="flex justify-between text-xs font-serif text-[#5d4037] mt-1 italic">
                                                <span>Safe</span>
                                                <span>Treacherous</span>
                                                <span>Fatal</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Input 3: Stamps/Tags */}
                                    <div>
                                        <label className="block text-sm font-bold text-[#3e2723] uppercase tracking-wider mb-3 font-sans">Region Classification</label>
                                        <div className="flex flex-wrap gap-2">
                                            {['Jungle', 'Desert', 'Ruins', 'Oceanic'].map((tag, i) => (
                                                <label key={tag} className="cursor-pointer">
                                                    <input type="checkbox" className="peer sr-only" defaultChecked={i === 0} />
                                                    <div className={`px-3 py-1 border-2 border-[#5d4037] text-[#5d4037] rounded-sm font-serif text-sm peer-checked:bg-[#5d4037] peer-checked:text-[#eaddcf] transition-all transform hover:${i % 2 === 0 ? '-rotate-2' : 'rotate-2'}`}>
                                                        {tag}
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Notes Area */}
                                    <div className="relative mt-4">
                                        <label className="block text-sm font-bold text-[#3e2723] uppercase tracking-wider mb-1 font-sans">Field Notes</label>
                                        <textarea className="w-full bg-[#fdfbf7] border border-[#d7ccc8] rounded p-2 font-serif text-[#3e2723] text-sm leading-relaxed resize-none focus:ring-1 focus:ring-[#8d6e63] focus:border-[#8d6e63] focus:outline-none" placeholder="Any additional observations..." rows={3}></textarea>
                                        {/* Ink stain decorative */}
                                        <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, #000 0%, transparent 70%)', filter: 'url(#ink-spread)' }}></div>
                                    </div>
                                </div>

                                {/* Submit Button Area (Wax Seal Style) */}
                                <div className="mt-8 flex justify-center pb-4">
                                    <button className="relative group outline-none">
                                        <div className="w-20 h-20 bg-red-800 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.4)] flex items-center justify-center border-4 border-red-900 group-hover:scale-105 transition-transform duration-200 group-active:scale-95">
                                            <div className="absolute inset-0 rounded-full border border-white/20"></div>
                                            <span className="material-icons text-3xl text-red-100 opacity-80 drop-shadow-md transform rotate-12">fingerprint</span>
                                        </div>
                                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[#3e2723] font-bold text-xs uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity font-sans">Confirm Entry</div>
                                    </button>
                                </div>
                            </div>

                            {/* Torn Bottom Edge */}
                            <div className="h-4 torn-paper-edge relative z-20 w-full mt-[-1px]"></div>

                            {/* Bottom Scroll Roller */}
                            <div className="h-8 bg-gradient-to-b from-[#5d4037] to-[#3e2723] rounded-full shadow-lg relative z-20 mt-2 border border-[#2d1b18]">
                                <div className="absolute left-2 top-1 bottom-1 w-1 bg-[#8d6e63] rounded-full"></div>
                                <div className="absolute right-2 top-1 bottom-1 w-1 bg-[#8d6e63] rounded-full"></div>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* System Status Light (Tech integration) */}
                <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
                    <div className="relative">
                        <div className="w-3 h-3 bg-explorer-primary rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 bg-explorer-primary rounded-full animate-ping opacity-20"></div>
                    </div>
                    <span className="text-xs font-mono text-explorer-primary uppercase tracking-widest">System Online</span>
                </div>

                {/* Floating Particles (Dust/Magic) - decorative */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Using simple css animation instead of complex setup for now */}
                </div>

            </div>

            {/* SVG Filters for Ink Effects */}
            <svg height="0" width="0" style={{ position: 'absolute' }}>
                <filter id="ink-spread">
                    <feTurbulence baseFrequency="0.04" numOctaves="5" result="noise" type="fractalNoise"></feTurbulence>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="10"></feDisplacementMap>
                </filter>
            </svg>
        </div>
    );
};

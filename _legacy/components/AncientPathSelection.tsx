import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const AncientPathSelection: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="font-sans bg-ancient-bg-light dark:bg-ancient-bg-dark min-h-screen text-white overflow-x-hidden selection:bg-ancient-primary selection:text-ancient-bg-dark flex flex-col relative w-full h-full">
            <style>{`
                /* Custom Styles for Glow and Texture effects */
                .stone-tablet {
                    position: relative;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.8);
                }
                
                .stone-tablet::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
                    opacity: 0.5;
                    pointer-events: none;
                    mix-blend-mode: overlay;
                }

                .stone-tablet:hover {
                    border-color: rgba(6, 241, 249, 0.4);
                    box-shadow: 0 0 40px -10px rgba(6, 241, 249, 0.15);
                    transform: translateY(-4px);
                }

                .tablet-icon, .tablet-title {
                    transition: all 0.4s ease;
                    color: #5c7c80; /* Inactive "carved stone" color */
                    text-shadow: 1px 1px 2px rgba(0,0,0,0.8), -1px -1px 1px rgba(255,255,255,0.05);
                }

                .stone-tablet:hover .tablet-icon,
                .stone-tablet:hover .tablet-title {
                    color: #06f1f9;
                    text-shadow: 0 0 15px rgba(6, 241, 249, 0.6), 0 0 30px rgba(6, 241, 249, 0.2);
                }

                .stone-tablet:hover .tablet-desc {
                    color: #d1dada;
                }
                
                /* Ancient runic decorative border */
                .rune-border {
                     background-image: linear-gradient(90deg, transparent 0%, transparent 45%, #06f1f9 50%, transparent 55%, transparent 100%);
                     background-size: 200% 1px;
                     animation: runeShine 3s infinite linear;
                }

                @keyframes runeShine {
                    0% { background-position: 100% 0; }
                    100% { background-position: -100% 0; }
                }
            `}</style>

            {/* Background Layer with Image */}
            <div className="fixed inset-0 z-0">
                <img
                    alt="Dark mysterious ancient temple interior with stone pillars and moody lighting"
                    className="w-full h-full object-cover opacity-30 mix-blend-overlay filter brightness-50 contrast-125"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuANXot-JTQV-5wnNhpwlhghL0By_h6scgPu36zwU7ai3oHm0Z9TOgjd4UCXWsV_K6pMlFgk6C7UtTgOnh_06nPA6_0r5LZHZBgAr59MZnwIrQt3t7zKPJPLiL4T7GYN-stoEGBnoHOAQdk13ymVXinam4GmYpEJ8YKFKTn81dNJm3RiXEJu_sXCRhkBFKd8X8dT5eyenriDJIMDe9gwFLO39B1vd09x53XkCToFOa9Aa3IPm3cHBhA1cTv_LL2VdEpB1GFokPCwP6Y"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ancient-bg-dark via-ancient-bg-dark/80 to-ancient-bg-dark/40"></div>
                <div className="absolute inset-0 bg-noise opacity-40 mix-blend-soft-light pointer-events-none"></div>
            </div>

            {/* Navigation / Top Bar */}
            <nav className="relative z-10 px-6 py-6 flex justify-between items-center border-b border-ancient-primary/10 bg-ancient-bg-dark/50 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                    <span className="material-icons text-ancient-primary/70 text-2xl">explore</span>
                    <span className="text-xl font-bold tracking-widest text-ancient-primary/80 uppercase">Aetheria</span>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2 px-3 py-1 rounded bg-black/30 border border-ancient-primary/10">
                        <span className="material-icons text-ancient-primary text-sm">account_balance_wallet</span>
                        <span>1,240 <span className="text-xs opacity-60">GEMS</span></span>
                    </div>
                    <button className="hover:text-ancient-primary transition-colors">PROFILE</button>
                    <button className="hover:text-ancient-primary transition-colors">SETTINGS</button>
                </div>
            </nav>

            {/* Main Content */}
            <motion.main
                className="relative z-10 flex-grow flex flex-col items-center justify-center p-6 lg:p-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Header Section */}
                <header className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.div
                        className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-ancient-primary/5 border border-ancient-primary/20 text-ancient-primary text-xs tracking-widest uppercase"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-ancient-primary animate-pulse"></span>
                        Select Your Challenge
                    </motion.div>
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wide drop-shadow-2xl font-sans"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        THE ANCIENT PATHS
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-400 font-light leading-relaxed font-sans"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        The temple reveals its secrets only to the observant. Choose how you wish to prove your worth to the guardians of the old world.
                    </motion.p>
                </header>

                {/* Mode Selection Cards (Tablets) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                    {/* Card 1: Spot the Anomaly */}
                    <motion.button
                        className="group stone-tablet relative flex flex-col items-center text-center p-10 bg-ancient-stone-dark rounded-xl border border-white/5 overflow-hidden focus:outline-none focus:ring-2 focus:ring-ancient-primary focus:ring-offset-2 focus:ring-offset-ancient-bg-dark"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        onClick={() => navigate('/analysis')}
                    >
                        {/* Background texture overlay */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20 pointer-events-none"></div>

                        {/* Icon Area */}
                        <div className="mb-8 relative">
                            <div className="absolute inset-0 bg-ancient-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="tablet-icon relative z-10">
                                {/* Custom combined icon for "Lens/Split View" */}
                                <div className="w-24 h-24 rounded-full border-4 border-current flex items-center justify-center relative">
                                    <span className="material-icons text-6xl">search</span>
                                    <div className="absolute top-0 right-0 -mt-2 -mr-2 w-8 h-8 bg-ancient-bg-dark rounded-full flex items-center justify-center border border-current">
                                        <span className="material-icons text-sm">visibility</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <h2 className="tablet-title text-2xl font-bold uppercase tracking-widest mb-4 font-sans">
                            Spot the Anomaly
                        </h2>
                        <div className="w-12 h-0.5 bg-current opacity-30 mb-6 mx-auto transition-colors duration-300 group-hover:bg-ancient-primary group-hover:opacity-100"></div>
                        <p className="tablet-desc text-gray-500 text-sm leading-relaxed max-w-xs transition-colors duration-300 font-light font-sans">
                            Two realities diverge. Use the Lens of Truth to find the singular fracture in time before the portal closes.
                        </p>

                        {/* Subtle CTA that appears on hover */}
                        <div className="mt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            <span className="inline-flex items-center gap-2 text-ancient-primary text-sm font-bold tracking-widest uppercase">
                                Begin Search <span className="material-icons text-base">arrow_forward</span>
                            </span>
                        </div>

                        {/* Corner decorative carvings */}
                        <svg className="absolute top-4 left-4 w-6 h-6 text-white/5 group-hover:text-ancient-primary/20 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h6v2H2v4H0V0zm0 24h6v-2H2v-4H0v6z"></path></svg>
                        <svg className="absolute top-4 right-4 w-6 h-6 text-white/5 group-hover:text-ancient-primary/20 transition-colors duration-300 rotate-90" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h6v2H2v4H0V0zm0 24h6v-2H2v-4H0v6z"></path></svg>
                        <svg className="absolute bottom-4 left-4 w-6 h-6 text-white/5 group-hover:text-ancient-primary/20 transition-colors duration-300 -rotate-90" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h6v2H2v4H0V0zm0 24h6v-2H2v-4H0v6z"></path></svg>
                        <svg className="absolute bottom-4 right-4 w-6 h-6 text-white/5 group-hover:text-ancient-primary/20 transition-colors duration-300 rotate-180" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h6v2H2v4H0V0zm0 24h6v-2H2v-4H0v6z"></path></svg>
                    </motion.button>

                    {/* Card 2: Find the Relic */}
                    <motion.button
                        className="group stone-tablet relative flex flex-col items-center text-center p-10 bg-ancient-stone-dark rounded-xl border border-white/5 overflow-hidden focus:outline-none focus:ring-2 focus:ring-ancient-primary focus:ring-offset-2 focus:ring-offset-ancient-bg-dark"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.0 }}
                        onClick={() => navigate('/analysis')}
                    >
                        {/* Background texture overlay */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20 pointer-events-none"></div>

                        {/* Icon Area */}
                        <div className="mb-8 relative">
                            <div className="absolute inset-0 bg-ancient-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="tablet-icon relative z-10">
                                {/* Custom combined icon for "Torch/Chest" */}
                                <div className="w-24 h-24 flex items-center justify-center relative">
                                    <span className="material-icons text-6xl">inventory_2</span>
                                    <div className="absolute -top-4 -right-2 text-current animate-pulse">
                                        <span className="material-icons text-4xl" style={{ filter: 'drop-shadow(0 0 5px currentColor)' }}>local_fire_department</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <h2 className="tablet-title text-2xl font-bold uppercase tracking-widest mb-4 font-sans">
                            Find the Relic
                        </h2>
                        <div className="w-12 h-0.5 bg-current opacity-30 mb-6 mx-auto transition-colors duration-300 group-hover:bg-ancient-primary group-hover:opacity-100"></div>
                        <p className="tablet-desc text-gray-500 text-sm leading-relaxed max-w-xs transition-colors duration-300 font-light font-sans">
                            Hidden in the shadows lies the artifact. Light your torch and uncover what was lost to the encroaching darkness.
                        </p>

                        {/* Subtle CTA that appears on hover */}
                        <div className="mt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            <span className="inline-flex items-center gap-2 text-ancient-primary text-sm font-bold tracking-widest uppercase">
                                Ignite Torch <span className="material-icons text-base">arrow_forward</span>
                            </span>
                        </div>

                        {/* Corner decorative carvings */}
                        <svg className="absolute top-4 left-4 w-6 h-6 text-white/5 group-hover:text-ancient-primary/20 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h6v2H2v4H0V0zm0 24h6v-2H2v-4H0v6z"></path></svg>
                        <svg className="absolute top-4 right-4 w-6 h-6 text-white/5 group-hover:text-ancient-primary/20 transition-colors duration-300 rotate-90" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h6v2H2v4H0V0zm0 24h6v-2H2v-4H0v6z"></path></svg>
                        <svg className="absolute bottom-4 left-4 w-6 h-6 text-white/5 group-hover:text-ancient-primary/20 transition-colors duration-300 -rotate-90" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h6v2H2v4H0V0zm0 24h6v-2H2v-4H0v6z"></path></svg>
                        <svg className="absolute bottom-4 right-4 w-6 h-6 text-white/5 group-hover:text-ancient-primary/20 transition-colors duration-300 rotate-180" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h6v2H2v4H0V0zm0 24h6v-2H2v-4H0v6z"></path></svg>
                    </motion.button>
                </div>
            </motion.main>

            {/* Footer Status Bar */}
            <footer className="relative z-10 w-full bg-ancient-bg-dark/90 border-t border-ancient-primary/10 backdrop-blur-md px-6 py-4 flex justify-between items-center text-xs tracking-widest text-gray-500 uppercase font-sans">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span>Server: Europe-West</span>
                    </div>
                    <span>v.2.4.0</span>
                </div>
                <div className="flex gap-4">
                    <span className="hover:text-ancient-primary cursor-pointer transition-colors">Lore</span>
                    <span className="hover:text-ancient-primary cursor-pointer transition-colors">Leaderboard</span>
                </div>
            </footer>
        </div>
    );
};

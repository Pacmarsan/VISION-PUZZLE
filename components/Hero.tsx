import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[75vh] text-center px-4 pb-12">
      {/* Decorative Floating Rune */}
      <motion.div
        className="mb-8 opacity-60 text-primary"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7L12 12L22 7L12 2Z"></path>
          <path d="M2 17L12 22L22 17"></path>
          <path d="M2 12L12 17L22 12"></path>
        </svg>
      </motion.div>

      {/* Main Headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-none text-chiseled max-w-5xl mx-auto uppercase">
          Vision-Driven
          <motion.span 
            className="text-4xl md:text-6xl lg:text-7xl opacity-90 block mt-4 font-serif italic text-primary font-normal normal-case tracking-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Puzzle Maker
          </motion.span>
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p 
        className="text-lg md:text-xl text-gray-300/80 max-w-2xl mx-auto mb-16 font-light italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        "Uncover the secrets of AI-generated labyrinths. Your journey begins with a single prompt etched in time."
      </motion.p>

      {/* Compass CTA Interaction */}
      <motion.div 
        className="relative group cursor-pointer w-64 h-64 flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 100 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Outer Ring (Static Glass) */}
        <div className="absolute inset-0 rounded-full border border-primary/20 bg-stone-900/40 backdrop-blur-sm" />

        {/* Rotating Decorative Ring */}
        <motion.div 
          className="absolute inset-2 rounded-full border border-dashed border-primary/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        />

        {/* Compass Body */}
        <div className="relative z-10 w-48 h-48 rounded-full bg-gradient-to-br from-stone-800 to-black shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-stone-700 flex flex-col items-center justify-center overflow-hidden">
            
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-radial-gradient from-primary/5 to-transparent pointer-events-none" />
          
          {/* Gold Accent Ring */}
          <div className="absolute inset-1 rounded-full border-2 border-primary/10" />

          {/* Compass Needle (Bottom Half) */}
          <motion.div 
            className="absolute w-1 h-24 bg-gradient-to-b from-red-900 to-stone-400 z-0 origin-bottom top-0 left-[calc(50%-2px)]"
            animate={{ rotate: isHovered ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 10 }}
            style={{ transformOrigin: 'bottom center' }}
          />
           {/* Compass Needle (Top Half) */}
           <motion.div 
            className="absolute w-1 h-24 bg-stone-600 opacity-50 z-0 origin-top bottom-0 left-[calc(50%-2px)]"
            animate={{ rotate: isHovered ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 10 }}
            style={{ transformOrigin: 'top center' }}
          />

          {/* CTA Text */}
          <div className="relative z-20 flex flex-col items-center">
            <span className="font-bold tracking-[0.25em] text-primary text-xs mb-1 drop-shadow-md">START</span>
            <span className="font-black tracking-widest text-white text-lg drop-shadow-md">EXPEDITION</span>
          </div>

          {/* Central Gemstone */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_2px_rgba(244,175,37,0.4)] z-30 border border-yellow-200" />

          {/* Cardinals */}
          <span className="absolute top-3 text-[10px] text-stone-500 font-bold">N</span>
          <span className="absolute bottom-3 text-[10px] text-stone-500 font-bold">S</span>
          <span className="absolute left-3 text-[10px] text-stone-500 font-bold">W</span>
          <span className="absolute right-3 text-[10px] text-stone-500 font-bold">E</span>
        </div>
      </motion.div>
    </div>
  );
};
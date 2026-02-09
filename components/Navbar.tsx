import React from 'react';
import { Compass, User } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  return (
    <nav className="relative px-6 py-6 flex justify-between items-start z-50">
      <motion.div 
        className="flex items-center space-x-3 group cursor-pointer"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-12 h-12 rounded-full border-2 border-primary/30 bg-stone-900/80 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:border-primary transition-colors duration-300">
          <Compass className="text-primary w-6 h-6 animate-[spin_10s_linear_infinite]" />
        </div>
        <span className="text-xl font-bold tracking-[0.2em] text-primary/80 group-hover:text-primary transition-colors duration-300">
          MYSTIC
        </span>
      </motion.div>

      <motion.div 
        className="flex space-x-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        {['Journal', 'Artifacts'].map((item) => (
          <motion.button
            key={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 rounded-full border border-primary/20 bg-stone-900/60 backdrop-blur-sm text-gray-300 hover:text-primary hover:border-primary/60 transition-all uppercase text-sm tracking-widest font-semibold shadow-lg"
          >
            {item}
          </motion.button>
        ))}
        
        <motion.button 
          whileHover={{ scale: 1.1, backgroundColor: "#ffffff" }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full bg-primary text-stone-900 flex items-center justify-center hover:bg-white transition-colors shadow-[0_0_15px_rgba(244,175,37,0.4)]"
        >
          <User size={18} />
        </motion.button>
      </motion.div>
    </nav>
  );
};
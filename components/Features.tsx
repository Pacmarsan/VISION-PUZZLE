import React from 'react';
import { Wand2, Map, ScrollText } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Arcane Generation",
    description: "Our AI weaves complex narratives and puzzles from simple text prompts, acting as your digital dungeon master.",
    icon: Wand2,
    delay: 0
  },
  {
    title: "Infinite Maps",
    description: "Explore procedurally generated worlds that never repeat. Every expedition uncovers new layouts and traps.",
    icon: Map,
    delay: 0.2
  },
  {
    title: "Lore Weaver",
    description: "Automatically generate deep lore, item descriptions, and NPC backstories to flesh out your mystic world.",
    icon: ScrollText,
    delay: 0.4
  }
];

export const Features: React.FC = () => {
  return (
    <section className="relative z-10 bg-stone-950 py-24 px-6 border-t border-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: feature.delay }}
              className="group relative p-8 rounded-lg bg-stone-900 border border-stone-800 hover:border-primary/40 transition-all duration-300"
            >
              {/* Top Gradient Border on Hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <feature.icon size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-100 mb-3 font-display tracking-wide">
                {feature.title}
              </h3>
              
              <p className="text-stone-400 leading-relaxed font-light text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
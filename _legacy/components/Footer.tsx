import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-[#15120e] py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-stone-500 text-sm font-light">
        <div className="mb-4 md:mb-0">
          <p>© 2023 Mystic Expedition AI. All rights unwritten.</p>
        </div>
        <div className="flex space-x-8">
          {['Grimoire', 'Guild', 'Support'].map((link) => (
            <a 
              key={link} 
              href="#" 
              className="hover:text-primary transition-colors duration-200 uppercase tracking-wider text-xs"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
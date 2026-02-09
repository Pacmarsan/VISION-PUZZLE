import React from 'react';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-display text-gray-100 selection:bg-primary/30 selection:text-white">
      <Background />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow flex flex-col">
          <Hero />
          <Features />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
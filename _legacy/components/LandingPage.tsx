import React from 'react';
import { Background } from './Background';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Features } from './Features';
import { Footer } from './Footer';

export const LandingPage: React.FC = () => {
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
};

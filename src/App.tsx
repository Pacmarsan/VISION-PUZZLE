import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Generator } from './pages/Generator';
import { Landing } from './pages/Landing';

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-brand-500/30">
                <div className="container mx-auto px-4 py-8">
                    <header className="flex justify-between items-center mb-12 border-b border-stone-800 pb-6">
                        <h1 className="text-3xl font-bold text-brand-500 tracking-tighter">
                            Vision<span className="text-stone-100">Puzzle</span>
                        </h1>
                        <nav className="space-x-4 text-sm font-medium text-stone-400">
                            <a href="/" className="hover:text-brand-400 transition-colors">Create</a>
                        </nav>
                    </header>

                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/create" element={<Generator />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

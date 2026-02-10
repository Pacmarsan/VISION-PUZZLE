/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}", // For root files like App.tsx
        "./components/**/*.{js,ts,jsx,tsx}" // For component files
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#f4af25",
                "background-light": "#f8f7f5",
                "background-dark": "#221c10",
                parchment: "#eaddcf",
                "parchment-dark": "#3b3223",
                stone: {
                    800: "#292524",
                    900: "#1c1917",
                    950: "#0c0a09",
                },
                // Ancient Path Selection Colors
                "ancient-primary": "#06f1f9",
                "ancient-bg-light": "#f5f8f8",
                "ancient-bg-dark": "#0f2223",
                "ancient-stone-dark": "#1a2c2e",
                "ancient-stone-light": "#253b3d",
                // Explorer's Desk Colors
                "explorer-primary": "#11d452",
                "explorer-primary-dark": "#0ea33f",
                "explorer-bg-light": "#f6f8f6",
                "explorer-bg-dark": "#102216",
                "explorer-wood-dark": "#1a120b",
                "explorer-wood-light": "#3e2723",
                "explorer-parchment": "#eaddcf",
                "explorer-parchment-dark": "#d7ccc8",
                "explorer-leather": "#3e2723",
                "explorer-leather-light": "#5d4037",
            },
            fontFamily: {
                display: ["Newsreader", "serif"],
                sans: ["Space Grotesk", "sans-serif"],
                serif: ["Noto Serif", "serif"],
            },
            animation: {
                "spin-slow": "spin 12s linear infinite",
            },
            backgroundImage: {
                'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.08%22/%3E%3C/svg%3E')",
                'wood-pattern': "url('https://www.transparenttextures.com/patterns/wood-pattern.png')",
                'paper-texture': "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
}

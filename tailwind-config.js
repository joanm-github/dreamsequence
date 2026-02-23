/** @type {import('tailwindcss').Config} */
window.tailwindConfig = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#b35900",
                "primary-dark": "#8a4200",
                "secondary": "#d69e2e",
                "accent": "#fef9c3",
                "background-light": "#f0e6d2",
                "background-dark": "#1a1a1a",
                "cosmic-black": "#0f0f0f",
                "tobacco": "#5d4037",
                "burnt-orange": "#c05621",
                "mustard": "#d69e2e",
                "amber-glow": "#e8b931",
            },
            fontFamily: {
                "display": ["Space Grotesk", "sans-serif"],
                "body": ["Space Grotesk", "sans-serif"],
                "serif-display": ["Cinzel", "serif"],
            },
            backgroundImage: {
                'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
                'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E\")",
            }
        },
    },
};

// Apply to Tailwind CDN
if (window.tailwind) {
    tailwind.config = window.tailwindConfig;
}

const path = require('path');

module.exports = {
    content: [
        path.join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
        path.join(__dirname, './components/**/*.{js,ts,jsx,tsx}'),
        // For the best performance and to avoid false positives,
        // be as specific as possible with your content configuration.
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};

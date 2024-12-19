module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('postcss-preset-env')({
            browsers: 'ie 11',
            stage: 3,
            features: {
                'custom-properties': false,
            },
        }),
    ],
};
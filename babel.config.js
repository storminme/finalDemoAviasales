module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: 'ie 11',  // Целевой браузер
                useBuiltIns: 'entry',  // Полифиллы для старых браузеров
                corejs: 3,  // Используем core-js версии 3
            },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    plugins: [
        // '@babel/plugin-transform-runtime', // Для async/await и других фич
    ],
};
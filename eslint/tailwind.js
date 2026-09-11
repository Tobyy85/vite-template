/* eslint-disable perfectionist/sort-objects */

import eslintPluginTailwindcss from 'eslint-plugin-tailwindcss'

export default [
    {
        /* Tailwindcss eslint */
        files: ['**/*.{js,jsx,ts,tsx}'],
        extends: [eslintPluginTailwindcss.configs.recommended],
        settings: {
            tailwindcss: /** @type {import('eslint-plugin-tailwindcss').PluginSettings} */ ({
                cssConfigPath: './src/styles/global.css',
                functions: ['cn'],
            }),
        },
    },
]

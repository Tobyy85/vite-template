import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [react(), tailwindcss()],

    base: '/VAR_BASE_URL/',
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    server: {
        host: '0.0.0.0',
        port: parseInt(process.env.PORT ?? '5173'),
        strictPort: true,
        watch: {
            interval: 200,
            usePolling: process.env.CHOKIDAR_USEPOLLING === 'true',
        },
    },
})

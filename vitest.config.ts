import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/test/setup.ts',

        coverage: {
            exclude: ['node_modules/', 'src/test/'],
            provider: 'v8',
            reporter: ['text', 'html'],
        },
    },
})

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        react()
    ],
    server: {
        host: '192.168.1.200',
        cors: {
            origin: [
                'http://192.168.1.200:8000',
            ],
        },
        watch: {
            usePolling: true
        }
    },
});

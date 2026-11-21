import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
    base: './', // path relatif, jadi nama repo bisa apa saja
    plugins: [react(), tailwindcss()],
})
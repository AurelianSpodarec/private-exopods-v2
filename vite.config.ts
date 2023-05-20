import {defineConfig} from 'vite'
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react'
import path from "path";

const getDirName = function () {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    return __dirname;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        assets: `${path.resolve(getDirName, "./src/assets/")}`,
        config: `${path.resolve(getDirName, "./src/config/")}`,
        styles: `${path.resolve(getDirName, "./src/styles/")}`,
        
        layout: `${path.resolve(getDirName, "./src/views/_layout/")}`,
        atoms: `${path.resolve(getDirName, "./src/views/atoms/")}`,
        molecules: `${path.resolve(getDirName, "./src/views/molecules/")}`,
        pages: `${path.resolve(getDirName, "./src/views/pages/")}`,
    }
},
})

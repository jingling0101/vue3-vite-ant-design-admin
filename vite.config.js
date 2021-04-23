import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';
import {join} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        styleImport({
            libs: [{
                libraryName: 'ant-design-vue',
                esModule: true,
                resolveStyle: (name) => {
                    return `ant-design-vue/es/${name}/style/css`;
                },
            }]
        })
    ],
    resolve: {
        alias: [
            {
                find: '@/',
                replacement: join(__dirname, 'src/')
            }
        ]
    }
})

import { babel } from '@rollup/plugin-babel' // Поддержка старых браузеров
import styles from "rollup-plugin-styles" // Плагин для работы со стилями
import image from '@rollup/plugin-image' // Плагин для работы с картинками
import serve from 'rollup-plugin-serve' // Локальный сервер, позволит при каждой сборке открывать нашу веб-страницу на локальном веб-сервере
import livereload from 'rollup-plugin-livereload' // Автоматическое применение изменений

export default {
  // https://rollupjs.org/command-line-interface/
  input: './index.js',
  output: {
    file: './build/bundle.js',
    format: 'cjs'
  },
  // https://rollupjs.org/configuration-options/#watch-exclude
  watch: {
    exclude: 'node_modules/**'
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      presets: ["@babel/env"]
    }),
    styles(),
    image(),
    serve({
      open: true
    }),
    livereload(),
  ],
}

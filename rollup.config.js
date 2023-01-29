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
  }
}

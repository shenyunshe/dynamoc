module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  plugins: [
    'html'
  ],
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'camelcase': 0,
    'no-undef': 0,
    'no-unused-vars': 0,
    'eqeqeq': 0,
    'no-callback-literal': 0,
    // hyphenation causes issues with component props
    'vue/attribute-hyphenation': 0,
    // provenance is trusted content
    'vue/no-v-html': 0
  }
}

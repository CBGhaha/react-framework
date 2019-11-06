module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 9,

    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react', 'react/recommended'],
  rules: {
    'no-console': 'off',
    'no-path-concat': 'off',
    'react/jsx-uses-react': 2
    //     "indent": [
    //         "error",
    //         "tab"
    //     ],
    //     "linebreak-style": [
    //         "error",
    //         "windows"
    //     ],
    //     "quotes": [
    //         "error",
    //         "double"
    //     ],
    //     "semi": [
    //         "error",
    //         "always"
    //     ]
  }
}

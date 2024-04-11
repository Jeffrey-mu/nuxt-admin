// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    '.nuxt/**',
    // ...globs
  ],
  rules: {
    'no-console': 'off',
  },
})

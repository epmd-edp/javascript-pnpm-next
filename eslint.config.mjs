import coreWebVitals from 'eslint-config-next/core-web-vitals'
import typescript from 'eslint-config-next/typescript'

const eslintConfig = [
  { ignores: ['dist', '.next', 'node_modules', 'build', 'out'] },
  ...coreWebVitals,
  ...typescript,
]

export default eslintConfig

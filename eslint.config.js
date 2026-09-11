import base from './eslint/base.js'
import perfectionist from './eslint/perfectionist.js'
import react from './eslint/react.js'
import tailwind from './eslint/tailwind.js'
import typescript from './eslint/typescript.js'

import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
    globalIgnores(['dist', 'node_modules']),
    ...base,
    ...typescript,
    ...react,
    ...tailwind,
    ...perfectionist,
])

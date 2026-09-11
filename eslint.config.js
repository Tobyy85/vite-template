import { defineConfig, globalIgnores } from 'eslint/config'

import base from './eslint/base.js'
import perfectionist from './eslint/perfectionist.js'
import react from './eslint/react.js'
import tailwind from './eslint/tailwind.js'
import typescript from './eslint/typescript.js'

export default defineConfig([
    globalIgnores(['dist', 'node_modules']),
    ...base,
    ...typescript,
    ...react,
    ...tailwind,
    ...perfectionist,
])

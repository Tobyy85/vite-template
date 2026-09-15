import { defineConfig, globalIgnores } from 'eslint/config'

import base from './eslint/base.js'
import perfectionist from './eslint/perfectionist.js'
import react from './eslint/react.js'
import tailwind from './eslint/tailwind.js'
import testing from './eslint/testing.js'
import typescript from './eslint/typescript.js'

export default defineConfig([
    globalIgnores(['dist', 'node_modules', 'coverage']),
    ...base,
    ...typescript,
    ...react,
    ...tailwind,
    ...perfectionist,
    ...testing,
])

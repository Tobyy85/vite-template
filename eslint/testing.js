/* eslint-disable perfectionist/sort-objects */

import vitest from '@vitest/eslint-plugin'
import testingLibrary from 'eslint-plugin-testing-library'

export default [
    {
        files: ['**/*.{test,spec}.{ts,tsx,js,jsx}'],
        extends: [testingLibrary.configs['flat/react'], vitest.configs.recommended],
        languageOptions: {
            globals: {
                ...vitest.environments.env.globals,
            },
        },
        settings: {
            vitest: {
                typecheck: true,
            },
        },
        rules: {
            // Testing Library
            'testing-library/prefer-explicit-assert': ['warn', { includeFindQueries: true }],
            'testing-library/prefer-query-matchers': [
                'error',
                {
                    validEntries: [
                        { matcher: 'toBeVisible', query: 'get' },
                        { matcher: 'toBeChecked', query: 'get' },
                        { matcher: 'toBeDisabled', query: 'get' },
                        { matcher: 'toBeEnabled', query: 'get' },
                        { matcher: 'toHaveTextContent', query: 'get' },
                        { matcher: 'toHaveValue', query: 'get' },
                    ],
                },
            ],
            'testing-library/prefer-user-event': 'error',
            'testing-library/prefer-user-event-setup': 'error',

            // Vitest
            'vitest/consistent-test-filename': [
                'warn',
                {
                    allTestPattern: '\\.(test|spec)\\.(ts|tsx|js|jsx)$',
                    pattern: '.*\\.test\\.(ts|tsx|js|jsx)$',
                },
            ],
            'vitest/consistent-test-it': [
                'warn',
                {
                    fn: 'it',
                    withinDescribe: 'it',
                },
            ],
            'vitest/consistent-vitest-vi': 'warn',
            'vitest/hoisted-apis-on-top': 'warn',
            'vitest/max-expects': ['warn', { max: 5 }],
            'vitest/no-alias-methods': 'warn',
            'vitest/no-commented-out-tests': 'warn',
            'vitest/no-conditional-in-test': 'warn',
            'vitest/no-conditional-tests': 'warn',
            'vitest/no-duplicate-hooks': 'warn',
            'vitest/no-focused-tests': 'warn',
            'vitest/no-identical-title': 'warn',
            'vitest/no-importing-vitest-globals': 'warn',
            'vitest/no-large-snapshots': 'warn',
            'vitest/no-restricted-matchers': [
                'warn',
                {
                    toBeTruthy: 'Use more specific matchers instead of toBeTruthy.',
                    toBeFalsy: 'Use more specific matchers instead of toBeFalsy.',
                },
            ],
            'vitest/no-standalone-expect': 'warn',
            'vitest/no-test-prefixes': 'error',
            'vitest/no-test-return-statement': 'warn',
            'vitest/padding-around-all': 'warn',
            'vitest/prefer-called-exactly-once-with': 'warn',
            'vitest/prefer-comparison-matcher': 'warn',
            'vitest/prefer-describe-function-title': 'warn',
            'vitest/prefer-each': 'warn',
            'vitest/prefer-equality-matcher': 'warn',
            'vitest/prefer-expect-resolves': 'warn',
            'vitest/prefer-expect-type-of': 'warn',
            'vitest/prefer-hooks-in-order': 'warn',
            'vitest/prefer-hooks-on-top': 'warn',
            'vitest/prefer-import-in-mock': 'warn',
            'vitest/prefer-lowercase-title': 'warn',
            'vitest/prefer-mock-promise-shorthand': 'warn',
            'vitest/prefer-mock-return-shorthand': 'warn',
            'vitest/prefer-snapshot-hint': 'warn',
            'vitest/prefer-spy-on': 'warn',
            'vitest/prefer-strict-boolean-matchers': 'warn',
            'vitest/prefer-strict-equal': 'warn',
            'vitest/prefer-to-be': 'warn',
            'vitest/prefer-to-be-object': 'warn',
            'vitest/prefer-to-contain': 'warn',
            'vitest/prefer-to-have-been-called-times': 'warn',
            'vitest/prefer-to-have-length': 'warn',
            'vitest/prefer-todo': 'warn',
            'vitest/prefer-vi-mocked': 'warn',
            'vitest/require-awaited-expect-poll': 'warn',
            'vitest/require-hook': 'warn',
            'vitest/require-mock-type-parameters': 'warn',
            'vitest/require-to-throw-message': 'warn',
            'vitest/require-top-level-describe': 'warn',
            'vitest/unbound-method': 'warn',
            'vitest/warn-todo': 'warn',
        },
    },
]

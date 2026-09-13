/* eslint-disable perfectionist/sort-objects */

import testingLibrary from 'eslint-plugin-testing-library'

export default [
    {
        files: ['**/*.test.{ts,tsx,js,jsx}'],
        extends: [testingLibrary.configs['flat/react']],
        rules: {
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
        },
    },
]

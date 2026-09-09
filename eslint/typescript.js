/* eslint-disable id-length */
import tseslint from 'typescript-eslint'

export default [
    {
        files: ['**/*.{ts,tsx,mts,cts}'],
        extends: [tseslint.configs.recommended],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],

            'class-methods-use-this': 'off',
            '@typescript-eslint/class-methods-use-this': 'warn',

            'default-param-last': 'off',
            '@typescript-eslint/default-param-last': 'warn',

            'dot-notation': 'off',
            '@typescript-eslint/dot-notation': 'warn',

            camelcase: 'off',
            '@typescript-eslint/naming-convention': [
                'warn',
                {
                    selector: 'objectLiteralProperty',
                    modifiers: ['requiresQuotes'],
                    format: null,
                },
                {
                    selector: 'default',
                    format: ['camelCase'],
                },
                {
                    selector: ['variable', 'import'],
                    format: ['camelCase', 'UPPER_CASE', 'PascalCase'], // allow PascalCase for React components
                },
                {
                    selector: 'classProperty',
                    format: ['camelCase', 'UPPER_CASE'],
                },
                {
                    selector: 'parameter',
                    format: ['camelCase'],
                    leadingUnderscore: 'allow',
                },
                {
                    selector: 'typeLike',
                    format: ['PascalCase'],
                },
                {
                    selector: ['variable', 'classProperty'],
                    types: ['boolean'],
                    format: ['PascalCase'],
                    prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'are', 'show'],
                },
                {
                    selector: ['variable', 'parameter'],
                    filter: {
                        regex: '^_$',
                        match: true,
                    },
                    format: null,
                },
            ],

            'no-array-constructor': 'off',
            '@typescript-eslint/no-array-constructor': 'warn',

            'no-dupe-class-members': 'off',
            '@typescript-eslint/no-dupe-class-members': 'warn',

            'no-empty-function': 'off',
            '@typescript-eslint/no-empty-function': 'warn',

            'no-implied-eval': 'off',
            '@typescript-eslint/no-implied-eval': 'warn',

            'no-invalid-this': 'off',
            '@typescript-eslint/no-invalid-this': 'warn',

            'no-loop-func': 'off',
            '@typescript-eslint/no-loop-func': 'warn',

            'no-loss-of-precision': 'off',
            '@typescript-eslint/no-loss-of-precision': 'warn',

            'no-magic-numbers': 'off',
            '@typescript-eslint/no-magic-numbers': [
                'warn',
                {
                    ignore: [-1, 0, 1, 2, 100, 1000],
                    ignoreArrayIndexes: true,
                    ignoreDefaultValues: true,
                    ignoreClassFieldInitialValues: true,
                    enforceConst: true,
                    ignoreEnums: true,
                    ignoreReadonlyClassProperties: true,
                    ignoreTypeIndexes: true,
                },
            ],

            'no-redeclare': 'off',
            '@typescript-eslint/no-redeclare': 'warn',

            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': 'warn',

            'no-unused-expressions': 'off',
            '@typescript-eslint/no-unused-expressions': 'warn',

            'no-unused-private-class-members': 'off',
            '@typescript-eslint/no-unused-private-class-members': 'warn',

            'no-use-before-define': 'off',
            '@typescript-eslint/no-use-before-define': 'warn',

            'no-useless-constructor': 'off',
            '@typescript-eslint/no-useless-constructor': 'warn',

            'no-throw-literal': 'off',
            '@typescript-eslint/only-throw-error': ['warn', { allow: ['Response'] }],

            'prefer-destructuring': 'off',
            '@typescript-eslint/prefer-destructuring': ['warn', { object: true, array: false }],

            'prefer-promise-reject-errors': 'off',
            '@typescript-eslint/prefer-promise-reject-errors': 'warn',

            'require-await': 'off',
            '@typescript-eslint/require-await': 'warn',

            '@typescript-eslint/adjacent-overload-signatures': 'warn',
            '@typescript-eslint/array-type': ['warn', { default: 'array' }],
            '@typescript-eslint/await-thenable': 'warn',
            '@typescript-eslint/ban-ts-comment': [
                'warn',
                {
                    'ts-expect-error': 'allow-with-description',
                    'ts-ignore': 'allow-with-description',
                    'ts-nocheck': 'allow-with-description',
                    'ts-check': 'allow-with-description',
                    minimumDescriptionLength: 3,
                },
            ],
            '@typescript-eslint/class-literal-property-style': ['warn', 'fields'],
            '@typescript-eslint/consistent-generic-constructors': ['warn', 'type-annotation'],
            '@typescript-eslint/consistent-indexed-object-style': ['warn', 'index-signature'],
            '@typescript-eslint/consistent-type-assertions': [
                'warn',
                {
                    assertionStyle: 'as',
                    objectLiteralTypeAssertions: 'allow-as-parameter',
                    arrayLiteralTypeAssertions: 'allow-as-parameter',
                },
            ],
            '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
            '@typescript-eslint/consistent-type-exports': [
                'warn',
                { fixMixedExportsWithInlineTypeSpecifier: true },
            ],
            '@typescript-eslint/consistent-type-imports': [
                'warn',
                { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
            ],
            '@typescript-eslint/explicit-function-return-type': [
                'warn',
                {
                    allowExpressions: true,
                },
            ],
            '@typescript-eslint/explicit-member-accessibility': [
                'warn',
                { overrides: { constructors: 'no-public' } },
            ],
            '@typescript-eslint/method-signature-style': ['warn', 'property'],
            '@typescript-eslint/no-array-delete': 'warn',
            '@typescript-eslint/no-base-to-string': 'warn',
            '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
            '@typescript-eslint/no-confusing-void-expression': [
                'warn',
                {
                    ignoreArrowShorthand: true,
                },
            ],
            '@typescript-eslint/no-deprecated': 'warn',
            '@typescript-eslint/no-duplicate-enum-values': 'warn',
            '@typescript-eslint/no-duplicate-type-constituents': 'warn',
            '@typescript-eslint/no-dynamic-delete': 'warn',
            '@typescript-eslint/no-empty-interface': 'warn',
            '@typescript-eslint/no-empty-object-type': [
                'warn',
                { allowInterfaces: 'with-single-extends', allowWithName: 'Props$' },
            ],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-extra-non-null-assertion': 'warn',
            '@typescript-eslint/no-extraneous-class': 'warn',
            '@typescript-eslint/no-floating-promises': 'warn',
            '@typescript-eslint/no-for-in-array': 'warn',
            '@typescript-eslint/no-import-type-side-effects': 'warn',
            '@typescript-eslint/no-inferrable-types': 'warn',
            '@typescript-eslint/no-invalid-void-type': 'warn',
            '@typescript-eslint/no-meaningless-void-operator': 'warn',
            '@typescript-eslint/no-misused-new': 'warn',
            '@typescript-eslint/no-misused-promises': [
                'warn',
                {
                    checksVoidReturn: {
                        attributes: false,
                    },
                },
            ],
            '@typescript-eslint/no-misused-spread': 'warn',
            '@typescript-eslint/no-mixed-enums': 'warn',
            '@typescript-eslint/no-namespace': 'warn',
            '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
            '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
            '@typescript-eslint/no-non-null-assertion': 'warn',
            '@typescript-eslint/no-redundant-type-constituents': 'warn',
            '@typescript-eslint/no-require-imports': 'warn',
            '@typescript-eslint/no-this-alias': 'warn',
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
            '@typescript-eslint/no-unnecessary-condition': 'warn',
            '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'warn',
            '@typescript-eslint/no-unnecessary-qualifier': 'warn',
            '@typescript-eslint/no-unnecessary-template-expression': 'warn',
            '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
            '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
            '@typescript-eslint/no-unnecessary-type-conversion': 'warn',
            '@typescript-eslint/no-unnecessary-type-parameters': 'warn',
            '@typescript-eslint/no-unsafe-argument': 'warn',
            '@typescript-eslint/no-unsafe-assignment': 'warn',
            '@typescript-eslint/no-unsafe-call': 'warn',
            '@typescript-eslint/no-unsafe-declaration-merging': 'warn',
            '@typescript-eslint/no-unsafe-enum-comparison': 'warn',
            '@typescript-eslint/no-unsafe-function-type': 'warn',
            '@typescript-eslint/no-unsafe-member-access': 'warn',
            '@typescript-eslint/no-unsafe-return': 'warn',
            '@typescript-eslint/no-unsafe-type-assertion': 'warn',
            '@typescript-eslint/no-unsafe-unary-minus': 'warn',
            '@typescript-eslint/no-useless-default-assignment': 'warn',
            '@typescript-eslint/no-useless-empty-export': 'warn',
            '@typescript-eslint/no-wrapper-object-types': 'warn',
            '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
            '@typescript-eslint/parameter-properties': 'warn',
            '@typescript-eslint/prefer-as-const': 'warn',
            '@typescript-eslint/prefer-enum-initializers': 'warn',
            '@typescript-eslint/prefer-find': 'warn',
            '@typescript-eslint/prefer-for-of': 'warn',
            '@typescript-eslint/prefer-function-type': 'warn',
            '@typescript-eslint/prefer-includes': 'warn',
            '@typescript-eslint/prefer-literal-enum-member': 'warn',
            '@typescript-eslint/prefer-namespace-keyword': 'warn',
            '@typescript-eslint/prefer-nullish-coalescing': 'warn',
            '@typescript-eslint/prefer-optional-chain': 'warn',
            '@typescript-eslint/prefer-readonly': 'warn',
            '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
            '@typescript-eslint/prefer-regexp-exec': 'warn',
            '@typescript-eslint/prefer-return-this-type': 'warn',
            '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
            '@typescript-eslint/promise-function-async': 'warn',
            '@typescript-eslint/related-getter-setter-pairs': 'warn',
            '@typescript-eslint/require-array-sort-compare': 'warn',
            '@typescript-eslint/restrict-plus-operands': 'warn',
            '@typescript-eslint/restrict-template-expressions': 'warn',
            '@typescript-eslint/return-await': ['warn', 'always'],
            '@typescript-eslint/strict-void-return': 'warn',
            '@typescript-eslint/switch-exhaustiveness-check': 'warn',
            '@typescript-eslint/unbound-method': ['warn', { ignoreStatic: true }],
            '@typescript-eslint/unified-signatures': 'warn',
            '@typescript-eslint/use-unknown-in-catch-callback-variable': 'warn',
        },
    },
    {
        files: ['**/*.tsx'],
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'off', // No need to explicitly type React components' return types
            '@typescript-eslint/strict-void-return': 'off', // Allow Promise-returning callbacks in React props
        },
    },
]

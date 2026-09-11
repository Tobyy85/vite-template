import perfectionist from 'eslint-plugin-perfectionist'

const customGroups = {
    id: { groupName: 'id', elementNamePattern: ['^id$'] },
    nameTitleHeadingLabel: {
        groupName: 'name-title-heading-label',
        elementNamePattern: ['^name$', '^title$', '^heading$', '^label$'],
    },
    description: { groupName: 'description', elementNamePattern: ['^description$'] },

    as: { groupName: 'as', elementNamePattern: ['^as$'] },
    refKey: { groupName: 'ref-key', elementNamePattern: ['^ref$', '^key$'] },

    path: { groupName: 'path', elementNamePattern: ['^path$'] },
    default: { groupName: 'default', elementNamePattern: ['^default$'] },

    className: { groupName: 'className', elementNamePattern: ['^className$', 'ClassName$'] },
    variantsAndStyling: {
        groupName: 'variants-and-styling',
        elementNamePattern: ['^variant$', '^size$', '^color$'],
    },

    children: { groupName: 'children', elementNamePattern: ['^children$', '^dangerouslySetInnerHTML$'] },
    callback: {
        groupName: 'callback',
        elementNamePattern: [
            '^on[A-Z].*',
            '^handle[A-Z].*',
            '^close[A-Z].*',
            '^close$',
            '^open[A-Z].*',
            '^open$',
            '^set[A-Z].*',
            '^toggle[A-Z].*',
            'toggle$',
            '^clear[A-Z].*',
        ],
    },
}

const objectLikeOptions = {
    partitionByNewLine: true,
    groups: [
        'id',
        'name-title-heading-label',
        'description',

        'path',
        'default',

        'property',
        'children',

        ['method', 'callback'],
        'unknown',
    ],
    customGroups: [
        customGroups.id,
        customGroups.nameTitleHeadingLabel,
        customGroups.description,
        customGroups.path,
        customGroups.default,
        customGroups.children,
        customGroups.callback,
    ],
}

const perfectionistJsxPropsOptions = {
    partitionByNewLine: true,
    groups: [
        'as',
        'ref-key',

        'id',
        'name-title-heading-label',

        'variants-and-styling',
        'className',

        'unknown',
        'children',
        'callback',
    ],
    customGroups: [
        customGroups.as,
        customGroups.refKey,
        customGroups.nameTitleHeadingLabel,
        customGroups.id,
        customGroups.variantsAndStyling,
        customGroups.className,
        customGroups.callback,
        customGroups.children,
    ],
}

export default [
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        extends: [perfectionist.configs['recommended-natural']],
        rules: {
            'perfectionist/sort-enums': ['warn', { partitionByNewLine: true }],
            'perfectionist/sort-modules': ['warn', { partitionByNewLine: true }],
            'perfectionist/sort-object-types': ['warn', objectLikeOptions],
            'perfectionist/sort-interfaces': ['warn', objectLikeOptions],
            'perfectionist/sort-objects': ['warn', objectLikeOptions],
            'perfectionist/sort-jsx-props': ['warn', perfectionistJsxPropsOptions],
            'perfectionist/sort-union-types': [
                'warn',
                { partitionByNewLine: true, groups: ['named', 'unknown', 'object', 'nullish'] },
            ],
            'perfectionist/sort-intersection-types': [
                'warn',
                { partitionByNewLine: true, groups: ['named', 'unknown', 'object', 'nullish'] },
            ],
            'perfectionist/sort-named-imports': ['warn', { groups: ['value-import', 'type-import'] }],
            'perfectionist/sort-imports': [
                'warn',
                {
                    type: 'natural',
                    internalPattern: ['^@/.+'],
                    groups: [
                        'react',
                        'external',
                        ['internal-components', 'page-components'],
                        'features-components-layout',
                        'internal-shared',
                        'internal',
                        ['parent', 'sibling', 'index'],
                        ['type-external', 'type-internal', 'type-parent', 'type-sibling', 'type-index'],
                        'side-effect',
                        'unknown',
                    ],
                    customGroups: [
                        { groupName: 'react', elementNamePattern: ['^react$', '^react-dom'] },
                        { groupName: 'internal-components', elementNamePattern: '^@/components' },
                        { groupName: 'page-components', elementNamePattern: '^@/.+Page$' },
                        {
                            // Components inside features folder
                            groupName: 'features-components-layout',
                            elementNamePattern: '^@/features/.*/(?:components|layout?)(?:/|$)',
                        },
                        {
                            // Imports from internal shared folder (not features or components)
                            groupName: 'internal-shared',
                            elementNamePattern: '^@/(?!features(?:/|$)|components(?:/|$))',
                        },
                    ],
                },
            ],
        },
    },
]

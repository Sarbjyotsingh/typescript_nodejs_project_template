module.exports = {
    extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended'
    ],
    rules: {
        '@typescript-eslint/indent': 0,
        'max-len': [
            2,
            {
                code: 100,
                tabWidth: 2,
                ignoreStrings: true,
                ignoreComments: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'no-tabs': 2,
        'import/no-extraneous-dependencies': [
            2,
            {
                devDependencies: ['**/__mocks__/**', '**/*.{test,spec}.{js,ts,tsx}'],
            },
        ],
        'no-console': 0
    },
    ignorePatterns: ['**/*.d.ts'],
    parserOptions: {
        project: './tsconfig.json',
    },
};
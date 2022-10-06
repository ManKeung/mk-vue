module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
        commonjs: true,
        amd: true
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src']
                ],
                extensions: ['.ts', '.js', '.jsx', '.json', '.vue']
            }
        }
    },
    globals: {
        // 你的全局变量（设置为 false 表示它不允许被重新赋值）
        //
        // myGlobal: false
    },
    parser: 'vue-eslint-parser',
    // ts eslint 配置
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true,
        }
    },
    plugins: ['@typescript-eslint'],
    extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended'],
    rules: {
        // ! 解决eslint报使用v-html警告
        'vue/no-v-html': 'off',
        'vue/html-self-closing': 'off',
        'vue/html-indent': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/max-attributes-per-line': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 禁用 debugger
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 禁用 console
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'vue/custom-event-name-casing': 'off',
        'vue/multi-word-component-names': 'off',
        'no-use-before-define': 'off',
        'prefer-rest-params': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^h$',
                varsIgnorePattern: '^h$',
            },
        ],
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^h$',
                varsIgnorePattern: '^h$',
            },
        ],
        'space-before-function-paren': 'off',
        quotes: ['error', 'single'],
        'comma-dangle': ['error', 'never'],
        'vue/component-tags-order': [
            'error',
            {
                order: ['style', ['template', 'script']]
            },
        ],
        'max-len': 'off',
        // 统一豁免规则，原因：直接修改可能对现有功能产生影响
        'eqeqeq': 1,
        //  'vue/no-v-html': 1,
        // 其中代码本身有问题的规则错误有
        'no-undef': 0,
        'import/no-duplicates': 0,

        // 可能引起格式化问题但建议手动修改代码的有
        'no-plusplus': 0,
        'no-eval': 0,
        'no-prototype-builtins': 0,
        'no-multi-assign': 0,
        'no-unused-vars': 0,
        'no-useless-escape': 0,
        'camelcase': 0,
        'vue/no-unused-components': 0,
        'vue/return-in-computed-property': 0,
        'no-param-reassign': 0,
        'prefer-const': 0,
        'prefer-destructuring': 0,
        'no-underscore-dangle': 0,
        'no-restricted-syntax': 0,
        'no-nested-ternary': 0,
        'radix': 0,
        'vue/no-side-effects-in-computed-properties': 0,
        'vue/order-in-components': 0,
        'function-paren-newline': 0,
    },
};

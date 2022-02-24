/*
 * @Description: 
 * @version: v1.0
 * @Author: 李腾飞
 * @Date: 2022-01-05 10:03:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-26 17:21:29
 */
module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'eol-last': 0,
        'no-trailing-spaces': 0,
        'space-before-function-paren': 0,
        'comma-dangle': 0,
        'quotes': 0,
        'semi': 0,
        'indent': ['off', 2],
        'padded-blocks': 0
    }
}
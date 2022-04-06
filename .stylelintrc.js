module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-html/vue',
        'stylelint-config-standard-scss',
        'stylelint-config-recommended-vue/scss',
    ],
    rules: {
        "indentation": [ 4, { "baseIndentLevel": 1 } ],
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['v-deep']
            }
        ],
        'number-leading-zero': 'never',
        'no-descending-specificity': null,
        'font-family-no-missing-generic-family-keyword': null,
        'selector-type-no-unknown': null,
        'at-rule-no-unknown': null,
        'no-duplicate-selectors': null,
        'no-empty-source':null,
        'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }]
    }
}

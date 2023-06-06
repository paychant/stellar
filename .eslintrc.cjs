module.exports = {
   "env": {
      "es2021": true,
      "browser": true
   },
   "parser": "@typescript-eslint/parser",
   "plugins": ["import", "promise", "@typescript-eslint"],
   "extends": [
      "prettier",
      "eslint:recommended",
      "plugin:import/recommended",
      "plugin:promise/recommended",
      "plugin:@typescript-eslint/recommended"
   ],
   "parserOptions": {
      "sourceType": "module",
      "ecmaVersion": 2021
   },
   "rules": {
     "import/no-unresolved": 0,
     "@typescript-eslint/no-unused-vars": [1, { vars: 'all', args: 'after-used', argsIgnorePattern: '^_' }],
   }
}

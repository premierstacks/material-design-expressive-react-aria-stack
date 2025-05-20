import { createEslintConfigBrowserTypescriptReact, createEslintConfigIgnores, createEslintConfigIgnoresRoot } from '@premierstacks/eslint-stack';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([globalIgnores(['dist', 'test-results', 'cli']), createEslintConfigIgnores(), createEslintConfigIgnoresRoot(), createEslintConfigBrowserTypescriptReact(), {
  files: ['./prototype/**/*.tsx'],
  rules: {
    'react/jsx-no-literals': 'off',
  }
}]);

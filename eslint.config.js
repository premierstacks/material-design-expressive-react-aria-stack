import { createEslintConfigBrowserTypescriptReactStrict, createEslintConfigIgnores, createEslintConfigIgnoresRoot } from '@premierstacks/eslint-stack';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'test-results']),
  createEslintConfigIgnores(),
  createEslintConfigIgnoresRoot(),
  createEslintConfigBrowserTypescriptReactStrict(),
  {
    rules: {
      'sonarjs/cognitive-complexity': 'off',
    }
  },
  {
    files: ['./prototype/**/*.tsx'],
    rules: {
      'react/jsx-no-literals': 'off',
    }
  },
]);

import globals from 'globals';

import jest from 'eslint-plugin-jest';
import react from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import tsEsLint from '@typescript-eslint/eslint-plugin';
import tsEsLintParser from '@typescript-eslint/parser';

export default [
	{
		files: ['src/**/*.{ts,tsx}', 'demo/**/*.{ts,tsx}', '__tests__/**/*.{ts,tsx}'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.jest
			},
			parser: tsEsLintParser,
			parserOptions: {
				project: 'tsconfig-lint.json',
				sourceType: 'module'
			}
		},
		plugins: {
			jest,
			react,
			prettier,
			reactHooks,
			tsEsLint
		},
		rules: {
			'no-console': 'error'
		},
		settings: {
			react: {
				version: 'detect'
			}
		}
	}
];

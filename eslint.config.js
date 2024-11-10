// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		rules: {
			'indent': [
				'error',
				'tab',
				{
					'SwitchCase': 1,
				},
			],
			'linebreak-style': [
				'error',
				'unix',
			],
			'quotes': [
				'error',
				'single',
			],
			'semi': [
				'error',
				'always',
			],
		},
	},
);

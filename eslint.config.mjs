// eslint.config.mjs (flat config)
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  // Ignorar pastas comuns
  { ignores: ['node_modules', 'dist'] },

  // Regras para arquivos JS/CJS/MJS (configs, scripts)
  {
    files: ['**/*.{js,cjs,mjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    ...js.configs.recommended,
  },

  // Regras para TypeScript COM type-check (apenas código fonte)
  ...tseslint.config(
    {
      files: ['src/**/*.{ts,tsx}'],
      languageOptions: {
        parserOptions: {
          project: ['./tsconfig.json'],
          tsconfigRootDir: import.meta.dirname, // aponta para a raiz do repo
        },
      },
    },
    tseslint.configs.recommendedTypeChecked,
    {
      rules: {
        // aqui ficam suas regras que exigem type info, como:
        // '@typescript-eslint/await-thenable': 'error',
      },
    }
  ),
];


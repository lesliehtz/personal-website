import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // Recommended Astro config
  ...eslintPluginAstro.configs.recommended,

  {
    ignores: ['dist/', '.astro/', 'node_modules/'],
  },
];

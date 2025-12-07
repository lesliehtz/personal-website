import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // Recommended Astro config
  ...eslintPluginAstro.configs.recommended,
  
  {
    rules: {
      // Add any custom rules here
    },
  },
  
  {
    ignores: ['dist/', '.astro/', 'node_modules/'],
  },
];

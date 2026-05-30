import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // Astro의 기본 추천 규칙들을 확장 적용합니다.
  ...eslintPluginAstro.configs.recommended,

  // 프로젝트에 맞는 커스텀 규칙이 필요하다면 여기에 추가합니다.
  {
    rules: {
      // 예: 'astro/no-set-html-directive': 'error'
    },
  },
];

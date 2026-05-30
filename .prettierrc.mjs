/** @type {import("prettier").Config} */
export default {
  // 여기에 원하는 기본 설정을 넣습니다.
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',

  // 💡 중요: Astro 플러그인을 등록합니다.
  plugins: ['prettier-plugin-astro'],

  // Astro 파일에 맞는 파서(Parser)를 지정합니다.
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};

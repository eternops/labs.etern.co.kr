// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // 1. 테스트 실행 환경을 Node.js 환경으로 설정합니다.
    environment: 'node',

    // 2. [핵심] Playwright 파일이나 빌드 파일이 Vitest에 의해 실행되는 것을 방지합니다.
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.astro/**',
      // 프로젝트 구조에 따라 Playwright 파일 위치를 제외해 줍니다.
      '**/*.e2e.ts', // 방법 1 확장자를 쓰실 경우
      '**/tests/**', // Playwright 파일들이 tests/ 폴더에 모여있을 경우
    ],
  },
});

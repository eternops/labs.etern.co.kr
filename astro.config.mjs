// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 배포(PROD) 환경일 때만 하위 경로인 '/labs/'를 적용하고, 개발 환경일 때는 '/'를 사용합니다.
  base: import.meta.env.PROD ? "/labs/" : "/",

  // Astro의 기본 개발 서버 환경 설정 (Nginx/Herd가 바라볼 수 있도록 문을 열어줍니다)
  server: {
    host: true,
  },

  vite: {
    plugins: [tailwind()],
    
    // Nginx(Herd) 호스트 허용 설정 (Vite 6 내부 보안 정책 우회)
    server: {
      strictPort: true,
      allowedHosts: true, // labs.test 접속 허용
    },
  },
});
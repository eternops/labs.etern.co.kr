// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://labs.etern.co.kr',
  
  // Astro의 기본 개발 서버 환경 설정 (Nginx/Herd가 바라볼 수 있도록 문을 열어줍니다)
  server: {
    host: true,
  },

  vite: {
    plugins: [tailwind()],
    
    // Nginx(Herd) 호스트 허용 설정 (Vite 6 내부 보안 정책 우회)
    server: {
      strictPort: true,
      allowedHosts: true, // labs.etern.co.kr.test 접속 허용
    },
  },
});
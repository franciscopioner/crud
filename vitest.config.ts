import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
      setupFiles: './src/test/setup.ts',
      globals: true,
      environment: 'jsdom',
      coverage: {
        provider: 'istanbul', // or 'c8',
        all: true,
        reporter: ['lcov', 'html', 'text'],
        reportsDirectory: 'coverage',
        include: ['src/**'],
        exclude: [
          'src/**/*.d.ts',
          'src/test/**',
          'src/**/*.{spec, test}.{ts.tsx}',
          'src/styles/**',
          'src/constants/**'
        ],
      },
      include: ['**/src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
});

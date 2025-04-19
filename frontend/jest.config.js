module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/main.tsx',
    '!src/index.ts',
    '!src/index.css',
    '!src/vite-env.d.ts',
  ],
  coverageReporters: ['text', 'lcov'],
};

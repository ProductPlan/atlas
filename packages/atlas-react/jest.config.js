module.exports = {
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**'],
  coverageDirectory: '<rootDir>/tests/unit/reports/coverage',
  displayName: {
    name: 'ProductPlan Atlas',
    color: 'magenta',
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  modulePaths: ['node_modules', '<rootDir>'],
  moduleFileExtensions: [
    'js',
    'jsx',
    'mjs',
    'node',
    'json',
  ],
  moduleNameMapper: {
    ['\\.(c|sc|sa)ss$']: 'identity-obj-proxy',
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'ProductPlan Atlas - Unit Tests',
        usePathForSuiteName: 'false',
        outputName: 'unit.xml',
        outputDirectory: '<rootDir>/tests/reports/coverage',
      },
    ],
  ],
  setupFilesAfterEnv: ['<rootDir>/jestSetup.js'],
  testMatch: [
    '<rootDir>/tests/**/*.{integration,spec,specs,suite,test,tests,unit}.{js,jsx,mjs}',
  ],
  testPathIgnorePatterns: ['/.next/', '/dist/', '/node_modules/', '/out/'],
  transformIgnorePatterns: [
    '@babel/runtime/helpers/(.*)$',
    '/node_modules/',
    '\\.(html|svg|png|jpg|gif|eot|ttf|woff|woff2|gql)$',
    '^.+\\.module\\.(css|sass|scss)$',
    '<rootDir>/node_modules/@babel/runtime/helpers/(.*)$',
  ],
  testEnvironment: 'jsdom',
  verbose: true,
};

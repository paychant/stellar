module.exports = {
  preset: 'ts-jest',
  rootDir: '../../',
  testRegex: '.test.ts$',
  reporters: ['default'],
  testTimeout: 10000,
  testEnvironment: 'node',
  collectCoverage: false,
  testPathIgnorePatterns: ['<rootDir>/(node_modules)/'],
};

require('dotenv/config');
module.exports = {
  preset: 'ts-jest',
  rootDir: '../../',
  testRegex: '.test.ts$',
  reporters: ['default'],
  testTimeout: parseInt(process.env.TEST_TIMEOUT),
  testEnvironment: 'node',
  collectCoverage: false,
  testPathIgnorePatterns: ['<rootDir>/(node_modules)/'],
};

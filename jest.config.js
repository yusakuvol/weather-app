const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    'ui/(.*)': '<rootDir>/app/ui/$1',
    'lib/(.*)': '<rootDir>/app/lib/$1',
  },
}

module.exports = createJestConfig(customJestConfig)

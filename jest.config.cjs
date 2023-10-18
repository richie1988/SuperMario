module.exports = {
  
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/',
    ],
    moduleNameMapper: {
      '\\.css$': '<rootDir>/empty-module.js',
    },
  };
  
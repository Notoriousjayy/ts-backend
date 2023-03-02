module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    reporters: ['default', 'jest-junit'],
    coverageDirectory: 'TestReports',
    collectCoverage: true,
    coverageReporters: ['text', 'cobertura', 'lcov'],
    collectCoverageFrom: ['src/**/*.{js,ts}'],
    coveragePathIgnorePatterns:[
        '/package.json',
        '/package-lock.json',
        'node_modules',
        '/TestReports',
    ],
    coverageThreshold: {
        global:{
            branches: 0,
            functions:0,
            lines:0,
            statements:0,
        },
    },
    moduleNameMapper:{
        'src/(.*)': "<rootDir>/src/$1",
    },
    moduleDirectories: ['node_modules', 'src', 'test'],
    testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
    modulePaths:['<rootDir>/src'],
    transform: {'\\.[jt]sx?$': 'babel-jest'},
    transformIgnorePatterns:['node_modules/(?!((axios)|(easy\-soap))/)'],
};
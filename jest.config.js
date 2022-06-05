/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	moduleNameMapper: {
		'\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/identity-obj-proxy',
	},
	modulePaths: ['<rootDir>/src'],
}

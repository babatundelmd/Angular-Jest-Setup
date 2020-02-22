module.exports = {
    globals: {
        "ts-jest": {
            tsConfig: "./tsconfig.spec.json",
            stringifyContentPathRegex: "\\.html$",
            astTransformers: [
                "jest-preset-angular/build/InlineFilesTransformer",
                "jest-preset-angular/build/StripStylesTransformer"
            ]
        }
    },
    preset: "jest-preset-angular",
    setupFilesAfterEnv: [ "<rootDir>/setupJest.ts" ],
    transform: {
        "^.+\\.(ts|js|html)$": "ts-jest"
    },
    testEnvironment: "jest-environment-jsdom-fourteen",
    moduleDirectories: [ "node_modules" ],
    moduleFileExtensions: [ "ts", "html", "js", "json" ],
    moduleNameMapper: {
        "^environments/(.*)$": "<rootDir>/src/environments/environment.ts",
        "^@environments/(.*)$": "<rootDir>/src/environments/environment.ts"
    },
    transformIgnorePatterns: [ "node_modules/(?!@ngrx)" ],
    snapshotSerializers: [
        "jest-preset-angular/build/AngularSnapshotSerializer.js",
        "jest-preset-angular/build/HTMLCommentSerializer.js"
    ]
};

# Angular Jest Setup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `npm test` to execute the unit tests via [Jest](https://https://jestjs.io/).

### Angular Jest Setup

- ```npm install -D jest jest-preset-angular @types/jest```

**This will install `jest`, `@types/jest`, `jest-preset-angular` as devDependencies needed to run with Angular projects.

- Add
```
},
    "jest": {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
      "<rootDir>/setupJest.ts"
    ]
  }
}
  ```

underneath `devDependencies.`

- #### Add the following to the `root` directory.
    - `tsconfig.spec.json`
    ```
    {
        "extends": "./tsconfig.json",
        "compilerOptions": {
            "outDir": "./out-tsc/spec",
            "types": [
                "jest",
                "node"
            ]
        },
        "files": [
            "polyfills.ts"
        ],
        "include": [
            "**/*.spec.ts",
            "**/*.d.ts"
        ]
    }
    ```
    - `setupJest.ts`
    ```
    import 'jest-preset-angular';
    import './jestGlobalMocks';
    ```
    - `polyfills.ts`
    ```
    import 'zone.js/dist/zone';
    ```
    - `jestGlobalMocks.ts`
    ```
    Object.defineProperty(window, 'CSS', { value: null });
    Object.defineProperty(document, 'doctype', {
        value: '<!DOCTYPE html>'
    });
    Object.defineProperty(window, 'getComputedStyle', {
        value: () => {
            return {
                display: 'none',
                appearance: [ '-webkit-appearance' ]
            };
        }
    });
    Object.defineProperty(document.body.style, 'transform', {
        value: () => {
            return {
                enumerable: true,
                configurable: true,
            };
        },
    });
    ```
    - `jest.config.js`
    ```
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
    ```
    - `jest-config.helper.ts`
    ```
    import { ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';
    import { Type } from '@angular/core';

    type CompilerOptions = Partial<{
        providers: any[];
        useJit: boolean;
        preserveWhitespaces: boolean;
    }>;
    export type ConfigureFn = (testBed: typeof TestBed) => void;

    export const configureTests = (
        configure: ConfigureFn,
        compilerOptions: CompilerOptions = {}
    ) => {
        const compilerConfig: CompilerOptions = {
            preserveWhitespaces: false,
            ...compilerOptions,
        };

        const configuredTestBed = TestBed.configureCompiler(compilerConfig);

        configure(configuredTestBed);

        return configuredTestBed.compileComponents().then(() => configuredTestBed);
    };

    export function createComponent<TComponent>(
        type: Type<TComponent>,
        options: TestModuleMetadata) {
        let component: TComponent;
        let fixture: ComponentFixture<TComponent>;

        const configure: ConfigureFn = testBed => {
            testBed.configureTestingModule(options).compileComponents();
        };

        return configureTests(configure).then(testBed => {
            fixture = testBed.createComponent(type);
            component = fixture.componentInstance;
            return { component, fixture };
        });
    }
    ```
Remove `test.ts` from the `src` directory

Remove the following from `package.json`
```
    "karma": "~4.0.0",
    "karma-chrome-launcher": "~2.2.0",
    "karma-coverage-istanbul-reporter": "~2.0.1",
    "karma-jasmine": "~1.1.2",
    "karma-jasmine-html-reporter": "^0.2.2",
    **In devDependencies** remove the following:
    "@types/jasmine": "~2.8.8",
    "@types/jasminewd2": "~2.0.3",
```
Add `"test": "jest src/.*\\.spec.ts -c jest.config.js",` to the npm `script`







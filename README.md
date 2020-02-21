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

-


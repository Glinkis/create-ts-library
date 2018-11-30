# create-ts-library

Create typescript-based javascript libraries without any configuration. Simply run `create-ts-library init`, and it will generate a project structure for you:

```
project
├─ src
│  └─ index.ts
├─ test
│  └─ index.test.ts
├─ tslint.json
└─ tsconfig.json
```

You will also need to set the `name`, `version` & `config/library` properties of your `package.json`-file.

```json
{
  "name": "<library name>",
  "version": "<library version>",
  "config": {
    "library": "<library module name>"
  }
}
```

Use `create-ts-library build` to build your library for distribution.

This will output multiple different consumable versions of the library into the `dist` folder.
The consumable versions are:

- `./lib` - The compiled library with commonjs modules.
- `./es` - The compiled library with native javascript modules.
- `./types` - The type declarations for the library.
- `<library-name>.<version>.js` - A single bundled file, containing the whole library.
- `<library-name>.<version>.min.js` - A minified version of the bundled library.
- `<library-name>.<version>.d.ts` - A type declaration file for the bundled library.

## Commands

| Flag    | Description                 |
| ------- | --------------------------- |
| `init`  | Set up required files.      |
| `build` | Run a full build.           |
| `dev`   | Build a development bundle. |
| `prod`  | Build a production bundle.  |
| `lib`   | Build a commonjs library.   |
| `es`    | Build a esnext library.     |
| `test`  | Run tests.                  |
| `watch` | Run in watch mode.          |
| `help`  | Display commands.           |
| `lint`  | Lint Project.               |

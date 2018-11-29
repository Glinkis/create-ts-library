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

Use `create-ts-library --build` to build your library in for distribution.

This will output multiple different consumable versions of the library into the `dist` folder.
The consumable versions are:

- `./lib` - The compiled library with commonjs modules.
- `./es` - The compiled library with native javascript modules.
- `<library-name>.<version>.js` - An unminified bundle.
- `<library-name>.<version>.min.js` - An minified bundle.

## CLI

| Flag          | Description                 |
| ------------- | --------------------------- |
| `init`        | Set up required files.      |
| `-b, --build` | Run a full build.           |
| `-d, --dev`   | Build a development bundle. |
| `-p, --prod`  | Build a production bundle.  |
| `-l, --lib`   | Build a commonjs library.   |
| `-e, --es`    | Build a esnext library.     |
| `-t, --test`  | Run tests.                  |
| `-w, --watch` | Run in watch mode.          |
| `-h, --help`  | Display commands.           |
| `--lint`      | Lint Project.               |

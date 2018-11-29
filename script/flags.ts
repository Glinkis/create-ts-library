export default {
  init: {
    flags: "init",
    desc: "Set up required files.",
  },
  build: {
    flags: "build",
    desc: "Run a complete build.",
  },
  dev: {
    flags: "dev",
    desc: "Build a development bundle.",
  },
  prod: {
    flags: "prod",
    desc: "Build a production bundle.",
  },
  lib: {
    flags: "lib",
    desc: "Build a unbundled commonjs module library.",
  },
  es: {
    flags: "es",
    desc: "Build a unbundled esnext module library.",
  },
  test: {
    flags: "test",
    desc: "Run tests.",
  },
  watch: {
    flags: "watch",
    desc: "Run in watch mode.",
  },
  help: {
    flags: "help",
    desc: "Display commands.",
  },
  lint: {
    flags: "lint",
    desc: "Run linter.",
  },
};

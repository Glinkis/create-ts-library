export default {
  build: {
    flags: "-b,--build",
    desc: "Run a complete build.",
  },
  dev: {
    flags: "-d,--dev",
    desc: "Build a development bundle.",
  },
  prod: {
    flags: "-p,--prod",
    desc: "Build a production bundle.",
  },
  lib: {
    flags: "--lib",
    desc: "Build a unbundled commonjs module library.",
  },
  es: {
    flags: "--es",
    desc: "Build a unbundled esnext module library.",
  },
  lint: {
    flags: "-l,--lint",
    desc: "Run linter.",
  },
  test: {
    flags: "-t,--test",
    desc: "Run tests.",
  },
  watch: {
    flags: "-w,--watch",
    desc: "Run in watch mode.",
  },
  help: {
    flags: "-h,--help",
    desc: "Display commands.",
  },
};

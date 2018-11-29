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
    flags: "-l,--lib",
    desc: "Build a unbundled commonjs module library.",
  },
  es: {
    flags: "-e,--es",
    desc: "Build a unbundled esnext module library.",
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
  lint: {
    flags: "--lint",
    desc: "Run linter.",
  },
};

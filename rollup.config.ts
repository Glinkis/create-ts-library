import resolve from "rollup-plugin-node-resolve";
import sourceMaps from "rollup-plugin-sourcemaps";

export default {
  external: [],
  input: "compiled/index.js",
  output: [{ file: "dist/jslib.js", format: "es" }],
  plugins: [resolve(), sourceMaps()],
  sourcemap: true,
  watch: {
    include: "compiled/**"
  }
};

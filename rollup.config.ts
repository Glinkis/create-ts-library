import resolve from "rollup-plugin-node-resolve";
import sourceMaps from "rollup-plugin-sourcemaps";
import uglify from "rollup-plugin-uglify";

export default {
  external: [],
  input: "es/index.js",
  output: [{ file: "dist/jslib-utils.min.js", format: "cjs" }],
  plugins: [resolve(), sourceMaps(), uglify()],
  sourcemap: true,
  watch: {
    include: "es/**"
  }
};

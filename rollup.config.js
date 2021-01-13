// rollup.config.js
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
export default {
  input: "index.js",
  output: {
    file: "./dist/index.js",
    format: "cjs",
  },

  //   external: ["fs", "path", "events", "tty", "util", "os", "querystring","http","url"],
  plugins: [
    json(),
    nodeResolve({
      preferBuiltins: true,
    }),
    commonjs({
      ignore: ["conditional-runtime-dependency"], // 使用旧版本 rollup-plugin-commonjs 解决 dynamic require
    }),
    // terser(),
  ],
};

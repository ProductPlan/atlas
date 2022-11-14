/* eslint-disable import/no-anonymous-default-export */
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { externals } from "rollup-plugin-node-externals";
import scss from "rollup-plugin-scss";
import postcss from "rollup-plugin-postcss";
import del from "rollup-plugin-delete";
import pkg from "./package.json";

export default [
  {
    input: "./src/index.js",
    plugins: [
      del({ targets: "dist/*" }),
      externals({ deps: true }),
      nodeResolve({
        extensions: [".js", "jsx"],
      }),
      scss({
        include: ["./src/common/styles/tokens.scss"],
        output: "dist/tokens.css",
      }),
      postcss({
        include: ["./src/**/*.scss"],
        exclude: ["**/tokens.scss"],
        modules: true,
        extract: "atlas.css",
        use: ["sass"],
      }),
      babel({
        babelHelpers: "runtime",
        exclude: "**/node_modules/**",
        extensions: [".js", ".jsx"],
      }),
      commonjs(),
    ],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es", exports: "named" },
    ],
  },
];

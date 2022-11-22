/* eslint-disable import/no-anonymous-default-export */
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { externals } from "rollup-plugin-node-externals";
import scss from "rollup-plugin-scss";
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
        prefix: `@import "./src/common/styles/atlas.scss";`,
        output: "dist/atlas.css",
      }),
      commonjs({ include: /node_modules/ }),
      babel({ babelHelpers: 'bundled' })
    ],
    output: [
      { dir: './dist/cjs/', format: "cjs" },
      { dir: './dist/esm/', format: "es", exports: "named" },
    ],
  },
];

/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable turbo/no-undeclared-env-vars */
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { externals } from "rollup-plugin-node-externals";
import scss from "rollup-plugin-scss";
import del from "rollup-plugin-delete";
import { uglify } from "rollup-plugin-uglify";

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
        outputStyle:
          process.env.NODE_ENV === "production" ? "compressed" : "expanded",
      }),
      commonjs({ include: /node_modules/ }),
      babel({ babelHelpers: "bundled" }),
      process.env.NODE_ENV === "production" && uglify(),
    ],
    output: [
      { dir: "./dist/cjs/", format: "cjs", sourcemap: true },
      { dir: "./dist/esm/", format: "es", exports: "named", sourcemap: true },
    ],
  },
];

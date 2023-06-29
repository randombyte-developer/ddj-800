import rollupPluginTypeScript from "rollup-plugin-typescript2";

export default {
  input: "./src/pioneer-ddj800.ts",
  output: {
    file: "./dist/pioneer-ddj800.js",
    format: "iife",
    name: "PioneerDdj800",
  },
  plugins: [
    rollupPluginTypeScript({
      tsconfig: "./tsconfig.json",
      clean: true,
    }),
  ],
};

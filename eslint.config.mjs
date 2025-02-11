import globals from "globals";
import pluginJs from "@eslint/js";
import js from "@eslint/js";


export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
   ...js.configs.recommended,
];
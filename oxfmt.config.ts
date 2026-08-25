import { defineConfig } from "oxfmt";

export default defineConfig({
  printWidth: 80,
  sortImports: {
    customGroups: [
      {
        groupName: "react-libs",
        elementNamePattern: ["react", "react-**"],
      },
    ],
    groups: [
      "react-libs",
      ["value-builtin", "value-external"],
      "value-internal",
      ["value-parent", "value-sibling", "value-index"],
      "unknown",
    ],
  },
  sortTailwindcss: {
    stylesheet: "src/index.css",
    functions: ["clsx", "cn"],
    preserveWhitespace: true,
  },
  sortScripts: true,
  ignorePatterns: ["dist/**", "*.min.js"],
});

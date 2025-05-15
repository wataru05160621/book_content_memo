module.exports = {
  root: true,
  plugins: ["prettier"],
  extends: ["prettier"], // 最優先で Prettier と競合しないように
  overrides: [
    {
      // Frontend (React Native)
      files: ["frontend/**/*.{ts,tsx,js,jsx}"],
      parser: "@typescript-eslint/parser",
      plugins: [
        "@typescript-eslint",
        "react",
        "react-native",
        "react-hooks",
        "prettier",
      ],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-native/all",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended",
      ],
      settings: { react: { version: "detect" } },
      env: { "react-native/react-native": true },
    },
    {
      // Backend (NestJS)
      files: ["backend/**/*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint", "import", "prettier"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:prettier/recommended",
      ],
      env: { node: true, jest: true },
    },
  ],
};

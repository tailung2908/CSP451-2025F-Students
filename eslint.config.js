cat > eslint.config.js <<'EOF'
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"]
    }
  }
];
EOF

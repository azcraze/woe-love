module.exports = {
  branches: ["main", "develop"],
  plugins: [
    [
      "semantic-release-gitmoji",
      {
        releaseRules: {
          major: [":boom:"],
          minor: [":sparkles:"],
          patch: [":bug:", ":ambulance:", ":lock:"],
        },
        // ... other options
      },
    ],
    ["@semantic-release/changelog", { changelogFile: "CHANGELOG.md" }],
    "@semantic-release/github",
    "@semantic-release/npm",
  ],
};

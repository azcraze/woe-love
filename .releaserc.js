module.exports = {
    "plugins": [
      "@semantic-release/commit-analyzer",
      "@semantic-release/git",
      [
        "@semantic-release/release-notes-generator",
        {
          "preset": "angular",
          "writerOpts": {
            "commitsSort": ["subject", "scope"]
          },
          "template": "./path/to/release-notes-template.hbs"
        }
      ],
      "@semantic-release/github"
    ],
    "git": {
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${body}\n\n${footer}\n",
      "assets": ["CHANGELOG.md"],
      "commitHooks": ["npm run lint"]
    }
  }
  
const fs = require("fs");
const path = require("path");
const dateFormat = require("dateformat");

const TEMPLATE_DIR = "./node_modules/semantic-release-gitmoji/lib/assets/templates";

const template = fs.readFileSync(path.join(TEMPLATE_DIR, "default-template.hbs"), 'utf8');
const commitTemplate = fs.readFileSync(path.join(TEMPLATE_DIR, "commit-template.hbs"), 'utf8');

module.exports = {
  branches: ["main", "develop"], // Corrected the typo here from 'devleop' to 'develop'
  plugins: [
    [
      "semantic-release-gitmoji",
      {
        releaseRules: {
          major: [":boom:"],
          minor: [":sparkles:"],
          patch: [":bug:", ":ambulance:", ":lock:"],
        },
        releaseNotes: {
          template,
          partials: { commitTemplate },
          helpers: {
            datetime: function (format = "UTC:yyyy-mm-dd") {
              return dateFormat(new Date(), format);
            },
          },
          issueResolution: {
            template: "{baseUrl}/{owner}/{repo}/issues/{ref}",
            baseUrl: "https://github.com",
            source: "github.com",
            removeFromCommit: false,
            regex: /#\d+/g,
          },
        },
      },
    ],
    ["@semantic-release/changelog", { changelogFile: "CHANGELOG.md" }],
    "@semantic-release/github",
    "@semantic-release/npm",
  ],
};

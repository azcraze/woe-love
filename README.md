# Project Title

A brief description of what this project does and who it's for

## Badges

![NPM](https://img.shields.io/npm/l/woe-love?style=for-the-badge)

![GitHub package.json version](https://img.shields.io/github/package-json/v/azcraze/woe-love?style=for-the-badge)

![GitHub commit activity](https://img.shields.io/github/commit-activity/w/azcraze/woe-love?style=for-the-badge)

![GitHub last commit](https://img.shields.io/github/last-commit/azcraze/woe-love?style=for-the-badge)

## Installation

Install my-project with npm

```bash
  npm install woe-love --save
```

## Documentation

WIP

## Dependencies

- [@davidfig/json-depth](https://ghub.io/@davidfig/json-depth): Prettify JSON for output with a number of options, including inlining after a set depth
- [@hero-page/hero-ai-package-creator](https://ghub.io/@hero-page/hero-ai-package-creator): Create complete NPM packages quickly and easily with the power of AI. The hero-ai-package-creator generates all necessary files and configurations for your NPM package, saving you time and effort in the development process.
- [@karmaniverous/dirtree](https://ghub.io/@karmaniverous/dirtree): Parses a directory into a nicely-formatted ASCII tree. Includes a CLI.
- [@tectalic/openai](https://ghub.io/@tectalic/openai): Tectalic OpenAI REST API Client
- [cwd](https://ghub.io/cwd): Easily get the CWD (current working directory) of a project based on package.json, optionally starting from a given path. (node.js/javascript util)
- [gradient-string](https://ghub.io/gradient-string): Beautiful color gradients in terminal output
- [jsome](https://ghub.io/jsome): Make your JSON look AWESOME!
- [jsonpath](https://ghub.io/jsonpath): Query JavaScript objects with JSONPath expressions. Robust / safe JSONPath engine for Node.js.
- [lowline.ai](https://ghub.io/lowline.ai): An AI powered utility library
- [luxon](https://ghub.io/luxon): Immutable date wrapper
- [openai](https://ghub.io/openai): Node.js library for the OpenAI API
- [path-resolver](https://ghub.io/path-resolver): returns a valid filesystem path.
- [pretty-error](https://ghub.io/pretty-error): See nodejs errors with less clutter
- [relative](https://ghub.io/relative): Get the relative filepath from path A to path B. Calculates from file-to-directory, file-to-file, directory-to-file, and directory-to-directory.
- [requireindex](https://ghub.io/requireindex): Write minimal node index.js files that require and export siblings by file basename
- [typy](https://ghub.io/typy): Minimal JavaScript type checking library
- [winston](https://ghub.io/winston): A logger for just about everything.

## Run Locally

Clone the project

```bash
  git clone https://github.com/azcraze/woe-love.git
```

Go to the project directory


## Dev Dependencies

- [@semantic-release/changelog](https://ghub.io/@semantic-release/changelog): semantic-release plugin to create or update a changelog file
- [ajv](https://ghub.io/ajv): Another JSON Schema Validator
- [auto-changelog](https://ghub.io/auto-changelog): Command line tool for generating a changelog from git tags and commit history
- [commitizen](https://ghub.io/commitizen): Git commit, but play nice with conventions.
- [cz-git](https://ghub.io/cz-git): A better customizable and git support commitizen adapter
- [cz-gitmoji](https://ghub.io/cz-gitmoji): Commitizen adapter for gitmoji.
- [dotenv](https://ghub.io/dotenv): Loads environment variables from .env file
- [eslint-config-prettier](https://ghub.io/eslint-config-prettier): Turns off all rules that are unnecessary or might conflict with Prettier.
- [jest](https://ghub.io/jest): Delightful JavaScript Testing.
- [prettier](https://ghub.io/prettier): Prettier is an opinionated code formatter
- [semantic-release-gitmoji](https://ghub.io/semantic-release-gitmoji): Different from conventional changelog, Gitmoji commits are used to determine a release type and generate release notes.

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Roadmap

- [ ] create undo functionality for score input
- [x] fix tests
- [ ] Complete leaderboard commands
- [ ] Player profile commands

# tests

- [test-files/](./tests/test-files)
  - [addScores.json](./tests/test-files/addScores.json)
  - [kcScores.json](./tests/test-files/kcScores.json)
  - [kcScoresOfficial.json](./tests/test-files/kcScoresOfficial.json)
  - [logs.json](./tests/test-files/logs.json)
  - [rkScores.json](./tests/test-files/rkScores.json)
  - [skVars.json](./tests/test-files/skVars.json)
  - [skVars.test.json](./tests/test-files/skVars.test.json)
  - [storedVariables.json](./tests/test-files/storedVariables.json)
  - [test-records.json](./tests/test-files/test-records.json)
  - [writeDateToFile.test.json](./tests/test-files/writeDateToFile.test.json)
- [test-suite/](./tests/test-suite)
  - [date.tests/](./tests/test-suite/date.tests)
    - [adjustDate.test.js](./tests/test-suite/date.tests/adjustDate.test.js)
    - [currentDate.test.js](./tests/test-suite/date.tests/currentDate.test.js)
    - [otherDateFunctions.test.js](./tests/test-suite/date.tests/otherDateFunctions.test.js)
    - [validateDate.test.js](./tests/test-suite/date.tests/validateDate.test.js)
  - [errorMessages.test.js](./tests/test-suite/errorMessages.test.js)
  - [filesystem.test.js](./tests/test-suite/filesystem.test.js)
  - [readParse.test.js](./tests/test-suite/readParse.test.js)
  - [test.js](./tests/test-suite/test.js)
  - [typeChecking.test.js](./tests/test-suite/typeChecking.test.js)
  - [utils.test.js](./tests/test-suite/utils.test.js)
  - [writeToFile.test.js](./tests/test-suite/writeToFile.test.js)
- [~/](./tests/~)
  - [.dotfiles/](./tests/~/.dotfiles)
- [addScores.js](./tests/addScores.js)
- [formatAndSortScoresTest.js](./tests/formatAndSortScoresTest.js)
- [generateTable.test.js](./tests/generateTable.test.js)
- [getPlayerScoresArrayTest.js](./tests/getPlayerScoresArrayTest.js)
- [getScoresArrayTest.js](./tests/getScoresArrayTest.js)
- [madKiller.js](./tests/madKiller.js)
- [playerScoresDataTest.js](./tests/playerScoresDataTest.js)
- [restructure.js](./tests/restructure.js)
- [test-values.js](./tests/test-values.js)
- [test.js](./tests/test.js)

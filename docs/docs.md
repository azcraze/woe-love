## Modules

<table>
  <thead>
    <tr>
      <th>Module</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><a href="#module_utils">utils</a></td>
    <td><p>Main module that exports various utility functions and constants.</p>
</td>
    </tr>
</tbody>
</table>

## Constants

<dl>
<dt><a href="#errorMessages">`errorMessages`</a> : <code><a href="#ErrorMessages">ErrorMessages</a></code></dt>
<dd><p>Error messages for different error types.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#addDay">`addDay(dateString)`</a> ⇒ <code>string</code></dt>
<dd><p>Adds one day to a date string.</p>
</dd>
<dt><a href="#subtractDay">`subtractDay(dateString)`</a> ⇒ <code>String</code></dt>
<dd></dd>
<dt><a href="#addPlayerScores">`addPlayerScores(scoreboard, dateUnit, score1, score2, [player])`</a></dt>
<dd><p>Adds scores to the specified scoreboard and date unit for a player.</p>
</dd>
<dt><a href="#kc">`kc(scores, dateUnit, score1, score2)`</a></dt>
<dd><p>Adds scores to the KC scoreboard and date unit for a player.</p>
</dd>
<dt><a href="#rk">`rk(scores, dateUnit, score1, score2)`</a></dt>
<dd><p>Adds scores to the RK scoreboard and date unit for a player.</p>
</dd>
<dt><a href="#addScores">`addScores(scoreboard, period, dateUnit, player, score1, score2)`</a></dt>
<dd><p>Adds scores to the specified scoreboard, period, and date unit.</p>
</dd>
<dt><a href="#getScores">`getScores(scoreboard)`</a> ⇒ <code>Object</code></dt>
<dd><p>Retrieves the scores object for the specified scoreboard.</p>
</dd>
<dt><a href="#kc">`kc(scores, period, dateUnit, player, score1, score2)`</a></dt>
<dd><p>Adds scores to the KC scoreboard, period, and date unit.</p>
</dd>
<dt><a href="#rk">`rk(scores, period, dateUnit, player, score1, score2)`</a></dt>
<dd><p>Adds scores to the RK scoreboard, period, and date unit.</p>
</dd>
<dt><a href="#exact">`exact(numExpected, args)`</a> ⇒ <code>string</code> | <code>null</code></dt>
<dd><p>Checks if the number of arguments matches the expected count.</p>
</dd>
<dt><a href="#atLeast">`atLeast(expected, args)`</a> ⇒ <code>string</code> | <code>null</code></dt>
<dd><p>Checks if the number of arguments is at least the expected count.</p>
</dd>
<dt><a href="#getEndOfPeriodArr">`getEndOfPeriodArr()`</a> ⇒ <code><a href="#EndOfPeriodArr">EndOfPeriodArr</a></code></dt>
<dd><p>Retrieves an array containing the end of the period information.</p>
</dd>
<dt><a href="#processInput">`processInput(scoreboard, inputString)`</a> ⇒ <code>string</code> | <code>Array</code></dt>
<dd><p>Processes the input based on the scoreboard type.</p>
</dd>
<dt><a href="#processRKInput">`processRKInput(inputString)`</a> ⇒ <code>string</code> | <code>Array</code></dt>
<dd><p>Processes the input for the &quot;rk&quot; scoreboard type.</p>
</dd>
<dt><a href="#processKCInput">`processKCInput(inputString)`</a> ⇒ <code>string</code> | <code>Array</code></dt>
<dd><p>Processes the input for the &quot;kc&quot; scoreboard type.</p>
</dd>
<dt><a href="#isValidName">`isValidName(name)`</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a name is valid (contains only lowercase letters).</p>
</dd>
<dt><a href="#getErrorMessage">`getErrorMessage(category, code)`</a> ⇒ <code>string</code></dt>
<dd><p>Retrieves the error message based on the category and code.</p>
</dd>
<dt><a href="#ListNames">`ListNames(path)`</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Retrieves the list of names from the specified file.</p>
</dd>
<dt><a href="#NameExists">`NameExists(path, name)`</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a name exists in the list of names from the specified file.</p>
</dd>
<dt><a href="#getDateValues">`getDateValues(path)`</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#defaultPath">`defaultPath(keyword)`</a> ⇒ <code>string</code></dt>
<dd><p>Returns the default path based on the provided keyword.</p>
</dd>
<dt><a href="#determineWinners">`determineWinners(scoreboard)`</a> ⇒ <code>Object</code></dt>
<dd><p>Determines the winners for each period based on the scoreboard type.</p>
</dd>
<dt><a href="#getWinners">`getWinners(scores)`</a> ⇒ <code>Array.&lt;Object&gt;</code></dt>
<dd><p>Determines the winners based on the scores.</p>
</dd>
<dt><a href="#errMsg">`errMsg(msg, ind, [arg])`</a> ⇒ <code>string</code></dt>
<dd><p>Generates an error message.</p>
</dd>
<dt><a href="#errHelp">`errHelp()`</a> ⇒ <code>string</code></dt>
<dd><p>Generates a help string with all error messages.</p>
</dd>
<dt><a href="#transformScores">`transformScores(scoreboard, input)`</a> ⇒ <code>Object</code></dt>
<dd><p>Transforms the scores array into an object with player scores grouped by categories.</p>
</dd>
<dt><a href="#sortScores">`sortScores(scoresArray)`</a> ⇒ <code>Array</code></dt>
<dd><p>Sorts the scores array in descending order based on the total score.</p>
</dd>
<dt><a href="#validateInput">`validateInput(scoreboard, inputString)`</a> ⇒ <code>boolean</code></dt>
<dd><p>Validates the input for a given scoreboard.</p>
</dd>
<dt><a href="#validateRKInput">`validateRKInput(inputString)`</a> ⇒ <code>boolean</code></dt>
<dd><p>Validates the input for the RK scoreboard.</p>
</dd>
<dt><a href="#validateKCInput">`validateKCInput(inputString)`</a> ⇒ <code>boolean</code></dt>
<dd><p>Validates the input for the KC scoreboard.</p>
</dd>
<dt><a href="#isValidName">`isValidName(name)`</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if the given name is valid.</p>
</dd>
<dt><a href="#formatLeaderboard">`formatLeaderboard(scoresArray)`</a> ⇒ <code>string</code></dt>
<dd><p>Formats the scores array into a leaderboard string.</p>
</dd>
<dt><a href="#getPeriod">`getPeriod(inputPeriod)`</a> ⇒ <code>Object</code></dt>
<dd><p>Returns the period and title based on the input period</p>
</dd>
<dt><a href="#getJsonData">`getJsonData(scoreboard, input, scoresDataPath)`</a> ⇒ <code>object</code></dt>
<dd><p>Retrieves JSON data from a file path based on the scoreboard type and input parameters.
If scoresDataPath is provided, then that path is used. Otherwise, the default path is used.</p>
</dd>
<dt><a href="#getStamp">`getStamp(path, inputPeriod)`</a> ⇒ <code>string</code></dt>
<dd><p>Returns a stamp based on the given path and input period.</p>
</dd>
<dt><a href="#leaderboard">`leaderboard(option, period)`</a> ⇒ <code>string</code></dt>
<dd><p>Generates a leaderboard based on the specified options.</p>
</dd>
<dt><a href="#newDate">`newDate(dateValue)`</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#parseDate">`parseDate(dateStamp)`</a> ⇒ <code>DateTime</code></dt>
<dd><p>Helper function to parse date string into a Luxon DateTime object.</p>
</dd>
<dt><a href="#calculateTomorrow">`calculateTomorrow(date)`</a> ⇒ <code>DateTime</code></dt>
<dd><p>Helper function to calculate tomorrow&#39;s date given a DateTime object representing a date.</p>
</dd>
<dt><a href="#calculateFirstOfMonth">`calculateFirstOfMonth(year, month)`</a> ⇒ <code>DateTime</code></dt>
<dd><p>Helper function to calculate the first day of a month given a year and month number.</p>
</dd>
<dt><a href="#calculateFirstOfYear">`calculateFirstOfYear(year)`</a> ⇒ <code>DateTime</code></dt>
<dd><p>Helper function to calculate the first day of a year given a year number.</p>
</dd>
<dt><a href="#checkDateInfo">`checkDateInfo(dateInfo)`</a> ⇒ <code>Array.&lt;boolean&gt;</code></dt>
<dd><p>Main function to check date information and determine options.</p>
</dd>
<dt><a href="#playerScoresData">`playerScoresData(scoreboard, name, id)`</a> ⇒ <code>string</code></dt>
<dd><p>Generates the player scores data for a specified scoreboard, player name, and ID.</p>
</dd>
<dt><a href="#processRKInput">`processRKInput(inputString)`</a> ⇒ <code>Array</code> | <code>null</code></dt>
<dd><p>Process the input string and return an array with the player name, score1, and score2.</p>
</dd>
<dt><a href="#readAndParseFile">`readAndParseFile(filePath)`</a> ⇒ <code>object</code> | <code>false</code></dt>
<dd><p>Read and parse a JSON file.</p>
</dd>
<dt><a href="#splitBySpaces">`splitBySpaces(str)`</a> ⇒ <code>Array</code></dt>
<dd></dd>
<dt><a href="#splitByDashes">`splitByDashes(str)`</a> ⇒ <code>Array</code></dt>
<dd></dd>
<dt><a href="#splitByCommas">`splitByCommas(str)`</a> ⇒ <code>Array</code></dt>
<dd></dd>
<dt><a href="#lowercaseString">`lowercaseString(str)`</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#parseNumber">`parseNumber(value)`</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#writeDateToFile">`writeDateToFile(path, inputDate)`</a> ⇒ <code>Object</code></dt>
<dd><p>Writes the date to a specified file.</p>
</dd>
<dt><a href="#validateDate">`validateDate(dateString)`</a> ⇒ <code>boolean</code></dt>
<dd><p>Validates a date string.</p>
</dd>
<dt><a href="#getDateFormat">`getDateFormat(dateString)`</a> ⇒ <code>string</code> | <code>null</code></dt>
<dd><p>Retrieves the standardized format of a date string.</p>
</dd>
<dt><a href="#validateAndFormatDate">`validateAndFormatDate(dateString)`</a> ⇒ <code>string</code> | <code>boolean</code></dt>
<dd><p>Validates and formats a date string.</p>
</dd>
<dt><a href="#detectDateFormat">`detectDateFormat(dateString)`</a> ⇒ <code>string</code> | <code>null</code></dt>
<dd><p>Detects the format of a date string.</p>
</dd>
<dt><a href="#isValidJson">`isValidJson(filePath)`</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a file is valid JSON.</p>
</dd>
<dt><a href="#writeToFile">`writeToFile(dataToWrite, filePath, [depth], [indent])`</a></dt>
<dd><p>Write formatted data to a file.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#EndOfPeriodArr">`EndOfPeriodArr`</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ErrorMessages">`ErrorMessages`</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="module_utils"></a>

## utils

Main module that exports various utility functions and constants.

- [utils](#module_utils)
  - [`.Date`](#module_utils.Date) : <code>Date</code>
  - [`.is`](#module_utils.is) : <code>Object</code>
  - [`.lb`](#module_utils.lb) : <code>Object</code>
  - [`.constants`](#module_utils.constants) : <code>Object</code>
  - [`.currentDateValues`](#module_utils.currentDateValues) : <code>Object</code>
  - [`.defaultPaths`](#module_utils.defaultPaths) : <code>Object</code>
  - [`.determineWinners`](#module_utils.determineWinners) : <code>Object</code>
  - [`.errorMessages`](#module_utils.errorMessages) : <code>Object</code>
  - [`.formatAndSortScores`](#module_utils.formatAndSortScores) : <code>Object</code>
  - [`.formatScoresInput`](#module_utils.formatScoresInput) : <code>Object</code>
  - [`.formattedLb`](#module_utils.formattedLb) : <code>Object</code>
  - [`.generatePlayerTable`](#module_utils.generatePlayerTable) : <code>Object</code>
  - [`.getPlayerScoresArray`](#module_utils.getPlayerScoresArray) : <code>Object</code>
  - [`.getScoresArray`](#module_utils.getScoresArray) : <code>Object</code>
  - [`.index2`](#module_utils.index2) : <code>Object</code>
  - [`.leaderboard`](#module_utils.leaderboard) : <code>Object</code>
  - [`.newDate`](#module_utils.newDate) : <code>Object</code>
  - [`.newPeriodCheck`](#module_utils.newPeriodCheck) : <code>Object</code>
  - [`.playerScoresTable`](#module_utils.playerScoresTable) : <code>Object</code>
  - [`.processInput`](#module_utils.processInput) : <code>Object</code>
  - [`.readAndParseJson`](#module_utils.readAndParseJson) : <code>Object</code>
  - [`.removePlayerScores`](#module_utils.removePlayerScores) : <code>Object</code>
  - [`.removeScores`](#module_utils.removeScores) : <code>Object</code>
  - [`.sanitizeInput`](#module_utils.sanitizeInput) : <code>Object</code>
  - [`.schema`](#module_utils.schema) : <code>Object</code>
  - [`.scoresIn`](#module_utils.scoresIn) : <code>Object</code>
  - [`.scoresOut`](#module_utils.scoresOut) : <code>Object</code>
  - [`.tableConfig`](#module_utils.tableConfig) : <code>Object</code>
  - [`.validateDate`](#module_utils.validateDate) : <code>Object</code>
  - [`.validateJson`](#module_utils.validateJson) : <code>Object</code>
  - [`.writeStructuredJson`](#module_utils.writeStructuredJson) : <code>Object</code>
  - [`.getPeriod()`](#module_utils.getPeriod) ⇒ <code>string</code>
  - [`.getStamp()`](#module_utils.getStamp) ⇒ <code>string</code>
  - [`.addPlayerScores(scoreboard, dateUnit, score1, score2, [player])`](#module_utils.addPlayerScores)
  - [`.addScores(scoreboard, period, dateUnit, player, score1, score2)`](#module_utils.addScores)
  - [`.argCount(fn)`](#module_utils.argCount) ⇒ <code>number</code>
  - [`.checkEndOfPeriod(period)`](#module_utils.checkEndOfPeriod) ⇒ <code>boolean</code>
  - [`.checkScoresInput(score1, score2)`](#module_utils.checkScoresInput) ⇒ <code>boolean</code>
  - [`.checkUserExists(user, userList)`](#module_utils.checkUserExists) ⇒ <code>boolean</code>

---

<a name="module_utils.Date"></a>

### `utils.Date` : <code>Date</code>

The Date class for custom date operations.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.is"></a>

### `utils.is` : <code>Object</code>

The utility functions for checking various conditions.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.lb"></a>

### `utils.lb` : <code>Object</code>

The utility functions for leaderboard operations.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.constants"></a>

### `utils.constants` : <code>Object</code>

Constants used throughout the application.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.currentDateValues"></a>

### `utils.currentDateValues` : <code>Object</code>

Utility functions for retrieving current date values.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.defaultPaths"></a>

### `utils.defaultPaths` : <code>Object</code>

Default file paths used in the application.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.determineWinners"></a>

### `utils.determineWinners` : <code>Object</code>

Utility functions for determining winners in the leaderboard.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.errorMessages"></a>

### `utils.errorMessages` : <code>Object</code>

Error messages used in the application.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.formatAndSortScores"></a>

### `utils.formatAndSortScores` : <code>Object</code>

Utility functions for formatting and sorting scores.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.formatScoresInput"></a>

### `utils.formatScoresInput` : <code>Object</code>

Utility functions for formatting scores input.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.formattedLb"></a>

### `utils.formattedLb` : <code>Object</code>

Utility functions for generating formatted leaderboards.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.generatePlayerTable"></a>

### `utils.generatePlayerTable` : <code>Object</code>

Utility functions for generating player tables.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.getPlayerScoresArray"></a>

### `utils.getPlayerScoresArray` : <code>Object</code>

Utility functions for retrieving player scores as an array.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.getScoresArray"></a>

### `utils.getScoresArray` : <code>Object</code>

Utility functions for retrieving scores as an array.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.index2"></a>

### `utils.index2` : <code>Object</code>

Utility functions for index 2 operations.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.leaderboard"></a>

### `utils.leaderboard` : <code>Object</code>

Utility functions for leaderboard operations.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.newDate"></a>

### `utils.newDate` : <code>Object</code>

Utility functions for creating new date objects.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.newPeriodCheck"></a>

### `utils.newPeriodCheck` : <code>Object</code>

Utility functions for checking date information for the period.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.playerScoresTable"></a>

### `utils.playerScoresTable` : <code>Object</code>

Utility functions for generating player scores tables.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.processInput"></a>

### `utils.processInput` : <code>Object</code>

Utility functions for processing input.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.readAndParseJson"></a>

### `utils.readAndParseJson` : <code>Object</code>

Utility functions for reading and parsing JSON files.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.removePlayerScores"></a>

### `utils.removePlayerScores` : <code>Object</code>

Utility functions for removing player scores.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.removeScores"></a>

### `utils.removeScores` : <code>Object</code>

Utility functions for removing scores.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.sanitizeInput"></a>

### `utils.sanitizeInput` : <code>Object</code>

Utility functions for sanitizing input.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.schema"></a>

### `utils.schema` : <code>Object</code>

The schema definition for data validation.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.scoresIn"></a>

### `utils.scoresIn` : <code>Object</code>

Utility functions for processing scores input.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.scoresOut"></a>

### `utils.scoresOut` : <code>Object</code>

Utility functions for processing scores output.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.tableConfig"></a>

### `utils.tableConfig` : <code>Object</code>

Configuration options for generating tables.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.validateDate"></a>

### `utils.validateDate` : <code>Object</code>

Utility functions for validating dates.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.validateJson"></a>

### `utils.validateJson` : <code>Object</code>

Utility functions for validating JSON data.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.writeStructuredJson"></a>

### `utils.writeStructuredJson` : <code>Object</code>

Utility functions for writing structured JSON data to a file.

**Kind**: static property of [<code>utils</code>](#module_utils)

---

<a name="module_utils.getPeriod"></a>

### `utils.getPeriod()` ⇒ <code>string</code>

Retrieves the period and title based on the current date.

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>string</code> - The period and title.

---

<a name="module_utils.getStamp"></a>

### `utils.getStamp()` ⇒ <code>string</code>

Retrieves the current date stamp.

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>string</code> - The current date stamp.

---

<a name="module_utils.addPlayerScores"></a>

### `utils.addPlayerScores(scoreboard, dateUnit, score1, score2, [player])`

Adds player scores to the specified scoreboard and date unit.

**Kind**: static method of [<code>utils</code>](#module_utils)

| Param      | Type                | Default                                     | Description          |
| ---------- | ------------------- | ------------------------------------------- | -------------------- |
| scoreboard | <code>string</code> |                                             | The scoreboard name. |
| dateUnit   | <code>string</code> |                                             | The date unit.       |
| score1     | <code>number</code> |                                             | The first score.     |
| score2     | <code>number</code> |                                             | The second score.    |
| [player]   | <code>string</code> | <code>&quot;\&quot;test\&quot;&quot;</code> | The player name.     |

---

<a name="module_utils.addScores"></a>

### `utils.addScores(scoreboard, period, dateUnit, player, score1, score2)`

Adds scores to the specified scoreboard, period, date unit, and player.

**Kind**: static method of [<code>utils</code>](#module_utils)

| Param      | Type                | Description          |
| ---------- | ------------------- | -------------------- |
| scoreboard | <code>string</code> | The scoreboard name. |
| period     | <code>string</code> | The period.          |
| dateUnit   | <code>string</code> | The date unit.       |
| player     | <code>string</code> | The player name.     |
| score1     | <code>number</code> | The first score.     |
| score2     | <code>number</code> | The second score.    |

---

<a name="module_utils.argCount"></a>

### `utils.argCount(fn)` ⇒ <code>number</code>

Retrieves the argument count of a function.

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>number</code> - The argument count.

| Param | Type                  | Description   |
| ----- | --------------------- | ------------- |
| fn    | <code>function</code> | The function. |

---

<a name="module_utils.checkEndOfPeriod"></a>

### `utils.checkEndOfPeriod(period)` ⇒ <code>boolean</code>

Checks if the current date is the end of the period.

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>boolean</code> - `true` if it's the end of the period, `false` otherwise.

| Param  | Type                | Description        |
| ------ | ------------------- | ------------------ |
| period | <code>Object</code> | The period object. |

---

<a name="module_utils.checkScoresInput"></a>

### `utils.checkScoresInput(score1, score2)` ⇒ <code>boolean</code>

Checks the validity of scores input.

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>boolean</code> - `true` if the scores are valid, `false` otherwise.

| Param  | Type                | Description       |
| ------ | ------------------- | ----------------- |
| score1 | <code>number</code> | The first score.  |
| score2 | <code>number</code> | The second score. |

---

<a name="module_utils.checkUserExists"></a>

### `utils.checkUserExists(user, userList)` ⇒ <code>boolean</code>

Checks if a user exists in the given user list.

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>boolean</code> - `true` if the user exists, `false` otherwise.

| Param    | Type                              | Description        |
| -------- | --------------------------------- | ------------------ |
| user     | <code>string</code>               | The user name.     |
| userList | <code>Array.&lt;string&gt;</code> | The list of users. |

---

<a name="errorMessages"></a>

## `errorMessages` : [<code>ErrorMessages</code>](#ErrorMessages)

Error messages for different error types.

**Kind**: global constant

---

<a name="addDay"></a>

## `addDay(dateString)` ⇒ <code>string</code>

Adds one day to a date string.

**Kind**: global function  
**Returns**: <code>string</code> - The modified date string in the format: dd / mm / yyyy.

| Param      | Type                | Description                                           |
| ---------- | ------------------- | ----------------------------------------------------- |
| dateString | <code>string</code> | The date string to modify. Must be parsable by luxon. |

---

<a name="subtractDay"></a>

## `subtractDay(dateString)` ⇒ <code>String</code>

**Kind**: global function  
**Returns**: <code>String</code> - The date string after subtraction of one day  
**Brief**: Subtracts one day from a date string. This is useful for subtracting a date from an already formatted date string e. g.

| Param      | Description                       |
| ---------- | --------------------------------- |
| dateString | The date string to be subtracted. |

---

<a name="addPlayerScores"></a>

## `addPlayerScores(scoreboard, dateUnit, score1, score2, [player])`

Adds scores to the specified scoreboard and date unit for a player.

**Kind**: global function

| Param      | Type                | Default                                     | Description                                                 |
| ---------- | ------------------- | ------------------------------------------- | ----------------------------------------------------------- |
| scoreboard | <code>string</code> |                                             | The scoreboard to add scores to (either "rk" or "kc").      |
| dateUnit   | <code>string</code> |                                             | The date unit of the scores (e.g., day stamp, week number). |
| score1     | <code>number</code> |                                             | The first score.                                            |
| score2     | <code>number</code> |                                             | The second score.                                           |
| [player]   | <code>string</code> | <code>&quot;\&quot;test\&quot;&quot;</code> | The player name. Default is "test".                         |

---

<a name="addPlayerScores..getScores"></a>

### `addPlayerScores~getScores()` ⇒ <code>Object</code>

Retrieves the scores object.

**Kind**: inner method of [<code>addPlayerScores</code>](#addPlayerScores)  
**Returns**: <code>Object</code> - - The scores object.

---

<a name="kc"></a>

## `kc(scores, dateUnit, score1, score2)`

Adds scores to the KC scoreboard and date unit for a player.

**Kind**: global function

| Param    | Type                | Description                                                 |
| -------- | ------------------- | ----------------------------------------------------------- |
| scores   | <code>Object</code> | The scores object.                                          |
| dateUnit | <code>string</code> | The date unit of the scores (e.g., day stamp, week number). |
| score1   | <code>number</code> | The first score.                                            |
| score2   | <code>number</code> | The second score.                                           |

---

<a name="rk"></a>

## `rk(scores, dateUnit, score1, score2)`

Adds scores to the RK scoreboard and date unit for a player.

**Kind**: global function

| Param    | Type                | Description                                                 |
| -------- | ------------------- | ----------------------------------------------------------- |
| scores   | <code>Object</code> | The scores object.                                          |
| dateUnit | <code>string</code> | The date unit of the scores (e.g., day stamp, week number). |
| score1   | <code>number</code> | The first score.                                            |
| score2   | <code>number</code> | The second score.                                           |

---

<a name="addScores"></a>

## `addScores(scoreboard, period, dateUnit, player, score1, score2)`

Adds scores to the specified scoreboard, period, and date unit.

**Kind**: global function

| Param      | Type                | Description                                                 |
| ---------- | ------------------- | ----------------------------------------------------------- |
| scoreboard | <code>string</code> | The scoreboard to add scores to (either "rk" or "kc").      |
| period     | <code>string</code> | The period of the scores ("day", "week", "month", "year").  |
| dateUnit   | <code>string</code> | The date unit of the scores (e.g., day stamp, week number). |
| player     | <code>string</code> | The player name.                                            |
| score1     | <code>number</code> | The first score.                                            |
| score2     | <code>number</code> | The second score.                                           |

---

<a name="getScores"></a>

## `getScores(scoreboard)` ⇒ <code>Object</code>

Retrieves the scores object for the specified scoreboard.

**Kind**: global function  
**Returns**: <code>Object</code> - - The scores object.

| Param      | Type                | Description                                                   |
| ---------- | ------------------- | ------------------------------------------------------------- |
| scoreboard | <code>string</code> | The scoreboard to retrieve scores from (either "rk" or "kc"). |

---

<a name="kc"></a>

## `kc(scores, period, dateUnit, player, score1, score2)`

Adds scores to the KC scoreboard, period, and date unit.

**Kind**: global function

| Param    | Type                | Description                                                 |
| -------- | ------------------- | ----------------------------------------------------------- |
| scores   | <code>Object</code> | The scores object.                                          |
| period   | <code>string</code> | The period of the scores ("day", "week", "month", "year").  |
| dateUnit | <code>string</code> | The date unit of the scores (e.g., day stamp, week number). |
| player   | <code>string</code> | The player name.                                            |
| score1   | <code>number</code> | The first score.                                            |
| score2   | <code>number</code> | The second score.                                           |

---

<a name="rk"></a>

## `rk(scores, period, dateUnit, player, score1, score2)`

Adds scores to the RK scoreboard, period, and date unit.

**Kind**: global function

| Param    | Type                | Description                                                 |
| -------- | ------------------- | ----------------------------------------------------------- |
| scores   | <code>Object</code> | The scores object.                                          |
| period   | <code>string</code> | The period of the scores ("day", "week", "month", "year").  |
| dateUnit | <code>string</code> | The date unit of the scores (e.g., day stamp, week number). |
| player   | <code>string</code> | The player name.                                            |
| score1   | <code>number</code> | The first score.                                            |
| score2   | <code>number</code> | The second score.                                           |

---

<a name="exact"></a>

## `exact(numExpected, args)` ⇒ <code>string</code> \| <code>null</code>

Checks if the number of arguments matches the expected count.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - An error message if the count doesn't match, or null if it matches.

| Param       | Type                | Description                       |
| ----------- | ------------------- | --------------------------------- |
| numExpected | <code>number</code> | The expected number of arguments. |
| args        | <code>string</code> | The arguments to check.           |

---

<a name="atLeast"></a>

## `atLeast(expected, args)` ⇒ <code>string</code> \| <code>null</code>

Checks if the number of arguments is at least the expected count.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - An error message if the count is less than expected, or null if it meets the requirement.

| Param    | Type                | Description                               |
| -------- | ------------------- | ----------------------------------------- |
| expected | <code>number</code> | The minimum expected number of arguments. |
| args     | <code>string</code> | The arguments to check.                   |

---

<a name="getEndOfPeriodArr"></a>

## `getEndOfPeriodArr()` ⇒ [<code>EndOfPeriodArr</code>](#EndOfPeriodArr)

Retrieves an array containing the end of the period information.

**Kind**: global function  
**Returns**: [<code>EndOfPeriodArr</code>](#EndOfPeriodArr) - - An object containing the end of the period information.

---

<a name="processInput"></a>

## `processInput(scoreboard, inputString)` ⇒ <code>string</code> \| <code>Array</code>

Processes the input based on the scoreboard type.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>Array</code> - - The processed input or an error message.

| Param       | Type                | Description                       |
| ----------- | ------------------- | --------------------------------- |
| scoreboard  | <code>string</code> | The type of scoreboard.           |
| inputString | <code>string</code> | The input string to be processed. |

---

<a name="processRKInput"></a>

## `processRKInput(inputString)` ⇒ <code>string</code> \| <code>Array</code>

Processes the input for the "rk" scoreboard type.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>Array</code> - - The processed input or an error message.

| Param       | Type                | Description                       |
| ----------- | ------------------- | --------------------------------- |
| inputString | <code>string</code> | The input string to be processed. |

---

<a name="processKCInput"></a>

## `processKCInput(inputString)` ⇒ <code>string</code> \| <code>Array</code>

Processes the input for the "kc" scoreboard type.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>Array</code> - - The processed input or an error message.

| Param       | Type                | Description                       |
| ----------- | ------------------- | --------------------------------- |
| inputString | <code>string</code> | The input string to be processed. |

---

<a name="isValidName"></a>

## `isValidName(name)` ⇒ <code>boolean</code>

Checks if a name is valid (contains only lowercase letters).

**Kind**: global function  
**Returns**: <code>boolean</code> - - Indicates whether the name is valid or not.

| Param | Type                | Description               |
| ----- | ------------------- | ------------------------- |
| name  | <code>string</code> | The name to be validated. |

---

<a name="getErrorMessage"></a>

## `getErrorMessage(category, code)` ⇒ <code>string</code>

Retrieves the error message based on the category and code.

**Kind**: global function  
**Returns**: <code>string</code> - - The error message.

| Param    | Type                | Description                        |
| -------- | ------------------- | ---------------------------------- |
| category | <code>string</code> | The category of the error message. |
| code     | <code>string</code> | The code of the error message.     |

---

<a name="ListNames"></a>

## `ListNames(path)` ⇒ <code>Array.&lt;string&gt;</code>

Retrieves the list of names from the specified file.

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - An array of names.

| Param | Type                | Description           |
| ----- | ------------------- | --------------------- |
| path  | <code>string</code> | The path to the file. |

---

<a name="NameExists"></a>

## `NameExists(path, name)` ⇒ <code>boolean</code>

Checks if a name exists in the list of names from the specified file.

**Kind**: global function  
**Returns**: <code>boolean</code> - Returns true if the name exists, false otherwise.

| Param | Type                | Description           |
| ----- | ------------------- | --------------------- |
| path  | <code>string</code> | The path to the file. |
| name  | <code>string</code> | The name to check.    |

---

<a name="getDateValues"></a>

## `getDateValues(path)` ⇒ <code>Object</code>

**Kind**: global function  
**Returns**: <code>Object</code> - The date object that was read and parsed from the file at the given path. The keys of the object are the same as the keys of the counters file  
**Brief**: Reads and parses the counters file at the given path and returns an object with dayStamp doy dow week month year dateString and date.

| Param | Description                                         |
| ----- | --------------------------------------------------- |
| path  | The path to the file to read. Must be a valid date. |

---

<a name="defaultPath"></a>

## `defaultPath(keyword)` ⇒ <code>string</code>

Returns the default path based on the provided keyword.

**Kind**: global function  
**Returns**: <code>string</code> - - The default path for the given keyword.

| Param   | Type                | Description                                |
| ------- | ------------------- | ------------------------------------------ |
| keyword | <code>string</code> | The keyword to determine the default path. |

---

<a name="determineWinners"></a>

## `determineWinners(scoreboard)` ⇒ <code>Object</code>

Determines the winners for each period based on the scoreboard type.

**Kind**: global function  
**Returns**: <code>Object</code> - - An object containing the winners for each period.

| Param      | Type                | Description                            |
| ---------- | ------------------- | -------------------------------------- |
| scoreboard | <code>string</code> | The type of scoreboard ("rk" or "kc"). |

- [`determineWinners(scoreboard)`](#determineWinners) ⇒ <code>Object</code>
  - [`~options`](#determineWinners..options) : <code>Array.&lt;boolean&gt;</code>
  - [`~dayScores`](#determineWinners..dayScores) : <code>Object.&lt;string, number&gt;</code>
  - [`~weekScores`](#determineWinners..weekScores) : <code>Object.&lt;string, number&gt;</code>
  - [`~monthScores`](#determineWinners..monthScores) : <code>Object.&lt;string, number&gt;</code>
  - [`~yearScores`](#determineWinners..yearScores) : <code>Object.&lt;string, number&gt;</code>

---

<a name="determineWinners..options"></a>

### `determineWinners~options` : <code>Array.&lt;boolean&gt;</code>

**Kind**: inner constant of [<code>determineWinners</code>](#determineWinners)

---

<a name="determineWinners..dayScores"></a>

### `determineWinners~dayScores` : <code>Object.&lt;string, number&gt;</code>

**Kind**: inner constant of [<code>determineWinners</code>](#determineWinners)

---

<a name="determineWinners..weekScores"></a>

### `determineWinners~weekScores` : <code>Object.&lt;string, number&gt;</code>

**Kind**: inner constant of [<code>determineWinners</code>](#determineWinners)

---

<a name="determineWinners..monthScores"></a>

### `determineWinners~monthScores` : <code>Object.&lt;string, number&gt;</code>

**Kind**: inner constant of [<code>determineWinners</code>](#determineWinners)

---

<a name="determineWinners..yearScores"></a>

### `determineWinners~yearScores` : <code>Object.&lt;string, number&gt;</code>

**Kind**: inner constant of [<code>determineWinners</code>](#determineWinners)

---

<a name="getWinners"></a>

## `getWinners(scores)` ⇒ <code>Array.&lt;Object&gt;</code>

Determines the winners based on the scores.

**Kind**: global function  
**Returns**: <code>Array.&lt;Object&gt;</code> - - An array of winners (players with the highest scores).

| Param  | Type                                       | Description                         |
| ------ | ------------------------------------------ | ----------------------------------- |
| scores | <code>Object.&lt;string, number&gt;</code> | An object containing player scores. |

---

<a name="errMsg"></a>

## `errMsg(msg, ind, [arg])` ⇒ <code>string</code>

Generates an error message.

**Kind**: global function  
**Returns**: <code>string</code> - - The formatted error message.

| Param | Type                | Default                                           | Description                     |
| ----- | ------------------- | ------------------------------------------------- | ------------------------------- |
| msg   | <code>string</code> |                                                   | The type of error message.      |
| ind   | <code>string</code> |                                                   | The index of the error message. |
| [arg] | <code>string</code> | <code>&quot;\&quot;**Error:**\&quot;&quot;</code> | The error argument.             |

---

<a name="errHelp"></a>

## `errHelp()` ⇒ <code>string</code>

Generates a help string with all error messages.

**Kind**: global function  
**Returns**: <code>string</code> - - The error help string.

---

<a name="transformScores"></a>

## `transformScores(scoreboard, input)` ⇒ <code>Object</code>

Transforms the scores array into an object with player scores grouped by categories.

**Kind**: global function  
**Returns**: <code>Object</code> - The transformed scores object.

| Param      | Type                | Description                                       |
| ---------- | ------------------- | ------------------------------------------------- |
| scoreboard | <code>string</code> | The type of scoreboard ("rk" or "kc").            |
| input      | <code>string</code> | The input period ("day", "week", "month", "all"). |

---

<a name="sortScores"></a>

## `sortScores(scoresArray)` ⇒ <code>Array</code>

Sorts the scores array in descending order based on the total score.

**Kind**: global function  
**Returns**: <code>Array</code> - The sorted scores array.

| Param       | Type                | Description                     |
| ----------- | ------------------- | ------------------------------- |
| scoresArray | <code>Object</code> | The scores object to be sorted. |

---

<a name="validateInput"></a>

## `validateInput(scoreboard, inputString)` ⇒ <code>boolean</code>

Validates the input for a given scoreboard.

**Kind**: global function  
**Returns**: <code>boolean</code> - - True if the input is valid, false otherwise.

| Param       | Type                | Description                   |
| ----------- | ------------------- | ----------------------------- |
| scoreboard  | <code>string</code> | The scoreboard to validate.   |
| inputString | <code>string</code> | The input string to validate. |

---

<a name="validateRKInput"></a>

## `validateRKInput(inputString)` ⇒ <code>boolean</code>

Validates the input for the RK scoreboard.

**Kind**: global function  
**Returns**: <code>boolean</code> - - True if the input is valid, false otherwise.

| Param       | Type                | Description                   |
| ----------- | ------------------- | ----------------------------- |
| inputString | <code>string</code> | The input string to validate. |

---

<a name="validateKCInput"></a>

## `validateKCInput(inputString)` ⇒ <code>boolean</code>

Validates the input for the KC scoreboard.

**Kind**: global function  
**Returns**: <code>boolean</code> - - True if the input is valid, false otherwise.

| Param       | Type                | Description                   |
| ----------- | ------------------- | ----------------------------- |
| inputString | <code>string</code> | The input string to validate. |

---

<a name="isValidName"></a>

## `isValidName(name)` ⇒ <code>boolean</code>

Checks if the given name is valid.

**Kind**: global function  
**Returns**: <code>boolean</code> - - True if the name is valid, false otherwise.

| Param | Type                | Description        |
| ----- | ------------------- | ------------------ |
| name  | <code>string</code> | The name to check. |

---

<a name="formatLeaderboard"></a>

## `formatLeaderboard(scoresArray)` ⇒ <code>string</code>

Formats the scores array into a leaderboard string.

**Kind**: global function  
**Returns**: <code>string</code> - The formatted leaderboard.

| Param       | Type               | Description                       |
| ----------- | ------------------ | --------------------------------- |
| scoresArray | <code>Array</code> | The scores array to be formatted. |

---

<a name="getPeriod"></a>

## `getPeriod(inputPeriod)` ⇒ <code>Object</code>

Returns the period and title based on the input period

**Kind**: global function  
**Returns**: <code>Object</code> - - The period and title object

| Param       | Type                | Default                      | Description                       |
| ----------- | ------------------- | ---------------------------- | --------------------------------- |
| inputPeriod | <code>string</code> | <code>&quot;all&quot;</code> | The input period (default: "all") |

---

<a name="getJsonData"></a>

## `getJsonData(scoreboard, input, scoresDataPath)` ⇒ <code>object</code>

Retrieves JSON data from a file path based on the scoreboard type and input parameters.
If scoresDataPath is provided, then that path is used. Otherwise, the default path is used.

**Kind**: global function  
**Returns**: <code>object</code> - - The JSON data retrieved from the file path.

| Param          | Type                | Default           | Description                                |
| -------------- | ------------------- | ----------------- | ------------------------------------------ |
| scoreboard     | <code>string</code> |                   | The type of scoreboard.                    |
| input          | <code>string</code> |                   | The input parameters.                      |
| scoresDataPath | <code>string</code> | <code>null</code> | The optional file path to the scores data. |

---

<a name="getStamp"></a>

## `getStamp(path, inputPeriod)` ⇒ <code>string</code>

Returns a stamp based on the given path and input period.

**Kind**: global function  
**Returns**: <code>string</code> - - The stamp for the given input period.

| Param       | Type                | Description                                        |
| ----------- | ------------------- | -------------------------------------------------- |
| path        | <code>string</code> | The path to get date values from.                  |
| inputPeriod | <code>string</code> | The period to get the stamp for. Default is "all". |

---

<a name="leaderboard"></a>

## `leaderboard(option, period)` ⇒ <code>string</code>

Generates a leaderboard based on the specified options.

**Kind**: global function  
**Returns**: <code>string</code> - The generated leaderboard.

| Param  | Type                | Description                                        |
| ------ | ------------------- | -------------------------------------------------- |
| option | <code>string</code> | The leaderboard option ("rk" or "kc").             |
| period | <code>string</code> | The period option ("day", "week", "month", "all"). |

---

<a name="newDate"></a>

## `newDate(dateValue)` ⇒ <code>Object</code>

**Kind**: global function  
**Returns**: <code>Object</code> - The date object or false if invalid or not able to be converted to a date ( in the case of invalid input  
**Brief**: Creates a new date object based on the date input. It returns false if the input is invalid or not able to be converted to a date

| Param     | Description              |
| --------- | ------------------------ |
| dateValue | The date to be converted |

---

<a name="newDate..dateFormatting"></a>

### `newDate~dateFormatting(dateInput, detectedFormat)` ⇒ <code>Object</code>

**Kind**: inner method of [<code>newDate</code>](#newDate)  
**Returns**: <code>Object</code> - The formatted date object that is passed to the calendar and can be used to create dates  
**Brief**: Takes a date and formats it according to the format set in the config. This is used to create date objects that are passed to the calendar.

| Param          | Description                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| dateInput      | The date to be formatted. It should be in the format defined in the config. |
| detectedFormat | The date format detected from the dateInput.                                |

---

<a name="parseDate"></a>

## `parseDate(dateStamp)` ⇒ <code>DateTime</code>

Helper function to parse date string into a Luxon DateTime object.

**Kind**: global function  
**Returns**: <code>DateTime</code> - - A Luxon DateTime object representing the parsed date.

| Param     | Type                | Description                               |
| --------- | ------------------- | ----------------------------------------- |
| dateStamp | <code>string</code> | The date string in the format 'MMddyyyy'. |

---

<a name="calculateTomorrow"></a>

## `calculateTomorrow(date)` ⇒ <code>DateTime</code>

Helper function to calculate tomorrow's date given a DateTime object representing a date.

**Kind**: global function  
**Returns**: <code>DateTime</code> - - A Luxon DateTime object representing tomorrow's date.

| Param | Type                  | Description                                            |
| ----- | --------------------- | ------------------------------------------------------ |
| date  | <code>DateTime</code> | A Luxon DateTime object representing the current date. |

---

<a name="calculateFirstOfMonth"></a>

## `calculateFirstOfMonth(year, month)` ⇒ <code>DateTime</code>

Helper function to calculate the first day of a month given a year and month number.

**Kind**: global function  
**Returns**: <code>DateTime</code> - - A Luxon DateTime object representing the first day of the specified month and year.

| Param | Type                | Description                                                                 |
| ----- | ------------------- | --------------------------------------------------------------------------- |
| year  | <code>number</code> | The year for which the first day of the month should be calculated.         |
| month | <code>number</code> | The month for which the first day of the month should be calculated (1-12). |

---

<a name="calculateFirstOfYear"></a>

## `calculateFirstOfYear(year)` ⇒ <code>DateTime</code>

Helper function to calculate the first day of a year given a year number.

**Kind**: global function  
**Returns**: <code>DateTime</code> - - A Luxon DateTime object representing the first day of the specified year.

| Param | Type                | Description                                                        |
| ----- | ------------------- | ------------------------------------------------------------------ |
| year  | <code>number</code> | The year for which the first day of the year should be calculated. |

---

<a name="checkDateInfo"></a>

## `checkDateInfo(dateInfo)` ⇒ <code>Array.&lt;boolean&gt;</code>

Main function to check date information and determine options.

**Kind**: global function  
**Returns**: <code>Array.&lt;boolean&gt;</code> - - An array of boolean values representing the options for the given date:

- isTomorrowMonday: whether tomorrow is a Monday.
- isTomorrowFirstOfMonth: whether tomorrow is the first day of the current month.
- isTomorrowFirstOfYear: whether tomorrow is the first day of the current year.

| Param                   | Type                | Description                                              |
| ----------------------- | ------------------- | -------------------------------------------------------- |
| dateInfo                | <code>object</code> | An object containing the date information to be checked. |
| dateInfo.dayStamp       | <code>string</code> | The date string in the format 'MMddyyyy'.                |
| dateInfo.monthOfTheYear | <code>string</code> | The month number as a string ('1'-'12').                 |
| dateInfo.year           | <code>string</code> | The year number as a string.                             |

---

<a name="playerScoresData"></a>

## `playerScoresData(scoreboard, name, id)` ⇒ <code>string</code>

Generates the player scores data for a specified scoreboard, player name, and ID.

**Kind**: global function  
**Returns**: <code>string</code> - The formatted table of player scores.

| Param      | Type                | Description                            |
| ---------- | ------------------- | -------------------------------------- |
| scoreboard | <code>string</code> | The type of scoreboard ("rk" or "kc"). |
| name       | <code>string</code> | The name of the player.                |
| id         | <code>string</code> | The ID of the scoreboard.              |

---

<a name="processRKInput"></a>

## `processRKInput(inputString)` ⇒ <code>Array</code> \| <code>null</code>

Process the input string and return an array with the player name, score1, and score2.

**Kind**: global function  
**Returns**: <code>Array</code> \| <code>null</code> - - An array containing the player name, score1, and score2, or null if the input is invalid.

| Param       | Type                | Description                       |
| ----------- | ------------------- | --------------------------------- |
| inputString | <code>string</code> | The input string to be processed. |

---

<a name="readAndParseFile"></a>

## `readAndParseFile(filePath)` ⇒ <code>object</code> \| <code>false</code>

Read and parse a JSON file.

**Kind**: global function  
**Returns**: <code>object</code> \| <code>false</code> - - The parsed data as an object if successful, or false if not valid JSON.

| Param    | Type                | Description                |
| -------- | ------------------- | -------------------------- |
| filePath | <code>string</code> | The path to the JSON file. |

---

<a name="splitBySpaces"></a>

## `splitBySpaces(str)` ⇒ <code>Array</code>

**Kind**: global function  
**Returns**: <code>Array</code> - The array of strings split by spaces in the order they appear in the string. Note that the array may be empty  
**Brief**: Splits a string by spaces. This is useful for splitting text that is in a form like " Hello World " into an array of " Hello World "

| Param | Description          |
| ----- | -------------------- |
| str   | The string to split. |

---

<a name="splitByDashes"></a>

## `splitByDashes(str)` ⇒ <code>Array</code>

**Kind**: global function  
**Returns**: <code>Array</code> - The array of  
**Brief**: Splits a string by dashes. This is used to split an address by a number of dashes e. g.

| Param | Description                                                     |
| ----- | --------------------------------------------------------------- |
| str   | The string to split. Must be in the format " address - number " |

---

<a name="splitByCommas"></a>

## `splitByCommas(str)` ⇒ <code>Array</code>

**Kind**: global function  
**Returns**: <code>Array</code> - The split string as an array of strings. Note that the array is in the same order as the input  
**Brief**: Splits a string by commas. This is useful for dealing with comma seperated strings. The string to split.

| Param | Description                                            |
| ----- | ------------------------------------------------------ |
| str   | The string to split. Must be a comma separated string. |

---

<a name="lowercaseString"></a>

## `lowercaseString(str)` ⇒ <code>string</code>

**Kind**: global function  
**Returns**: <code>string</code> - The lowercase version of the string or undefined if the string is not a string or undefined  
**Brief**: Converts a string to lowercase. This is useful for converting strings to numbers and vice versa. If you want to convert numbers to lower case use lowercase ()

| Param | Description            |
| ----- | ---------------------- |
| str   | The string to convert. |

---

<a name="parseNumber"></a>

## `parseNumber(value)` ⇒ <code>number</code>

**Kind**: global function  
**Returns**: <code>number</code> - The parsed number or null if the string cannot be parsed as a number. Note that the return value may be null  
**Brief**: Parses a string into a number. If the string cannot be parsed it returns null. This is a convenience function for parsing numbers that are inherently invalid ( as opposed to NaN ).

| Param | Description                                        |
| ----- | -------------------------------------------------- |
| value | The string to parse. Must be parsable as a number. |

---

<a name="writeDateToFile"></a>

## `writeDateToFile(path, inputDate)` ⇒ <code>Object</code>

Writes the date to a specified file.

**Kind**: global function  
**Returns**: <code>Object</code> - The updated data object with the new date.

| Param     | Type                | Description     |
| --------- | ------------------- | --------------- |
| path      | <code>string</code> | The file path.  |
| inputDate | <code>string</code> | The input date. |

---

<a name="validateDate"></a>

## `validateDate(dateString)` ⇒ <code>boolean</code>

Validates a date string.

**Kind**: global function  
**Returns**: <code>boolean</code> - A boolean indicating whether the date is valid.

| Param      | Type                | Description                  |
| ---------- | ------------------- | ---------------------------- |
| dateString | <code>string</code> | The date string to validate. |

---

<a name="getDateFormat"></a>

## `getDateFormat(dateString)` ⇒ <code>string</code> \| <code>null</code>

Retrieves the standardized format of a date string.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - The standardized format of the date string, or null if the date is invalid.

| Param      | Type                | Description      |
| ---------- | ------------------- | ---------------- |
| dateString | <code>string</code> | The date string. |

---

<a name="validateAndFormatDate"></a>

## `validateAndFormatDate(dateString)` ⇒ <code>string</code> \| <code>boolean</code>

Validates and formats a date string.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>boolean</code> - The formatted date string if it is valid, or false if the date is invalid.

| Param      | Type                | Description                             |
| ---------- | ------------------- | --------------------------------------- |
| dateString | <code>string</code> | The date string to validate and format. |

---

<a name="detectDateFormat"></a>

## `detectDateFormat(dateString)` ⇒ <code>string</code> \| <code>null</code>

Detects the format of a date string.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - The detected format of the date string, or null if the format cannot be detected.

| Param      | Type                | Description                              |
| ---------- | ------------------- | ---------------------------------------- |
| dateString | <code>string</code> | The date string to detect the format of. |

---

<a name="isValidJson"></a>

## `isValidJson(filePath)` ⇒ <code>boolean</code>

Check if a file is valid JSON.

**Kind**: global function  
**Returns**: <code>boolean</code> - - true if the file contains valid JSON, false otherwise.

| Param    | Type                | Description                    |
| -------- | ------------------- | ------------------------------ |
| filePath | <code>string</code> | The path to the file to check. |

---

<a name="writeToFile"></a>

## `writeToFile(dataToWrite, filePath, [depth], [indent])`

Write formatted data to a file.

**Kind**: global function  
**Throws**:

- <code>Error</code> - If there is an error writing the file, throws with an error message containing the original error.

| Param       | Type                | Default        | Description                                                 |
| ----------- | ------------------- | -------------- | ----------------------------------------------------------- |
| dataToWrite | <code>object</code> |                | The data to write to the file, as an object.                |
| filePath    | <code>string</code> |                | The path to the file to write to.                           |
| [depth]     | <code>number</code> | <code>3</code> | The maximum depth for nested objects/arrays. Defaults to 3. |
| [indent]    | <code>number</code> | <code>2</code> | The number of spaces to use for indentation. Defaults to 2. |

---

<a name="EndOfPeriodArr"></a>

## `EndOfPeriodArr` : <code>Object</code>

**Kind**: global typedef  
**Properties**

| Name           | Type                | Description            |
| -------------- | ------------------- | ---------------------- |
| dayStamp       | <code>string</code> | The day stamp.         |
| dayOfTheMonth  | <code>number</code> | The day of the month.  |
| weekOfTheYear  | <code>number</code> | The week of the year.  |
| monthOfTheYear | <code>number</code> | The month of the year. |
| year           | <code>number</code> | The year.              |

---

<a name="ErrorMessages"></a>

## `ErrorMessages` : <code>Object</code>

**Kind**: global typedef  
**Properties**

| Name          | Type                | Description                                |
| ------------- | ------------------- | ------------------------------------------ |
| typeChecks    | <code>Object</code> | Error messages related to type checks.     |
| argCount      | <code>Object</code> | Error messages related to argument counts. |
| info          | <code>Object</code> | Informational error messages.              |
| invalidInput  | <code>Object</code> | Error messages for invalid inputs.         |
| discordChecks | <code>Object</code> | Error messages related to Discord checks.  |

---

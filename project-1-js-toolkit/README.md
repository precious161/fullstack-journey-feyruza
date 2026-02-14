JS Utility Toolkit

Project 1 - Baseline JS Fluency

1. Overview
   This is a lightweight JavaScript library providing 13 reusable utility functions for string manipulation, array transformation, and numeric operations. Built with a focus on defensive programming, every function includes input validation and error handling.

2. Features

2.1 String Utilities

- Normalize Whitespace: Removes leading/trailing and internal extra spaces.

- Capitalization: Formats strings to Title Case.

- Casing: Converts strings to camelCase or snake_case.

- Email Validation: Basic heuristic check for valid email formats.

  2.2 Array Utilities

- Data Cleaning: Removes duplicates and flattens nested arrays.

- Math Operations: Computes max and average for numeric lists.

- Business Logic: Includes a getDiscount function for bulk price processing.

  2.3 Numeric Utilities

- Clamping: Constrains a number within a [min, max] range.

- Range Generation: Creates custom numeric ranges with specific steps.

3. Installation & Usage
   To use this toolkit, clone the repository and install dependencies:

`npm install`

To see a live demonstration of all functions, run the runner script:

`node index.js`

Example Call:

const utils = require('./src/utils');
console.log(utils.capitalize("hello world")); // "Hello World"

4. Testing
   This project uses Jest for automated unit testing to ensure reliability and handle edge cases.

Total Test Cases: 10

Run Tests:

`npm test`

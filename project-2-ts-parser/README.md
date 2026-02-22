**Project 2: Type-Safe Data Parser**

A TypeScript-based utility to validate and analyze JSON datasets containing user and order records.

**Setup**

Install dependencies:

`npm install`

Compile the project:

`npm run build`

**Usage**

Run the program by passing the path to a JSON file:

`node dist/main.js data/data-valid.json`
or
`node dist/main.js data/data-invalid.json`

- If the data is valid, the program prints summary metrics and exits with code 0.
- If the data is invalid, the program prints an error report and exits with code 1.

**Requirements Covered**

Validation: Checks for email format, specific order statuses (Pending, Paid, Cancelled), and correct data types.

Referential Integrity: Verifies that every order belongs to an existing user.

Metrics: Calculates total users, total orders, average order value, and status distribution.

Testing: Includes 5 automated tests covering valid and invalid scenarios.

**Testing**

To run the automated test suite:

`npm test`

The suite covers:

- Valid file processing

- Invalid email formats

- Unauthorized order statuses

- Missing user references (referential integrity)

- Mixed valid and invalid records

**Data Schema**

The input JSON must follow this structure:

`User Object`
`id (number)`
`name (string)`
`email (string)`
`role (string)`
`createdAt (string)`

`Order Object`
`id (number)`
`userId (number)`
`amount (number)`
`status (Pending | Paid | Cancelled)`
`createdAt (string)`

**Example Output**

Valid Input

`Metrics Summary:`
`Total Users: 2`
`Total Orders: 3`
`Total Amount: 150`
`Average Amount: 50`

Invalid Input

Validation Errors:

- User with id of 2 has invalid email!
- Order with user id of 999 doesn't exist!
- Order with id of 101 has invalid status!

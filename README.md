# L33tCode

A practice repository for solving LeetCode-style algorithm problems with comprehensive test cases.

## Description

This project contains implementations of various data structures and algorithms with comprehensive test cases. Each topic includes implementations and full test suites to verify correctness.

## Project Structure

```bash
.
├── src/
│   ├── arrays/
│   │   ├── index.js      # Array utility functions and solutions
│   │   └── index.test.js # Test cases for array operations
│   └── linked-lists/
│       ├── index.js      # Node class implementations
│       └── index.test.js # Test cases for linked list operations
├── package.json          # Project dependencies and scripts
└── README.md            # This file
```

## Installation

Install the required dependencies:

```bash
npm install
```

This will install [Vitest](https://vitest.dev/), a modern testing framework for JavaScript.

## Running Tests

Run all tests with:

```bash
npm test
```

To watch for changes and re-run tests automatically:

```bash
npm test -- --watch
```

## Current Features

### Linked Lists

- `Node` class - Basic node structure with `value` and `next` properties
- `reverseLinkedList(list)` - Reverse a linked list

### Arrays

- Various array utilities and algorithm solutions

## Technologies

- **Runtime**: Node.js
- **Testing**: Vitest
- **Language**: JavaScript (ES Modules)

## License

ISC

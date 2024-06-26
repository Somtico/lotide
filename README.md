# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @somtico/lotide`

**Require it:**

`const _ = require('@somtico/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(array)`: A function that returns the first element of an array
- `tail(array)`: A function that returns the tail of an array
- `middle(array)`: A function that returns the middle-most element(s) of the given array
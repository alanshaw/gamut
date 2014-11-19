# gamut [![Build Status](https://img.shields.io/travis/alanshaw/gamut.svg?style=flat)](https://travis-ci.org/alanshaw/gamut) [![Dependency Status](https://david-dm.org/alanshaw/gamut.svg?style=flat)](https://david-dm.org/alanshaw/gamut) [![Coverage Status](https://img.shields.io/coveralls/alanshaw/gamut.svg?style=flat)](https://coveralls.io/r/alanshaw/gamut)
Create a new array of values in a range.

## Usage

```js
var gamut = require('gamut')

gamut(5) // [0, 1, 2, 3, 4]

gamut(1, 10) // [1, 2, 3, 4, 5, 6, 7, 8, 9]

gamut(0, 10, 2) // [0, 2, 4, 6, 8]

gamut('0..5') // [0, 1, 2, 3, 4]

gamut(5, function (i) {
  return i
}) // [0, 1, 2, 3, 4]

gamut(1, 5, function (i) {
  return {n: i}
}) // [{n: 1}, {n: 2}, {n: 3}, {n: 4}]

gamut('0..5', function (i) {
    return 1
}) // [1, 1, 1, 1, 1]

// With step 2
gamut(1, 5, 2, function (i) {
  return {n: i}
}) // [{n: 1}, {n: 3}]

gamut('0..5', 2, function (i) {
    return 1
}) // [1, 1, 1]
```
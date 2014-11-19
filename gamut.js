var polymorf = require('polymorf')

function createRange (start, end, step, callback) {
  var arr = []

  if (start < end) {
    for (var i = start; i < end; i += step) {
      arr.push(callback(i))
    }
  } else {
    for (var i = start; i > end; i -= step) {
      arr.push(callback(i))
    }
  }

  return arr
}

var rangeRegex = /^([0-9]+)\.\.([0-9]+)$/

function parseRangeString (str) {
  var matches = rangeRegex.exec(str)
  if (!matches) throw new Error('Invalid range string')
  return [parseInt(matches[1]), parseInt(matches[2])]
}

function passThru (i) {
  return i
}

module.exports = polymorf(
  [Number],
  function (end) {
    return createRange(0, end, 1, passThru)
  },
  [String],
  function (range) {
    var rangeArr = parseRangeString(range)
    return createRange(rangeArr[0], rangeArr[1], 1, passThru)
  },
  [Number, Number],
  function (start, end) {
    return createRange(start, end, 1, passThru)
  },
  [Number, Function],
  function (end, callback) {
    return createRange(0, end, 1, callback)
  },
  [String, Function],
  function (range, callback) {
    var rangeArr = parseRangeString(range)
    return createRange(rangeArr[0], rangeArr[1], 1, callback)
  },
  [Number, Number, Number],
  function (start, end, step) {
    return createRange(start, end, step, passThru)
  },
  [String, Number, Function],
  function (range, step, callback) {
    var rangeArr = parseRangeString(range)
    return createRange(rangeArr[0], rangeArr[1], step, callback)
  },
  [Number, Number, Number, Function],
  function (start, end, step, callback) {
    return createRange(start, end, step, callback)
  }
)
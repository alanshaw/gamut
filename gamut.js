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

function isNumber (val) {
  return Object.prototype.toString.call(val) == '[object Number]' && !isNaN(val)
}

function isString (str) {
  return Object.prototype.toString.call(str) == '[object String]'
}

function isFunction (fn) {
  return typeof fn == 'function'
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

module.exports = function gamut () {
  var args = arguments

  if (args.length == 1) {

    if (isNumber(args[0])) {
      return createRange(0, args[0], 1, passThru)
    }

    if (isString(args[0])) {
      var rangeArr = parseRangeString(args[0])
      return createRange(rangeArr[0], rangeArr[1], 1, passThru)
    }

  } else if (args.length == 2) {

    if (isNumber(args[0]) && isNumber(args[1])) {
      return createRange(args[0], args[1], 1, passThru)
    }

    if (isNumber(args[0]) && isFunction(args[1])) {
      return createRange(0, args[0], 1, args[1])
    }

    if (isString(args[0]) && isFunction(args[1])) {
      var rangeArr = parseRangeString(args[0])
      return createRange(rangeArr[0], rangeArr[1], 1, args[1])
    }

  } else if (args.length == 3) {

    if (isNumber(args[0]) && isNumber(args[1]) && isNumber(args[2])) {
      return createRange(args[0], args[1], args[2], passThru)
    }
  }

  throw new Error('Invalid arguments')
}
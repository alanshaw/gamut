var test = require('tape')
var gamut = require('./')

// 1 arg

test('create a range from single int', function (t) {
  t.plan(5)
  gamut(5).forEach(function (item, i) {
    t.equal(item, i, 'item ' + i + ' should equal ' + i)
  })
  t.end()
})

test('create a range from range string', function (t) {
  t.plan(4)
  gamut('1..5').forEach(function (item, i) {
    t.equal(item, i + 1, 'item ' + i + ' should equal ' + (i + 1))
  })
  t.end()
})

// 2 args

test('create a range from two ints', function (t) {
  t.plan(5)
  gamut(0, 5).forEach(function (item, i) {
    t.equal(item, i, 'item ' + i + ' should equal ' + i)
  })
  t.end()
})

test('create a backwards range from two ints', function (t) {
  t.plan(5)
  var i = 5
  gamut(5, 0).forEach(function (item) {
    t.equal(item, i, 'item ' + i + ' should equal ' + i)
    i--
  })
  t.end()
})

test('create a range from int and callback', function (t) {
  t.plan(5)
  gamut(5, function () {
    return 1
  }).forEach(function (item, i) {
    t.equal(item, 1, 'item ' + i + ' should equal 1')
  })
  t.end()
})

test('create a range from range string and callback', function (t) {
  t.plan(5)
  gamut('0..5', function () {
    return 1
  }).forEach(function (item, i) {
    t.equal(item, 1, 'item ' + i + ' should equal 1')
  })
  t.end()
})

// 3 args

test('create a stepped range from two ints', function (t) {
  t.plan(3)
  var i = 0
  gamut(0, 5, 2).forEach(function (item) {
    t.equal(item, i, 'item ' + i + ' should equal ' + i)
    i += 2
  })
  t.end()
})
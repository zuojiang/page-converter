const assert = require('assert')
const {
  calculateStart,
  calculatePageNumber,
  calculateTotalPage,
} = require('./index')

assert.equal(calculateStart(1, 10), 0)
assert.equal(calculateStart(2, 10), 10)
assert.equal(calculateStart(3, 10), 20)
assert.equal(calculateStart(4, 10), 30)

assert.equal(calculatePageNumber(0, 10), 1)
assert.equal(calculatePageNumber(10, 10), 2)
assert.equal(calculatePageNumber(20, 10), 3)
assert.equal(calculatePageNumber(30, 10), 4)

assert.equal(calculateTotalPage(100, 10), 10)
assert.equal(calculateTotalPage(105, 10), 11)
assert.equal(calculateTotalPage(99, 10), 10)
assert.equal(calculateTotalPage(82, 10), 9)
assert.equal(calculateTotalPage(10, 3), 4)
assert.equal(calculateTotalPage(0, 3), 1)

try {
  calculateStart(0, 1)
  assert.fail()
} catch (e) { }
try {
  calculateStart(1, 0)
  assert.fail()
} catch (e) { }
try {
  calculatePageNumber(-1, 1)
  assert.fail()
} catch (e) { }
try {
  calculatePageNumber(1, 0)
  assert.fail()
} catch (e) { }
try {
  calculateTotalPage(0, 0)
  assert.fail()
} catch (e) { }
try {
  calculateTotalPage(-1, 1)
  assert.fail()
} catch (e) { }

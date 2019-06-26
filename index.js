
exports.calculateStart = function(pageNumber, size) {
  if (pageNumber < 1) {
    throw new Error('pageNumber needs to be a positive integer')
  }
  if (size < 1) {
    throw new Error('size needs to be a positive integer')
  }
  return Math.max((pageNumber - 1) * size - 1, 0)
}

exports.calculatePageNumber = function(start, offset) {
  if (start < 0) {
    throw new Error('start needs to be a non-negative integer')
  }
  if (offset < 1) {
    throw new Error('offset needs to be a positive integer')
  }
  return Math.floor(start / offset) + 1
}

exports.calculateTotalPage = function (total, offset) {
  if (total < 0) {
    throw new Error('total needs to be a non-negative integer')
  }
  if (offset < 1) {
    throw new Error('offset needs to be a positive integer')
  }
  return Math.max(Math.ceil(total / offset), 1)
}

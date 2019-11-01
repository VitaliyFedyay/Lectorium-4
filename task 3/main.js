Array.prototype.myPush = function () {
  for (let index = 0; index < arguments.length; index++) {
    this[this.length] = arguments[index]
  }
}

Array.prototype.myFilter = function (callback) {
  let newArr = []
  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      newArr.myPush(this[index])
    }
  }
  return newArr
}

function matrix(R, C, r0, c0) {
  let n = Math.max(r0, c0, R - 1 - r0, C - 1 - c0)
  let start = [[r0, c0]]
  for (let i = 1; i <= n; i++) {

    for (let j = 1 - i; j <= i; j++) start.myPush([r0 + j, c0 + i])
    for (let j = i - 1; j >= -i; j--) start.myPush([r0 + i, c0 + j])
    for (let j = i - 1; j >= -i; j--) start.myPush([r0 + j, c0 - i])
    for (let j = 1 - i; j <= i; j++) start.myPush([r0 - i, c0 + j])

  }

  let result = start.myFilter(function (x) {
    return x[0] >= 0 && x[0] < R && x[1] >= 0 && x[1] < C
  })
  console.table(result)
}

matrix(1, 4, 0, 0)
matrix(5, 6, 1, 4)

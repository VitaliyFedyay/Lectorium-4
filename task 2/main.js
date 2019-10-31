let array = [1, 2, 3, 4, 5, 0]

Array.prototype.myForEach = function (callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index], index, this)
  }
}

Array.prototype.myMap = function (callback) {
  let arr = []
  for (let index = 0; index < this.length; index++) {
    arr.push(callback(this[index], index, this))
  }
  return arr
}

Array.prototype.mySort = function (callback) {
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      if (callback(this[i], this[j])) {
        let item = this[i]
        this[i] = this[j]
        this[j] = item
      }
    }
  }
  return this
}

console.log('myForEach')
array.myForEach(function (num, i, array) {
  console.log(`array: ${array} i: ${i} array[i]:  ${num}`)
})

console.log('myMap')
array.myMap(function (num, i, array) {
  console.log(`array: ${array} i: ${i} array[i]:  ${num}`)
})

console.log('mySort')
let sort = array.mySort(function (a, b) {
  return a < b
})
console.log(sort)
let array = [1, 2, 3, 4, 5]

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



console.log('myForEach')
array.myForEach(function (num, i, array) {
  console.log(`array: ${array} i: ${i} array[i]:  ${num}`)
})

console.log('myMap')
array.myMap(function (num, i, array) {
  console.log(`array: ${array} i: ${i} array[i]:  ${num}`)
})
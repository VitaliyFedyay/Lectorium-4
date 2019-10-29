function User(nameUser, ageUser) {

  let _name = nameUser
  let _age = ageUser

  function getData() {
    console.log(`User name is ${_name} and user age is ${_age}`)
  }

  function setName(name) {
    if (typeof name === 'string' && name.length > 0) {
      _name = name
    }
    else {
      console.log('incorrect data')
    }
  }

  function setAge(age) {
    if (typeof age === 'number' && !Number.isNaN(age)) {
      _age = age
    }
    else {
      console.log('incorrect data')
    }
  }

  this.accessSetName = function (name) {
    setName(name)
  }

  this.accessSetAge = function (age) {
    setAge(age)
  }

  this.accessGet = function () {
    getData()
  }

}

let man = new User('Valentino', 25)

man.accessGet()
man.accessSetName('Vitaliy')
man.accessSetAge(24)
man.accessGet()

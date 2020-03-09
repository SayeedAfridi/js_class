var newArray = ['Apple', 'Banana', 'Berry']

// for (var i = 0; i < newArray.length; i++) {
//     console.log(newArray[i])
// }
var fa = newArray.filter(function(item) {
    return item === 'Apple'
})
console.log(newArray.includes('A'))
// console.log(newArray)
// newArray.forEach(function(item, index, arry) {
//     console.log(item)
//     console.log(index)
//     console.log(arry)
// })

// newArray.push('newEl')

// console.log(newArray)

// newArray.pop()

// console.log(newArray)

// var dArr = newArray.slice(1, 3)

// console.log(dArr)

// var arr = [2, 3, 5, 6]

// var arr2 = arr.map(function(item) {
//     return (item = item * 2)
// })

// console.log(arr2)

// Primitives          Object
// 1. Number
// 2. String
// 3. Undefined
// 4. NUll
// 5. Boolean

//Class Inheritance Abstraction Polymorphism

// var person = {
//     name: 'Sayeed',
//     job: 'Student',
//     calculateAge: function() {
//         console.log(22)
//     }
// }

// console.log(person)

//function constructor
// var Person = function(name, job) {
//     this.name = name
//     this.job = job
// }
// Person.prototype.calculateAge = function() {
//     console.log(22)
// }
// var sayeed = new Person('Sayeed', 'Student')
// var kaushik = new Person('Kaushik', 'Student')

// console.log(sayeed, kaushik)

// sayeed      Person      Object      null
// p           p           p

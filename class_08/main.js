// //primitives vs Objects
// var a = 23
// var b = a
// a = 30
// console.log(a)
// console.log(b)

// var obj1 = {
//     name: 'Sayeed',
//     age: 23
// }

// var obj2 = obj1

// obj1.age = 30
// console.log(obj1.age)
// console.log(obj2.age)

// var age = 23
// var afridi = {
//     name: 'Sayeed Afridi',
//     job: 'Student',
//     city: 'Dinajpur'
// }

// function change(a, b) {
//     a = 30
//     b.city = 'Rangpur'
// }

// change(age, afridi)

// console.log(age)
// console.log(afridi.city)

//Functions

//function as an argument

// var years = [1998, 2005, 1997, 1963, 1937]

// var calculateAge = function(arr, fn) {
//     var ageArr = []

//     arr.forEach(element => {
//         ageArr.push(fn(element))
//     })
//     return ageArr
// }

// var calc = function(year) {
//     return 2020 - year
// }

// var isAdult = function(age) {
//     return age >= 18
// }

// var ages = calculateAge(years, calc)

// console.log(ages)

// var adults = calculateAge(ages, isAdult)

// console.log(adults)

//Function returns a function

// var interviewQuestion = function(job) {
//     if (job === 'teacher') {
//         return function(name) {
//             console.log('Hello, ' + name + ', what subject do you teach?')
//         }
//     } else if (job === 'designer') {
//         return function(name) {
//             console.log(
//                 'Hello, ' + name + ', can uou please describe UX design?'
//             )
//         }
//     } else {
//         return function(name) {
//             console.log('Hello, ' + name + ', what do you do?')
//         }
//     }
// }

// var teacher = interviewQuestion('teacher')
// teacher('Sayeed')
// teacher('John')
// interviewQuestion('designer')('Mike')

//Encapsulation

//IIFE --> Immediately Invoked Function Expression

// ;(function() {
//     var score = Math.random() * 10
//     console.log(score >= 5)
// })()
// ;(function(goodluck) {
//     var score = Math.random() * 10
//     console.log(score >= 5 - goodluck)
// })(5)

//Bind , call and Apply

// var afridi = {
//     name: 'Sayeed Afridi',
//     age: 23,
//     job: 'Student',
//     presentation: function() {
//         console.log("Hi, I'm " + this.name + ", I'm " + this.age + ' years old')
//     }
// }

// afridi.presentation()

// var kaushik = {
//     name: 'Kaushik',
//     age: 22
// }

// afridi.presentation.call(kaushik)

//afridi.presentation.apply(kaushik, [])

// var ad = function(a, b) {
//     console.log(a, b)
// }

// ad('Hello', 'World!')

// var bindedFn = ad.bind(this, 'Hello')
// bindedFn('Sayeed')

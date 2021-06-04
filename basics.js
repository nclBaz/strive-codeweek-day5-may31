let whateverIWant = 1012312313123.5
let anotherVariable = "This is a string"
let aBooleanVariable = true
let anotherBooleanVariable = false

// 2 > 3 --> false
// 5 > 3 --> true

// console.log(whateverIWant)
// console.log(anotherBooleanVariable)
// console.log(myFirstObject)

let aNumber = 1
let anotherNumber = 10

// console.log(aNumber + anotherNumber)

// let myFirstArray = [1, 2, 3, 4, 5, 6, 7]
// let aStringArray = ["Riccardo", "Jay", "Lia", "Martin", "Maria", "Fatima"]

// console.log(aStringArray)
// console.log(aStringArray.length)
// console.log(aStringArray[0])
// console.log(aStringArray[1])
// console.log(aStringArray[2])
// console.log(aStringArray[5])

// ********** FOR LOOP **************

// for (let index = 0; index < aStringArray.length; index++) {
//   console.log(index)
//   console.log(aStringArray[index])
// }

// ************* OBJECTS **********

// let myFirstObject = {
//   name: "Riccardo",
//   surname: "Gulin",
//   age: 18,
//   isTeacher: true,
// }

// console.log(myFirstObject)
// console.log(myFirstObject.surname)
// console.log(myFirstObject.age)
// console.log(myFirstObject.isTeacher) // first way
// console.log(myFirstObject["surname"]) // second way

// ******** FUNCTION DECLARATION *******************
// let myFirstFunction = function (n1, n2) {
//   // body of the function

//   let total = n1 + n2
//   console.log(total)
// }

// //*********** FUNCTION USAGE *******************

// myFirstFunction(1, 2) // n1 equals to 1, n2 equals to 2
// myFirstFunction(10, 20) // n1 equals to 10, n2 equals to 20
// myFirstFunction(100, 200) // n1 equals to 100, n2 equals to 200

let myFirstObject = {
  name: "Riccardoo",
  surname: "Gulin",
  age: 18,
  isTeacher: true,
}
// function declaration
let greetUser = function () {
  if (myFirstObject.name === "Riccardo") {
    console.log("HELLO RICCARDO") // if condition is TRUE I'm executing this code
  } else {
    console.log("WHO ARE YOU????") // if condition is FALSE I'm executing this code
  }
}

// function usage

greetUser()

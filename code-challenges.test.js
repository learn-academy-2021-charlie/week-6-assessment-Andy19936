// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.
 // PSEUDO
 // write my test 
 // name the func going with stringCap
 // ok working with objects so before iterating over values we have to access them in them within the object going to use . to destructure
 // going to use map and .toUpperCase to access the value in the array probably going to have to split the array first  and use [0].toUppercase
 // use string interpolation to write my sentence with my vars 
 // gave up on my for loop attempt going to try mapping 
 // we can do a map within a map mind blown
 // assign my split name to a var
 // map over my new var use 0 index and .toUpperCase
 // add substring so i dont just get a value of what i uppercased
 // join and concat with occupation 

// a) Create a test with an expect statement using the variable provided.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
 //Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]
 describe("The stringCap function.",()=>{
   test("takes an object and returns an array of string of content in the object with a capitalized name and their occupation",() => {
       expect(stringCap(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."])
   })
 })

// b) Create the function that makes the test pass.
// const stringCap = (arr) =>{
//   let namesArr = []
//   for (let i=0; i<arr.length; i++) {
//     namesArr =  namesArr.concat(arr[i].name)
//   }
//   let capNames=namesArr.map(value => value.split(' '))
//   console.log(capNames)
// }

const stringCap = (arr)=>{
return arr.map(value =>{
  let names = value.name.split(' ')
  let caps = names.map(value => {
    return value[0].toUpperCase() + value.substring(1)
  }).join(' ')
  return `${caps} is a ${value.occupation}.`
})
}



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// PSEUDO
// name your function going with divideAndFilter
// use a filter method to clean up my array so it only holds numbers give it a var
// filter with typeof
// use map to divide all my values in my clean array by 3 give it a var
// return my mapd var
// test didnt work need to learn to read ASSumed remainders meant values after i filtered my array lol should be an easy fix instead of /3 it wil be %3 lets see

// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("The divideAndFilter function.",()=>{
   test("takes an array and returns a new array of only numbers that have been divided by 3",() => {
       expect(divideAndFilter(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
       expect(divideAndFilter(hodgepodge2)).toEqual([ 2, 1, -1 ])
   })
 })


// b) Create the function that makes the test pass.
const divideAndFilter = (arr) =>{
  let filtArr = arr.filter(value => typeof value == 'number')
  let mapdArr = filtArr.map(value => value%3)
  return mapdArr
}


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// PSEUDO

// name your function going with cuber
// write my test
// going to involve iteration usig map to cube my values and assigning it a var
// intitially did value*value*value found Math.pow method which takes the params of your number in this case value inside my .map and exponent in this case 3 because we are cubing 
// now we are going to sum  them together using the reduce method which is taking the arguments of prev val and current val in the form of (a, b) and adding them together (a+b) i also gave this its own var
//run a return for the function used my var that i assigned to my reduce method   

// a) Create a test with an expect statement using the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("The cuber function.",()=>{
  test("takes an array of nums and returns an array of all the numbers cubed and added together",() => {
      expect(cuber(cubeAndSum1)).toEqual(99)
      expect(cuber(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.
const cuber = (arr) =>{
  let newArr = arr.map(value => Math.pow(value, 3))
  let summArr = newArr.reduce((a, b)=> a + b)
  return summArr 
}


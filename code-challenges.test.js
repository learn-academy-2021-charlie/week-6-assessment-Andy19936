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

// a) Create a test with an expect statement using the variable provided.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]
// describe("The getMinMax function.",()=>{
//   test("takes an array and returns a new array with the highest and lowest values of the array",() => {
//       expect(getMinMax(nums1)).toEqual([-8, 90])
//       expect(getMinMax(nums2)).toEqual([5, 109])
//   })
// })


// b) Create the function that makes the test pass.



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]



// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// PSEUDO

// name your function going with cuber
// write my test
// going to involve iteration usig map to cube my values and assigning it a var
// intitially did value*value*value found Math.pow method which takes the params of your number in this case value inside my .map and exponent in this case 3 because we are cubing 
// now we are going to sum  them together using the reduce method which is taking the arguments of prev val and current val in the form of (a, b) and adding them together (a+b)

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

console.log(cuber([8,9,4]))
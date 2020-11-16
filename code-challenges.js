// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"


// const divByThree = (number) =>{
//     // I'll probably need at least one if statement

//     if (number / 3 === 0) {
//         // I will also probably need to use % or / in order to find the numbers that are divisble by three 
//         return `${number} is divisible by three`
//     } else {
//         return `${number} is not divisible by three`
//     }
// }

// console.log(divByThree(num1));
// console.log(divByThree(num2));
// console.log(divByThree(num3));


// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]


// use a build in method that will return my array with all the words capitalized
// no need for if?
// at least two built in methods 

// Start by creating a function that takes in an array
// const capNous = (array) => {
//     // create a new array 
//     let capArray = []
// // use a higher order function: map  
//     capArray = array.map(value => {
//         // capitized the first letter of each words by setting value to 0 and then concat that to a substring.
//         return value[0].toUpperCase() + value.substring(1)
//     })
// // return new array
//     return capArray
// }

// console.log(capNous(randomNouns))



// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

// var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// // Expected output: [-8, 0, 8, 46, 59, 90, 107]

// // create a function
// // use a higher order function; filter 
// // use a built-in method: typeof in order to get all the numbers
// // create new string and then return new string?

// const onlyNums = (array) => {
//     let numbs = array.filter(value => typeof value === "number")
//     numbs.sort((a,b) => a-b)
    
//     return numbs
    

// }
// console.log(onlyNums(mixedDataArray));



// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

// create a function
// my function thats a string and logs the index of the first vowel
// 
// maybe a new vowel string?
// built in method
const findVowelIndex = (string) => {

    let stringArray = string.split("")
    
    let vowelIndex = stringArray.findIndex(i => i === "a" || i === "e" || i === "i"|| i === "o" || i === "u" )
    
    return vowelIndex
}

    console.log(findVowelIndex(vowelTester1));
    console.log(findVowelIndex(vowelTester2));

  


    


// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"





// Uncomment and use the following console logs to test your function
// console.log(calculator(3, "*", 9))
// Expected output: 27

// console.log(calculator(16, "+", 3))
// Expected output: 19

// console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"

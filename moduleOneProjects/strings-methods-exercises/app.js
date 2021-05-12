//Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.


// function capilizeAndLowercase(stringinput){
//     var upper = stringinput.toUpperCase()
    
//     var lower = stringinput.toLowerCase()

//     var upperC = upper.concat(lower)
//     console.log(upperC)
        // return upperC


// }


// capilizeAndLowercase("Hello") // => "HELLOhello"

// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.

// Hint: You'll need to use Math.floor().

// function findMiddleIndex(stringInput){
//     stringInputLength = stringInput.length 

//     stringHalfLength = Math.floor(stringInputLength / 2)

//     //console.log(stringInputLength)
//     console.log(stringHalfLength)

//     // stringInputRandom.indexof(3)
// }


// findMiddleIndex("Hello") // => 2
// findMiddleIndex("Hello World") // => 5

//Write a function that uses slice() and the other functions you've written to return the first half of the given string.

// function returnFirstHalf(stringInput){
//     var half = Math.floor(stringInput.length / 2);

//     var stringInputHalf = stringInput.slice(0, half)
//     console.log(stringInputHalf)
    // return stringInput
// }

// returnFirstHalf("Hello") // => "He"
// returnFirstHalf("Hello World") // => "Hello"


// Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.

// Hint: If your string length is odd, use Math.floor() to round down.

function capilizeAndLowercase(stringInput){

    // my input are string1 
    //count number of characters in string
    // divide the length of the string in half
    // round down to the nearest whole number 
    var halfLength = Math.floor(stringInput.length / 2);
    
    var firstHalfOfString = stringInput.slice(0, halfLength)
    var secondHalfOfString = stringInput.slice(halfLength, stringInput.length)
    
    //make first half upper case
    var firstHalfOfStringInput = firstHalfOfString.toUpperCase()
  
    //make second half lower case
    var secondHalfofStringInput = secondHalfOfString.toLowerCase()
   

    var modifiedStringToRestOfProgram = firstHalfOfStringInput.concat(secondHalfofStringInput)

    console.log(modifiedStringToRestOfProgram)
    return modifiedStringToRestOfProgram
};

capilizeAndLowercase("Hello") // => "HEllo"
capilizeAndLowercase("Hello World") // => "HELLO world"
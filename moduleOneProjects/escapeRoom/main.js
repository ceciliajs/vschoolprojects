const readline = require("readline-sync");

const name = readline.question("What is your name? ");

//make an arry of your 3 options
 arr = ["Put hand in hole", "Find the key", "or Open the door"]


//make 2 variables and set to booleans
let hasKey = false
let isAlive = true

while (isAlive){
let index = readline.keyInSelect(arr, "What option shall you choose?")

if(index === 2){
    if(hasKey){
        console.log('you have escaped')
        isAlive=false
    }else{
        console.log('you must find the key to open the door')
    }
} else if(index === 1){
    console.log("You have the key!")
    hasKey = true
} else {
    console.log("You have died.")
    isAlive = false
}

}
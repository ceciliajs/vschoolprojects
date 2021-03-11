const readlineSync = require("readline-sync")

//create your 2 variables

var num1 = readlineSync.question("Please enter your first number: ")

var num2 = readlineSync.question("Please enter your second number: ")

 operators = ["add", 'sub', 'mul', 'div']

 index = readlineSync.keyInSelect(operators, 'Which operator?');



function add(answer1, answer2) {
    console.log(Number(answer1) + Number(answer2))
}
function sub(answer1, answer2){
    console.log(Number(answer1) - Number(answer2))
 }

 function mult(answer1, answer2){
    console.log(Number(answer1) * Number(answer2))
 }

 function div(answer1, answer2){
    console.log(Number(answer1) / Number(answer2))
 }

 if (index === 0){
    add(num1, num2)
 } else if (index === 1) {
     sub(num1, num2)
 } else if (index === 2) {
     mult(num1, num2)
 } else  div(num1, num2)
 









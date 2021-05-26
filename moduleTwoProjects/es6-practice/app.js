//1)

// const name = "John"
// const age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

//2)

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(carrot => ({ type: "carrot", name: carrot }));
// }

//3)

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter((person) => person.friendly)
// }

//4)

//  (a, b) => a + b


// var produceProduct = (a, b) => a * b


//5)
// let fName = "Jane"
// let lName = "Doe"
// let ageD = 100

// function printString(firstName, lastName, age){
// fName = firstName
// firstName = "Kat"
// lName = lastName
// lastName = "Stark"
// ageD = age
// age = 40
// return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`

// }
// //console.log(printString(fName, lName, ageD))
// console.log(printString())

//6)

// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 
//  function filterForDogs(arr) {
//     return arr.filter(animal => animal.type === "dog" ? true : false)
// }
// console.log(filterForDogs(animals))

//7)

function welcome(location, name){
return `Hi ${name}! 
    
Welcome to ${location}. 
    
I hope you enjoy your stay. Please ask the president of Hawaii if you need anything. `
}

console.log(welcome("Hawaii", "Janice"))


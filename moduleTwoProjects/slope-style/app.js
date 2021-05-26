//1)

// function collectAnimals(...animals) {  
//     return animals 
// }

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

//2)


// function combineFruit(fruit, sweets, vegetables){
//     return {fruit, sweets, vegetables}
// }

// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"]));
// // //=> {
// //         fruit: ["apple", "pear"],
// //         sweets: ["cake", "pie"],
// //         vegetables: ["carrot"]
// //      }

//3)

// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   };
  
// //const {location, duration } = vacation
  
// function parseSentence({location, duration }){ 
// return `We're going to have a good time in ${location} for ${duration}`
// }
// console.log(parseSentence(vacation))

//4)

// function returnFirst(items){
//     const [firstItem] = items; /*change this line to be es6*/
//     return firstItem
// }

//5)

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(){
//     const [firstFav, secondFav, thirdFav] = favoriteActivities
//     return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`;
// }

// console.log(returnFavorites(favoriteActivities))

//6)

// function combineAnimals(realAnimals) {  
//     return realAnimals
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals([...realAnimals, ...magicalAnimals, ...mysteriousAnimals])); 

// // ["dog", "cat", "mouse", "jackolope", "platypus"]

//7)
// var numbers = [a,b,c,d,e];

// function product(...numbers) {  
//   return numbers.reduce((acc, number) => acc * number, 1)
//   }

//8)

// function unshift(array, ...letters) {  
//     return [...array, ...letters]
//   }

//9)

function populatePeople(names){
    return names.map(function(name){
        // name = name.split(" ");
        let [firstName, lastName] = name.split(" ");
        return {
            firstName,
            lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
//Pre-lims

// for(var i = 0; i <= 9; i++){
//     console.log(i)
// }

// for(var i = 9; i >= 0; i--){
//     console.log(i)
// }

// const fruit = ["banana", "orange", "apple", "kiwi"]

// for(var i =0; i < fruit.length; i++){
// }
// console.log(fruit)

//Bronze

// var arr = []
// for(var i = 0; i <= 9; i++){
//     arr.push(i)
// }
// console.log(arr)

// for(var i =0; i <= 100;i++){
//     if(i % 2 === 0 ){
//         console.log(i)
//     }
// }

var arr2 = []
const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for(var i = fruit.length -1; i >= 0;i--){
    if(i % 2 === 0){
        arr2.push(fruit[i])
    }
}

console.log(arr2)
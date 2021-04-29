var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


function manyOps(){
    vegetables.pop()

    fruit.shift()
    
    // fruit.indexOf("orange")
    
    fruit.push(1)

    // var lengthVeggies = vegetables.length
  
    vegetables.push(3)
    

    var food = fruit.concat(vegetables)
    // console.log(food)

    food.splice(4, 2)
    // console.log(newFoodArr)
    // console.log(food)

    food.reverse()
    // console.log(food)

    // food.split("")
    
    // console.log(food.toString())

    return food.toString()

}

console.log(manyOps())
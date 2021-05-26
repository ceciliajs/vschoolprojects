// function sum(x, y){
// //const result = typeof(x)
// if(typeof x !== "number" || typeof y !== "number") throw "not a number"
// return x + y

// }

// try{
//     sum(true, true)

// }   catch(err) {
//     console.log("Input is" + " " + err)
    
// }
//     finally{
//     console.log("I am running always")
// }


var user = {username: "sam", password: "123abc"};
function login(user){
    //console.log(username)
    
    
  if (user.username === 'sam' && user.password === '123abc') {
      console.log("login successful")
  } else throw "login unsuccessful"
}

// try {
//     login(user)
// } catch(err){
//     console.log("Input is" + " " + err)
// }

try {
    login(user)
} catch(err){
    console.log( err)
}
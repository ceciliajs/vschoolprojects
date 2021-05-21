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
function login(username){
    //console.log(username)
    
    
  if (username.username === 'sam' && username.password === '123abc') {
      console.log("login sucessful")
  } else throw "login unsucesssful"
}

// try {
//     login({username: "sam", password: "123abc"})
// } catch(err){
//     console.log("Input is" + " " + err)
// }

try {
    login({username: "mike", password: "1abc"})
} catch(err){
    console.log( err)
}
var header = document.getElementById("header")

header.textContent = "JavaScript Made This!!"
header.style.fontSize = "50px"
header.style.textAlign = "center"

var about = document.getElementById('about')

about.style.textAlign = "center"

var name2 = document.getElementById("about2")

name2.style.color = "pink"

function clearInput(){
    document.getElementById("myDiv").innerHTML = ""

}

// var left = document.getElementsByClassName('message left')
// var right = document.getElementsByClassName('message right')

// right.textContent = "This is crazy"

var left = document.querySelectorAll(".message.left")
for (var i = 0; i < left.length; i++){
    if (i == 0){
    left[i].textContent = "Hi"
    } else if (i == 1){
        left[i].textContent = "Rude"
    }
    
}

var right = document.querySelectorAll(".message.right")
for (var i = 0; i < right.length; i++){
    if (i == 0){
    right[i].textContent = "No"
    } else if (i == 1){
        right[i].textContent = "Sorry not Sorry"
    }
    
}

//console.log("Hi")

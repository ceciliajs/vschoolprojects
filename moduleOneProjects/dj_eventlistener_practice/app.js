
var dj1 = document.getElementById("square")

dj1.addEventListener('mouseover', function(){
    dj1.style.backgroundColor = "blue"
})

dj1.addEventListener('mousedown', function(){
    dj1.style.backgroundColor = "red"
})

dj1.addEventListener('mouseup', function(){
    dj1.style.backgroundColor = "yellow"
})


dj1.addEventListener('dblclick', function(){
    dj1.style.backgroundColor = "green"
})

window.addEventListener('scroll', function(){
    dj1.style.backgroundColor = "orange"
})

window.addEventListener('keydown', function(event){
    if(event.key === "r"){
        dj1.style.backgroundColor = "red"
    } else if (event.key === "b"){
        dj1.style.backgroundColor = "blue"
    } else if (event.key === "y"){
        dj1.style.backgroundColor = "yellow"
    } else if (event.key === "g"){
        dj1.style.backgroundColor = "green"
    } else if (event.key === "o"){
        dj1.style.backgroundColor = "orange"
    }
})
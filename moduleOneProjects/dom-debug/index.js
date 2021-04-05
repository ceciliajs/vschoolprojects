const colors = ["red", "blue", "green", "yellow"]

document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
    return subItem
})

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        let optionDiv = document.createElement("option") 
        optionDiv.textContent = colors[i]
        optionDiv.value = colors[i]
        dropDown.append(optionDiv)
    }
    dropDown.addEventListener("change", function(e){
        console.log(e.target.parentNode)
        e.target.parentNode.style.backgroundColor = e.target.value
        
    })
    return dropDown
}


function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input").value
    subItem.textContent = subItemValue
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}



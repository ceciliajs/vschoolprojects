const form = document["addItem"]


form.addEventListener("submit", function(event){
    event.preventDefault()
    let uList = document.getElementById("list")

    let newItem = document.createElement("li")
    let deleteButton = document.createElement('button')
    let editButton = document.createElement('button')
    let inputDiv = document.createElement('div')
    let inputValue = document.getElementById('title').value

    deleteButton.textContent = "X"
    editButton.textContent = "Edit"
    inputDiv.textContent = inputValue

    
    
    newItem.append(inputDiv, deleteButton, editButton)
    uList.append(newItem)
    //console.log(deleteButton)
    
    deleteButton.addEventListener("click", function(e){
            e.target.parentNode.remove()
    })
})
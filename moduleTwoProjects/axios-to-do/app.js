// GET
//const axios = require('axios');

//const { default: axios } = require("axios")

////function createTodo{
    axios.get("https://api.vschool.io/ceciliastark/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = response.data[i].title
            document.body.appendChild(h1)

            
            const checkbox = document.createElement('input')
            checkbox.id = response.data[i]._id;

            checkbox.type = "checkbox"
            document.body.append(checkbox)
            if (response.data[i].completed === true){
                h1.style.textDecoration = "line-through"
                checkbox.checked = true
            }  
            changeCheckbox()
            // PUT
            
            function changeCheckbox(){
            checkbox.addEventListener("change", function(e){
                var targetCheckbox = e.target;
                console.log(targetCheckbox);
                
                if(checkbox.checked){
                    checkbox.checked = true
                    response.data[i].completed = true
                    h1.style.textDecoration = "line-through"
                } else {
                    checkbox.checked = false
                    response.data[i].completed = false
                    h1.style.textDecoration = "none"
                }
                console.log(response.data[i])
                axios.put("https://api.vschool.io/ceciliastark/todo/" + response.data[i]._id, response.data[i])
                
                .then(response => console.log(response))
                .catch(error => console.log(error))
            })
            
            
            } 
            // checkbox.checked = false
            //checkbox.textContent = response.data[i].completed.value
        }
    })
    .catch(error => console.log(error))
//node }


// POST

// const newToDo = {
//     title: "Call Mom", // this one is the only thing that is actually required
//     description: "Description here",
//     completed: false
// }

const todoForm = document.listForm

todoForm.addEventListener("submit", function(e){
    e.preventDefault()

    const newToDo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imageLink.value
        
    }

    axios.post("https://api.vschool.io/ceciliastark/todo", newToDo)
    .then(response => console.log(response.data))
        .catch(error => console.log(error))

        
        
        
        
    })
    
    // DELETE

  
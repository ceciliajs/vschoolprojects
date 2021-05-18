const form = document['travel-form']

form.addEventListener("submit", (event) => {
    event.preventDefault()

    
    const firstName = form.firstName.value
    const lastName = form.lastName.value
    const gender = form.gender.value
    let age = form.age.value
    const location = form.country.value
    
    let dietChoice = []

    for(let i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            dietChoice.push(form.diet[i].value)
        }
    }
    alert('First Name: ' + firstName + " Last Name: " + lastName + " Age: " + age + " Gender: " + gender + " Location: " + location + " Dietary Restrictions: " + dietChoice)
})
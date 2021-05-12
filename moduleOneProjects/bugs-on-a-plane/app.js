// var query = document.querySelector;
// var submit = document.getElementById("submit");

submit.addEventListener("click", formAlert);

function formAlert() {
    var form = document["airlineForm"];
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById(`vegan`).value);
    }
    else if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    else if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }
    console.log(formAlert())

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}



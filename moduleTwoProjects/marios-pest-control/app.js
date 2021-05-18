const form = document['baddies-form']

form.addEventListener("submit", (event)=> {
    event.preventDefault()

    let goombas = form.Goombas.value
    let goom1 = parseInt(goombas)

    let goomTotalCost = goom1 * 5

    let bobOmbs = form.BobOmbs.value
    let bob1 = parseInt(bobOmbs)
    let bobTotalCost = bob1 * 7

    let cheeps = form.CheepCheeps.value
    let cheeps1 = parseInt(cheeps)
    let cheepTotalCost = cheeps1 * 11


    let totalAmount = goomTotalCost + bobTotalCost + cheepTotalCost

    let newTotal = document.createElement("div")
    newTotal.textContent = totalAmount
    document.getElementById('total').append("Your total is $" + totalAmount)

    console.log(totalAmount)
})
// addition
const additionForm = document['my-form-add']

additionForm.addEventListener("submit", function(event){
    event.preventDefault()

    const firstNum = additionForm.firstNum.value
    const sumAdd1 = parseInt(firstNum)
    const secondNum = additionForm.secondNum.value
    const sumAdd2 = parseInt(secondNum)
    additionForm.firstNum.value = ""
    additionForm.secondNum.value = ""

    let totalAdd = sumAdd1 + sumAdd2 

    let totalValue = document.createElement('h3')
    totalValue.textContent = totalAdd
    document.getElementsByTagName('h6')[1].append(totalValue)
    totalValue.style.fontSize = "15px"
   
})

//subtraction

const subtractionForm = document['my-form-subtract']

subtractionForm.addEventListener("submit", function(event){
    event.preventDefault()

    const firstNum = subtractionForm.firstNum.value
    const sumSub1 = parseInt(firstNum)
    const secondNum = subtractionForm.secondNum.value
    const sumSub2 = parseInt(secondNum)
    subtractionForm.firstNum.value = ""
    subtractionForm.secondNum.value = ""

    let totalSub = sumSub1 - sumSub2 

    let totalValue = document.createElement('h3')
    totalValue.textContent = totalSub
    document.getElementsByTagName('h6')[3].append(totalValue)
    totalValue.style.fontSize = "15px"
   
})

//multiplication

const multiplicationForm = document['my-form-multiply']

multiplicationForm.addEventListener("submit", function(event){
    event.preventDefault()

    const firstNum = multiplicationForm.firstNum.value
    const sumMult1 = parseInt(firstNum)
    const secondNum = multiplicationForm.secondNum.value
    const sumMult2 = parseInt(secondNum)
    multiplicationForm.firstNum.value = ""
    multiplicationForm.secondNum.value = ""

    let totalMult = sumMult1 * sumMult2 

    let totalValue = document.createElement('h3')
    totalValue.textContent = totalMult
    document.getElementsByTagName('h6')[5].append(totalValue)
    totalValue.style.fontSize = "15px"
   
})
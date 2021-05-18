let button = document.getElementById("button")
count = 0;

button.addEventListener("click", (event)=>{
    count += 1;
    const newDiv = document.createElement('div')
    newDiv.textContent = "Number of clicks " + count
    document.getElementsByTagName('body')[0].append(newDiv)
    localStorage.setItem("button", count)
})
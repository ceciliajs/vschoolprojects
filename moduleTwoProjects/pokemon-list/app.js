const xhr = new XMLHttpRequest()


xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        //console.log(data)
        displayData(data.objects[0].pokemon)
    }
}

function displayData(arr){
    //console.log(arr)
    //console.log('hi')
    for( let i = 0; i < arr.length; i++ ){
        
        const h1 = document.createElement('h1')
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
        //console.log(arr[i].name)

    }
    return arr

}

xhr.open("GET", "https://api.vschool.io/pokemon", true)

xhr.send()


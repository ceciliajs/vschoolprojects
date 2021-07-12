import React from "react"

function Pet(props){
    console.log(props)
    return (
        <div class="pets">
            
            <h6 >Pet Name: {props.name}</h6>
            <h6 >Breed: {props.breed}</h6>
        </div>
    )
}

export default Pet
import React from "react"

function Friend(props){
    console.log(props)
    return (
        <div class="friends">
            <h6 >Friend Name: {props.name}</h6>
            <h6 >Age: {props.age}</h6>
        </div>
    )
}

export default Friend
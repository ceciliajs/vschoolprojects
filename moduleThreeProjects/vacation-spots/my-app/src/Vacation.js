import React from "react"

function Vacation(props){
    return (
        <div>
            <h6 id="place">Place: {props.place}</h6>
            <h6 id="price">Price: {props.price}</h6>
            <h6 id="season">Best Season to Go: {props.timeToGo}</h6>
        </div>
    )
}

export default Vacation
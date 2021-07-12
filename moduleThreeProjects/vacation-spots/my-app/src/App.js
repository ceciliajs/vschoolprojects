import React from "react"

import "./style.css"
import Vacation from "./Vacation";
import vacationSpots from "./components/vacationSpots";

function App(){
     const vacayComponents = vacationSpots.map(function(vacation){
         return (
             <Vacation key={vacation.id} place={vacation.place} price={vacation.price} timeToGo={vacation.timeToGo} />
         )

     })
    return (
        <div>
            {vacayComponents}
        </div>
    )
}

export default App
import React, { useContext } from "react"
import { UglyThingsContext } from "../UglyThingsContextProvider";



function UglyThingListItem (props){

    const {uglyThingsNewListItem, isEditOn, toggleEdit, uglyThingsList } = useContext(UglyThingsContext)



    return(
        <div id={props.id} style={{ display: "flex",borderColor: "green", border: "solid", justifyContent: "space-between" }}>
                            <h2>{props.title}</h2>
                            <h2>{props.description}</h2>
                            <h2>{props.imgUrl}</h2>
                            <button onClick={toggleEdit}> {isEditOn ? "Close" : "Edit"}</button>
                        </div>
    )
}

export default UglyThingListItem
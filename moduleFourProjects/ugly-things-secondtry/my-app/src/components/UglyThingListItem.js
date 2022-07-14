import React, { useState, useContext } from "react";
import { UglyThingsContext } from "../UglyThingsContextProvider.js"
import UglyThingsEditForm from "./UglyThingsEditForm";

function UglyThingListItem(props) {

    const { deleteItem } = useContext(UglyThingsContext);

    const [isEditOn, setIsEditForm] = useState(false);

    const toggleEdit = () => {
        setIsEditForm(prev => !prev)
    };

    return (
        <div id={props.id} style={{ border: "dotted" }}>
            <h2 style={{ fontSize: "20px", width: "100px", fontFamily: "papyrus", textShadow: "2px 2px" }}>{props.title}</h2>
            <img style={{ height: "100px", width: "100px" }} src={props.imgUrl}></img>
            <h2 style={{ fontSize: "15px", fontStyle: "italic"}}>{props.description}</h2>

            {isEditOn ?

                <UglyThingsEditForm title={props.title} description={props.description} imgUrl={props.imgUrl} id={props.id} toggleEdit={toggleEdit} />
                :
                <>
                </>

            }

            <button onClick={toggleEdit}> {isEditOn ? "Close" : "Edit"}</button>

            <button onClick={() => deleteItem(props.id)}>Delete</button>
        </div>
    );
};

export default UglyThingListItem;
import React, { useState } from "react";
import UglyThingsEditForm from "./UglyThingsEditForm";

function UglyThingListItem(props) {

    const [isEditOn, setIsEditForm] = useState(false);

    const toggleEdit = () => {
        setIsEditForm(prev => !prev)
    };

    return (
        <div id={props.id} style={{ border: "dotted", }}>
            <h2>{props.title}</h2>
            <h2>{props.description}</h2>
            <h2>{props.imgUrl}</h2>

            {isEditOn ?

                <UglyThingsEditForm title={props.title} description={props.description} imgUrl={props.imgUrl} id={props.id} toggleEdit={toggleEdit} />
                :
                <>
                </>

            }

            {/* <button onClick={// pass in anoynmous function that will call delete function here and pass id of item
                            //deleteItem(props.id)
                            }>Delete</button> */}
            <button>Delete</button>
            <button onClick={toggleEdit}> {isEditOn ? "Close" : "Edit"}</button>
        </div>
    );
};

export default UglyThingListItem;
import React, { useContext, useState } from "react";
import { UglyThingsContext } from "../UglyThingsContextProvider";
import axios from "axios";


function UglyThingsEditForm(props) {

    const { setUglyThingsNewList } = useContext(UglyThingsContext);

    const [uglyThingsListEditFormState, setUglyThingsListEditFormState] = useState({
        title: props.title,
        imgUrl: props.imgUrl,
        description: props.description
    });

    function updateThroughEdit() {
        axios.put(`https://api.vschool.io/ceciliastark/thing/${props.id}`, uglyThingsListEditFormState)
        .then((response) => {
            setUglyThingsNewList(data => 
                data.map(listitem => listitem._id === props.id ? response.data : listitem))
                
            })
    };

    function handleSubmitForEdits(e) {
        e.preventDefault();
        props.toggleEdit();
    };

    const handleChangeForEdits = (e) => {
        const { value, name } = e.target
        setUglyThingsListEditFormState(prevUglyThingState => ({ ...prevUglyThingState, [name]: value }))
    };

    return (

        <div>

            <form style={{ border: "solid" }} onSubmit={handleSubmitForEdits}>
                <input
                    name="title"
                    value={uglyThingsListEditFormState.title}
                    onChange={handleChangeForEdits}
                    placeholder="Title"
                />
                <input
                    name="description"
                    value={uglyThingsListEditFormState.description}
                    onChange={handleChangeForEdits}
                    placeholder="Description"
                />
                <input
                    name="imgUrl"
                    value={uglyThingsListEditFormState.imgUrl}
                    onChange={handleChangeForEdits}
                    placeholder="URL"
                />
                <button id={props.id} onClick={updateThroughEdit} >Submit</button>
            </form>

        </div>

    );
};

export default UglyThingsEditForm;
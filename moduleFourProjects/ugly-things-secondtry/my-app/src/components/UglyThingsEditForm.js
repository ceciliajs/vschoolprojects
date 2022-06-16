import React, { useContext, useState } from "react";
import { UglyThingsContext } from "../UglyThingsContextProvider";


function UglyThingsEditForm(props) {

    const { setUglyThingsNewList } = useContext(UglyThingsContext);

    const [uglyThingsListEditFormState, setUglyThingsListEditFormState] = useState({
        title: props.title,
        description: props.description,
        imgUrl: props.imgUrl,
        id: props.id
    });

    const handleSubmitForEdits = (e) => {
        e.preventDefault();

        const newItem = {
            title: uglyThingsListEditFormState.title,
            description: uglyThingsListEditFormState.description,
            imgUrl: uglyThingsListEditFormState.imgUrl,
            id: uglyThingsListEditFormState.id
        };

        setUglyThingsNewList(prevList => {
            const newList = prevList.map(listitem => {
                if (listitem.id === uglyThingsListEditFormState.id) {
                    return newItem
                } else {
                    return listitem
                }
            })
            return newList
        });

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
                <button>Submit</button>
            </form>

        </div>

    );
};

export default UglyThingsEditForm;
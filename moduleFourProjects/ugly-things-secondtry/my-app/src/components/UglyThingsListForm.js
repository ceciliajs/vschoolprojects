import React, { useContext } from "react"
import { UglyThingsContext } from "../UglyThingsContextProvider.js"
import UglyThingListItem from "./UglyThingListItem.js"


function UglyThingsListForm() {

    const { uglyThingsListItem, handleChange, handleSubmit, uglyThingsNewList } = useContext(UglyThingsContext);

    const list = uglyThingsNewList.map((uglyitem, index) =>
        <UglyThingListItem key={index} title={uglyitem.title} description={uglyitem.description} imgUrl={uglyitem.imgUrl} id={uglyitem._id} />
    );

    return (

        <div>
            <form style={{
                border: "solid",
                padding: "10px"
            }} onSubmit={handleSubmit}>
                <input
                    name="title"
                    value={uglyThingsListItem.title}
                    onChange={handleChange}
                    placeholder="Title"
                />
                <input
                    name="imgUrl"
                    value={uglyThingsListItem.imgUrl}
                    onChange={handleChange}
                    placeholder="URL"
                />
                <input
                    name="description"
                    value={uglyThingsListItem.description}
                    onChange={handleChange}
                    placeholder="Description"
                />
                <button>
                    Submit
                </button>
            </form>

            {list}

        </div>

    );
};

export default UglyThingsListForm;
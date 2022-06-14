import React, { useContext, useState } from "react"
import { UglyThingsContext } from "../UglyThingsContextProvider.js"
import UglyThingListItem from "./UglyThingListItem.js"


function UglyThingsEditForm(props) {

    const { uglyThingsListEditFormState, handleSubmitForEdits, handleChangeForEdits, handleSubmit, handleChange, uglyThingsNewListItem, uglyThingsList, isEditOn, toggleEdit  } = useContext(UglyThingsContext)


    const list = uglyThingsNewListItem.map((uglyitem, index) =>  <UglyThingListItem key={index} title={uglyitem.title} description={uglyitem.description} imgUrl={uglyitem.imgUrl}   /> )
    console.log(list)
    return (

        <div>

            {
                isEditOn ?

                    <form style={{ display: "flex", border: "solid", justifyContent: "space-between" }} onSubmit={handleSubmit}>
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
                        <button>
                            Submit
                        </button>
                        <h6>*in edit mode*</h6>
                        <button onClick={toggleEdit}> {isEditOn ? "Close" : "Edit"}

                        </button>
                    </form>
                    :
                    <>
                        

                        
                    </>

            }
                        <div style={{ display: "flex", borderStyle: "dotted", justifyContent: "space-between" }} className="list-div">
                            {list}
                        
                        </div>


        </div>

    )
}

export default UglyThingsEditForm
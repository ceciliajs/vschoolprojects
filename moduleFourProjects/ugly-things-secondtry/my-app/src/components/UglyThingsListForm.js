import React, { useContext } from "react"
import {UglyThingsContext} from "../UglyThingsContextProvider.js"


function UglyThingsListForm(props) {
    
    const {uglyThingsList, handleChange, handleSubmit} = useContext(UglyThingsContext)

    return (
            
        <div>
            <form style={{
                        border: "solid",
                        padding: "10px"
                    }} onSubmit={handleSubmit}>
                        <input
                            name="title"
                            value={uglyThingsList.title}
                            onChange={handleChange}
                            placeholder="Title"
                        />
                        <input
                            name="description"
                            value={uglyThingsList.description}
                            onChange={handleChange}
                            placeholder="Description"
                        />
                        <input
                            name="imgUrl"
                            value={uglyThingsList.imgUrl}
                            onChange={handleChange}
                            placeholder="URL"
                        />
                        <button>
                            Submit
                        </button>
                    </form>
                 

        </div>
            
    )
}

export default UglyThingsListForm
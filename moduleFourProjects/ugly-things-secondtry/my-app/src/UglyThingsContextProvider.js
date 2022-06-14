import React, { useState } from "react"
const UglyThingsContext = React.createContext()


function UglyThingsContextProvider(props) {

    const [uglyThingsList, setUglyThingsList] = useState([{
        title: "",
        description: "",
        imgUrl: ""
    }])

    const [uglyThingsNewListItem, setUglyThingsNewListItem ] = useState([])

    const [uglyThingsListEditFormState, setUglyThingsListEditFormState] = useState([{
        title: "",
        description: "",
        imgUrl: ""
    }])

    const [isEditOn, setIsEditForm] = useState(false)

    const [currentEditThing, setCurrentEditThing] = useState({})
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setUglyThingsNewListItem(prev => ([...prev, uglyThingsList]))
        console.log("This is ugly things new item input", uglyThingsNewListItem)
        console.log("this is new ugly things list", uglyThingsList)
        /// add new item to uglyThingsList using axios put method and [newItem, ...uglyThingsList]
        setUglyThingsList({
            title: "",
            description: "",
            imgUrl: ""
        })

    }

    const handleChange = (e) => {
        const { value, name } = e.target
        setUglyThingsList(prevUglyThingState => ({ ...prevUglyThingState, [name]: value }))

    }

    const handleSubmitForEdits = (e) => {
        //e.preventDefault()
        setUglyThingsNewListItem(prev => ([...prev, uglyThingsList]))

        console.log("this is edit form state",uglyThingsListEditFormState)
    }

    const handleChangeForEdits = (e) => {
        const { value, name } = e.target
        setUglyThingsListEditFormState(prevUglyThingState => ({ ...prevUglyThingState, [name]: value }))
        console.log("this is edit form state user value", uglyThingsListEditFormState)
    }

    

    const toggleEdit = () => {
        setIsEditForm(prev => !prev)
    }

    return (

        <UglyThingsContext.Provider value={{
            uglyThingsList,
            uglyThingsListEditFormState,
            uglyThingsNewListItem,
            isEditOn,
            handleChange,
            handleSubmit,
            handleSubmitForEdits,
            handleChangeForEdits,
            toggleEdit
        }}>
            {props.children}
        </UglyThingsContext.Provider>
    )
}

export { UglyThingsContextProvider, UglyThingsContext }

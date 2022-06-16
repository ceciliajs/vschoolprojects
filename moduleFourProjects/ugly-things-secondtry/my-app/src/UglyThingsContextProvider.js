import React, { useState } from "react"
const UglyThingsContext = React.createContext()

function UglyThingsContextProvider(props) {

    // this state controls the UglyThingsListForm for adding a new item
    const [uglyThingsListItem, setUglyThingsListItem] = useState({
        title: "",
        description: "",
        imgUrl: "",
        id: ""
    });

    //this state controls list
    const [uglyThingsNewList, setUglyThingsNewList] = useState([
        {
            title: "test 1",
            description: "desc 1",
            imgUrl: "test",
            id: "1"
        },
        {
            title: "test 2",
            description: "desc 2",
            imgUrl: "test",
            id: "2"
        }]);

    //this state controls the toggle
    const [isEditOn, setIsEditForm] = useState(false);

    // add a new item
    const handleSubmit = (e) => {
        e.preventDefault()
        setUglyThingsNewList(prev => ([...prev, uglyThingsListItem]))
        /// add new item to uglyThingsListItem using axios put method and [newItem, ...uglyThingsListItem]
        setUglyThingsListItem({
            title: "",
            description: "",
            imgUrl: "",
            id: ""
        })

    };

    // delete function
    const deleteItem = (id) => {
        // call setUglyThingsNewList
        // upate the state using the filter method 
        // if the id !== currentItem.id
    };

    // controls UglyThingsListForm (for adding a new item)
    const handleChange = (e) => {
        const { value, name } = e.target
        setUglyThingsListItem(prevUglyThingState => ({ ...prevUglyThingState, [name]: value }))

    };

    const toggleEdit = () => {
        setIsEditForm(prev => !prev)
    };

    return (

        <UglyThingsContext.Provider value={{
            uglyThingsListItem,
            uglyThingsNewList,
            isEditOn,
            handleChange,
            handleSubmit,
            toggleEdit,
            setUglyThingsNewList
        }}>
            {props.children}

        </UglyThingsContext.Provider>
    );
};

export { UglyThingsContextProvider, UglyThingsContext }

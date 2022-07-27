import React, { useEffect, useState } from "react"
import axios from "axios"
const UglyThingsContext = React.createContext();

function UglyThingsContextProvider(props) {

    //managing side effects
    useEffect(() => {
        grabData()
    }, []);

    function grabData() {
        axios.get(`https://api.vschool.io/ceciliastark/thing`)
            .then(response => {
                setUglyThingsNewList(response.data)
            })
    };

    // this state controls the UglyThingsListForm for adding a new item
    const [uglyThingsListItem, setUglyThingsListItem] = useState({
        title: "",
        imgUrl: "",
        description: ""
    });

    //this state controls list
    const [uglyThingsNewList, setUglyThingsNewList] = useState([]);

    //this state controls the toggle
    const [isEditOn, setIsEditForm] = useState(false);

    // add a new item //context not needed
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://api.vschool.io/ceciliastark/thing", uglyThingsListItem)
            .then(() => {
                setUglyThingsNewList(prev => ([...prev, uglyThingsListItem]))
                grabData()
            })
            .catch(err => console.log(err))

        setUglyThingsListItem({
            title: "",
            imgUrl: "",
            description: ""
        })
    };

    function deleteItem(id) {
        axios.delete(`https://api.vschool.io/ceciliastark/thing/${id}`)
            .then(() => setUglyThingsNewList(prevThing => {
                return prevThing.filter(currentItem => currentItem._id !== id)
            }))
    };

    // controls UglyThingsListForm (for adding a new item)  //context not needed
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
            setUglyThingsNewList,
            deleteItem
        }}>
            {props.children}

        </UglyThingsContext.Provider>
    );
};

export { UglyThingsContextProvider, UglyThingsContext }

import React, { useState } from "react"

function NameBadge() {

// getting info from the user
    const handleChange = (event) => {
        setBadgeinfo({ ...badgeInfo, [event.target.name]: event.target.value });

    };

    //add a new badge to the list

    const addNewBadge = (badgeInfo) => {
        setBadges([...badges, badgeInfo])
    }

// submit the form and reset the form

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewBadge(badgeInfo)
        console.log(badgeInfo)
        setBadgeinfo({
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favFood: "",
            description: "",
        })

        setBadges([...badges, badgeInfo])


    }


// setting the state of the original badge

    const [badgeInfo, setBadgeinfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: "",
        favFood: "",
        description: "",
    })

    // finished badge
    const [badges, setBadges] = useState([])

/// making list of badges
    const badgesList = badges.map((item, index) =>
        <ul>
            <li key={index}>
                <h1>Badge</h1>
                <div className="badges">
                    <h2>First Name: {item.firstName}</h2>
                    <h2>Last Name: {item.lastName}</h2>
                    <h2>Email: {item.email}</h2>
                    <h2>Place of Birth: {item.placeOfBirth}</h2>
                    <h2>Phone: {item.phone}</h2>
                    <h2> Favorite Food: {item.favFood}</h2>
                    <h2 id="text">{item.description}</h2>
                </div>
            </li>
        </ul>
    )

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>

                <input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    minLength="3"
                    value={badgeInfo.firstName}
                    onChange={handleChange} />
                <br />

                <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    minLength="3"
                    value={badgeInfo.lastName}
                    onChange={handleChange} />
                <br />

                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    minLength="3"
                    value={badgeInfo.email}
                    onChange={handleChange} />
                <br />

                <input
                    name="placeOfBirth"
                    type="text"
                    placeholder="Birth Place"
                    minLength="3"
                    value={badgeInfo.placeOfBirth}
                    onChange={handleChange} />
                <br />

                <input
                    name="phone"
                    type="number"
                    placeholder="Phone Number"
                    minLength="3"
                    value={badgeInfo.phone}
                    onChange={handleChange} />
                <br />

                <input
                    name="favFood"
                    type="text"
                    placeholder="Favorite Food"
                    minLength="3"
                    value={badgeInfo.favFood}
                    onChange={handleChange} />
                <br />

                <textarea
                    type="text"
                    placeholder="Tell me something about yourself"
                    value={badgeInfo.description}
                    name="description"
                    minLength="3"
                    onChange={handleChange}
                />


            </form>
            <button onClick={handleSubmit}>Submit</button>

            {badgesList}
        </div>
    )



}



export default NameBadge
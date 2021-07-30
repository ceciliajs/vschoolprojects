import React, { Component } from "react"

class NameBadge extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favFood: "",
            description: "",
            badges: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(event) {
        console.log("string")
        event.preventDefault();
        const newBadges = [...this.state.badges]
        const newBadge = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            placeOfBirth: this.state.placeOfBirth,
            phone: this.state.phone,
            favFood: this.state.favFood,
            description: this.state.description
        }
        newBadges.push(newBadge)

        this.setState({ badges: newBadges })
        console.log(newBadges)

    }

    handleChange(event) {
        console.log(event.target)
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    render() {

        const badgesList = this.state.badges.map((item, index) =>
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
                <form className="form" onSubmit={this.handleSubmit}>

                    <input
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        minLength="3"
                        value={this.state.firstName}
                        onChange={this.handleChange} />
                    <br />

                    <input
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        minLength="3"
                        value={this.state.lastName}
                        onChange={this.handleChange} />
                    <br />

                    <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        minLength="3"
                        value={this.state.email}
                        onChange={this.handleChange} />
                    <br />

                    <input
                        name="placeOfBirth"
                        type="text"
                        placeholder="Birth Place"
                        minLength="3"
                        value={this.state.placeOfBirth}
                        onChange={this.handleChange} />
                    <br />

                    <input
                        name="phone"
                        type="number"
                        placeholder="Phone Number"
                        minLength="3"
                        value={this.state.phone}
                        onChange={this.handleChange} />
                    <br />

                    <input
                        name="favFood"
                        type="text"
                        placeholder="Favorite Food"
                        minLength="3"
                        value={this.state.favFood}
                        onChange={this.handleChange} />
                    <br />

                    <textarea
                        type="text"
                        placeholder="Tell me something about yourself"
                        value={this.state.description}
                        name="description"
                        minLength="3"
                        onChange={this.handleChange}
                    />


                </form>
                <button onClick={this.handleSubmit}>Submit</button>
                {badgesList}
            </div>
        )
    }
}

export default NameBadge
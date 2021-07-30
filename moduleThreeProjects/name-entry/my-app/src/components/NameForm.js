import React, { Component } from "react"

class NameForm extends Component {
    constructor() {
        super()
        this.state = {
            names: ["Taylor Swift", "Cardi B"],
            newName: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        console.log(event.target)
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleClick(event) {
        event.preventDefault();
       const newNamesArr = [...this.state.names]
       newNamesArr.push(this.state.newName)

       this.setState({ names: newNamesArr })



    }


    render() {

        const names = this.state.names.map((item, index) =>
            <li key={index}>{item}</li>
        )

        return (
            <div >
                <form>
                    <input
                        type="text"
                        placeholder="Name Here"
                        name="newName"
                        value={this.state.newName}
                        onChange={this.handleChange}

                    />
                    <h1>{this.state.newName}</h1>
                </form>

                <button onClick={this.handleClick}>Add to List</button>
                <ol>
                {names}
                    
                </ol>
            </div>
        )
    }
}

export default NameForm
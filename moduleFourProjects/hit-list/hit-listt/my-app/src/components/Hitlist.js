import React, { Component } from "react"
import axios from 'axios';

class Hitlist extends Component {
    constructor() {
        super()
        this.state = {
            hitListCards: []

        }
    }
    
    componentDidMount() {
        axios.get(`https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json`)
            .then(response => {
                this.setState({ hitListCards: response.data })
            })
    }


    render() {
        const targets = this.state.hitListCards.map((item,index)=>
                <div key={index}>
                    <img alt="targets" src={item.image}></img>
                    {item.name}
                </div>
            )

        return (
            <div>
                {targets}
            </div>
        )
    }

}
export default Hitlist
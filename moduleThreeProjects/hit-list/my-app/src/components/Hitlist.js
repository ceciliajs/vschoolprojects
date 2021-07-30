import React, { Component } from "react"
import { render } from "react-dom"

class Hitlist extends Component {
    constructor() {
        super()
        this.state = {
            hitListCards: []

        }
    }


    componentDidMount() {
        fetch(`https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json`)
            .then(response => response.json())
            .then(response => {
                const { targets } = response.data
                this.setState({ hitListCards: targets })
            })
    }


    render() {
        const targets = this.state.hitListCards.map((item,index)=>
                <div>
                   <div>{item.img}</div>
                   <div>{item.name}</div>
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
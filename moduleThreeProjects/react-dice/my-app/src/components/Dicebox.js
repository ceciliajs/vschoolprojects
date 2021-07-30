import React from 'react'

class Dicebox extends React.Component {
    constructor() {
        super()
        this.state = {
            diceNumbers: [
                { num: 1 },
                { num: 2 },
                { num: 3 },
                { num: 4 },
                { num: 5 }
            ]
        }
        this.changeNumber = this.changeNumber.bind(this)
    }

    changeNumber() {

        let currentDiceArray = [...this.state.diceNumbers]
        console.log(currentDiceArray)
        let newDiceArr = currentDiceArray.map(item => {
            item.num = Math.floor(Math.random() * 6) + 1
            return item.num

        })

        this.setState(prevState => ({
            colors: newDiceArr
        }))

    }

    render() {

        const diceGroup = this.state.diceNumbers.map((item, index) =>
            <div className="dice">{item.num}{index.num}</div>
        )

        return (
            <div>

                {diceGroup}
                <button onClick={this.changeNumber}>Roll Dice</button>
            </div>
        );
    };




}

export default Dicebox

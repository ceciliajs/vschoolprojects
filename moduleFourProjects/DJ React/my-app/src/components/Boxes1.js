import React, { useState } from "react";
import Square from "./Square1.js";

class Boxes extends React.Component {

    constructor() {
        super()
        this.state = {
            colors: ["black", "black", "white", "black"]
        }
        this.changeColor = this.changeColor.bind(this)
        this.changePurple = this.changePurple.bind(this)
        this.changeLeft = this.changeLeft.bind(this)
        this.changeRight = this.changeRight.bind(this)
        this.changeOne = this.changeOne.bind(this)
        this.changeTwo = this.changeTwo.bind(this)
        this.changeThree = this.changeThree.bind(this)
        this.changeFour = this.changeFour.bind(this)
    };

    changeColor() {
        // this.setState(prevState=> {
        //     if(prevState.colors[0] === "white"){
        //         return {
        //             colors: [...prevState.colors, "black", "black" ]
        //         }
        //     } else if (prevState.colors[0] === "black"){
        //         return {
        //             colors: [...prevState.colors, "white", "white" ]
        //         }
        //     }
        // })


        let currentColorsArray = this.state.colors
        let newColorsArr = currentColorsArray.map(colorString => {
            if (colorString === 'white') {
                return colorString = 'black'
            } else if (colorString === 'black'){
                return colorString = 'white'
            }
            
        })

        this.setState({colors: newColorsArr})

    };

    changePurple(){
        let currentColorsArray = [...this.state.colors]
        
        currentColorsArray[0] = "purple"
        currentColorsArray[1] = "purple"
        

        this.setState({colors: currentColorsArray})
    };

    changeLeft(){
        let currentColorsArray = [...this.state.colors]
        
        currentColorsArray[2] = "blue"
        

        this.setState({colors: currentColorsArray})
    };

    changeRight(){
        let currentColorsArray = [...this.state.colors]
        
        currentColorsArray[3] = "blue"
        

        this.setState({colors: currentColorsArray})
    };

    changeOne(){
        let currentColorsArray = [...this.state.colors]
        currentColorsArray[0] = "green"
        console.log(currentColorsArray)
        

        this.setState({colors: currentColorsArray})
    };

    changeTwo(){
        let currentColorsArray = [...this.state.colors]
        
        currentColorsArray[1] = "yellow"
        

        this.setState({colors: currentColorsArray})
    };

    changeThree(){
        let currentColorsArray = [...this.state.colors]
        
        currentColorsArray[2] = "red"
        

        this.setState({colors: currentColorsArray})
    };

    changeFour(){
            let currentColorsArray = [...this.state.colors]
            
            currentColorsArray[3] = "orange"
            

            this.setState({colors: currentColorsArray})
        };

    render() {

        const squares = this.state.colors.map((item, index) =>
            <Square color={item} key={index} />

        )

        return (
            <div className="boxes">
                {squares}
                <button onClick={this.changeColor}>Small DJ</button>
                <button onClick={this.changePurple}>Party DJ</button>
                <button onClick={this.changeLeft}>Professional DJ - Left</button>
                <button onClick={this.changeRight}>Professional DJ - Right</button>
                <button onClick={this.changeOne}>1</button>
                <button onClick={this.changeTwo}>2</button>
                <button onClick={this.changeThree}>3</button>
                <button onClick={this.changeFour}>4</button>
            </div>
        );
    };

};

export default Boxes;
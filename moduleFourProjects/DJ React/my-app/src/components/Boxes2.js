import React, { useState } from "react";
import Square from "./Square2.js";

function Boxes() {

    //const initialValue = ["black", "black", "white", "black"]

    const [colors, setColors] = useState(["black", "black", "white", "black"])

    const updateColorsArr = (index, colorValue) => {
        // take the current or prevstate and update the new array with the change 
        //every you call you take a copy of the current array
        setColors((previousColorsArr) => {
            const newColors = [...previousColorsArr];
            newColors[index] = colorValue
            return newColors;
        })
    }

    function changeToPurple() {
        updateColorsArr(0, 'purple')
        updateColorsArr(1, 'purple')
    }
    console.log(colors)

    function changeColors() {
        let newColorsArr = colors.map(colorString => {
            if (colorString === 'white') {
                return colorString = 'black'
            } else if (colorString === 'black') {
                return colorString = 'white'
            } else { 
                return colorString = 'black' 
            }
        })

        setColors(newColorsArr)

    }

    function changeLeft() {
        updateColorsArr(2, 'blue')
        
    }
    
    function changeRight() {
        updateColorsArr(3, 'blue')
        
    }

    function changeOne() {
        updateColorsArr(0, 'green')
        
    }

    function changeTwo() {
        updateColorsArr(1, 'yellow')
        
    }

    function changeThree() {
        updateColorsArr(2, 'red')
        
    }

    function changeFour() {
        updateColorsArr(3, 'orange')
        
    }

    const squares = colors.map((item, index) =>
        <Square color={item} key={index} />

    )



    return (
        <div className="boxes">
            {squares}
            <button onClick={changeColors}>Small DJ</button>
            <button onClick={changeToPurple}>Party DJ</button>
            <button onClick={changeLeft}>Professional DJ - Left</button>
            <button onClick={changeRight}>Professional DJ - Right</button>
            <button onClick={changeOne}>1</button>
            <button onClick={changeTwo}>2</button>
            <button onClick={changeThree}>3</button>
            <button onClick={changeFour}>4</button>
        </div>
    );

}

export default Boxes;
import React from 'react'
import {ThemeContextConsumer} from "../themeContext"

function Button(props){
    return (
        <ThemeContextConsumer>
        {context => (
            <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Toggle Theme</button>

    )}
    </ThemeContextConsumer>
    )
}

export default Button
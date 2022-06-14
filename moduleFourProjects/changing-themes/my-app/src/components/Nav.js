import React from 'react'
import {ThemeContextConsumer} from "../themeContext"

function Nav(props) {
  return (
    <ThemeContextConsumer>
      {context => (
    <nav className={`${context.theme}-theme`}>
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
    </nav>

      )}
    </ThemeContextConsumer>
  );
}


export default Nav
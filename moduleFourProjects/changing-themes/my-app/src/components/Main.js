import React, {Component} from "react"
import {ThemeContextConsumer} from "../themeContext"
import Button from "./Button.js"


function Main(props) {
  return (
    <ThemeContextConsumer>
      {context => (
    <div>
      <header className={`${context.theme}-theme`}>{context.theme === "light" ? "Lighter" : "Darker"} Theme</header>
<p className={`${context.theme}-theme`}>Click the button below to change the themes!!!</p>
<Button />
    </div>

      )}
    </ThemeContextConsumer>
  );
}


export default Main
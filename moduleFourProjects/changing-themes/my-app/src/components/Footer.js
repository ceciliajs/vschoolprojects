import React, {Component} from "react"
import {ThemeContextConsumer} from "../themeContext"

function Footer(props) {
  return (
    <ThemeContextConsumer>
      {context => (
    <div>
    <footer className={`${context.theme}-theme`} >Feet here!</footer>
    </div>

      )}
    </ThemeContextConsumer>
  );
}


export default Footer
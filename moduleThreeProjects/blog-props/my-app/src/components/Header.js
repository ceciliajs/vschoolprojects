import React from "react"
import NavBar from "./NavBar"

function Header(){
    return (
        <div id="header">
            <h1 id="title">Clean Blog</h1>
            <h2 id="subTitle">A blog Theme by Start Bootstrap</h2>
            <NavBar />
        </div>
    )
}

export default Header
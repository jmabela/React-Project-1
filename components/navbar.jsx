import React from "react"
import ReactDOM from "react-dom/client"

export default function Navbar() {
    return (
        <nav>
            <img src='../images/reactjs-icon.svg' className="nav--icon"></img>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>

        </nav>
    )
}
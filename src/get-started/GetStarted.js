import "./GetStarted.css"
import React from 'react'
import rectangle from "./images/Rectangle.png"
import icon_nosleep from "./images/icon-nosleep.png"
import woman_sitting from "./images/sitting.png"

function GetStarted(props) {
    return (
        <div className="get-started">
            <img src={rectangle} className="navigation-btn" alt=""/>
            <div className="no-sleep-logo">
                <h1>NoSleep</h1>
                <img className="nosleep-logo-img" src={icon_nosleep} alt="Moon with a cloud in front"/>
            </div>
            <h2>Hi, Welcome</h2>
            <h3>to NoSleep</h3>
            <p>Get started with an app where you<br/>can find some peace</p>
            <img className="sitting-img" src={woman_sitting} alt="Woman meditating"/>
            <button className="get-started-btn" onClick={props.nextPage}>Get Started</button>
        </div>
    )
}

export default GetStarted
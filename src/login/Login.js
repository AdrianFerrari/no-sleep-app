import "./Login.css"
import React from 'react'
import icon_nosleep from "./images/icon-nosleep.png"
import sitting from "./images/person-sitting.png"
import nav_rectangle from "./images/Rectangle.png"

function Login(props) {
    return (
        <div className="login">
            <div className="no-sleep-logo ">
                <h1>NoSleep</h1>
                <img className="nosleep-logo" src={icon_nosleep} alt="Moon with a cloud in front"/>
            </div>
            <h2>Want to Join Us?</h2>
            <img className="img-sitting" src={sitting} alt="person sitting"/>
            <p>2160 person meditating right now!</p>
            <button className="google-btn" onClick={props.nextPage}>Join with google</button>
            <button className="mail-btn" onClick={props.nextPage}>Join with mail</button>
            <img src={nav_rectangle} className="navigation-btn" alt=""/>
        </div>
    )
}

export default Login
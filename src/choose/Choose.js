import "./Choose.css"
import rectangle from "./images/Rectangle.png"
import performance from "./images/performance.png"
import sleep from "./images/sleep.png"
import goals from "./images/goals.png"
import stress from "./images/stress.png"
import happiness from "./images/happiness.png"
import music from "./images/music.png"
import reduce from "./images/reduce.png"

function Choose(props) {
    return (
        <div className="choose">
            <img src={rectangle} className="navigation-btn" alt=""/>
            <div className="container-header">
                <h1>What you need<br/><span style={{color: "white", fontWeight: "700"}}>to improve</span></h1>
                <h2>Choose thing that you need to improve</h2>
            </div>
            <div className="container-options">
                <button className="choose-class" onClick={props.nextPage}><img src={performance} alt=""/></button>
                <button className="choose-class" onClick={props.nextPage}><img src={sleep} alt=""/></button>
                <button className="choose-class" onClick={props.nextPage}><img src={goals} alt=""/></button>
                <button className="choose-class" onClick={props.nextPage}><img src={stress} alt=""/></button>
                <button className="choose-class" onClick={props.nextPage}><img src={stress} alt=""/></button>
                <button className="choose-class" onClick={props.nextPage}><img src={happiness} alt=""/></button>
                <button className="choose-class" onClick={props.nextPage}><img src={music} alt=""/></button>
                <button className="choose-class" onClick={props.nextPage}><img src={reduce} alt=""/></button>
            </div>
        </div>
    )
}

export default Choose
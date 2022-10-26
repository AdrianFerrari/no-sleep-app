import "./Time.css"

function Time(props) {
    function jumpToLogin() {
        props.setIndex(0)
    }
    return (
        <div className="time">
            <h1><span>What time you need </span>to get Notified?</h1>
            <div className="timer-container">
                <p style={{color:"#555F73", opacity:.5}}>07 : 59</p>
                <hr/>
                <p>08 : 00</p>
                <hr/>
                <p style={{color:"#555F73", opacity:.5}}>08 : 01</p>
            </div>
            <h1><span>Which day would you like </span>to Meditate?</h1>
            <div className="day-container">
                <input id="day1" type="checkbox" value="monday"/>
                <label htmlFor="day1">M</label>
                <input id="day2" type="checkbox" value="tuesday"/>
                <label htmlFor="day2">T</label>
                <input id="day3" type="checkbox" value="wednesday"/>
                <label htmlFor="day3">W</label>
                <input id="day4" type="checkbox" value="thursday"/>
                <label htmlFor="day4">T</label>
                <input id="day5" type="checkbox" value="friday"/>
                <label htmlFor="day5">F</label>
                <input id="day6" type="checkbox" value="saturday"/>
                <label htmlFor="day6">S</label>
                <input id="day7" type="checkbox" value="sunday"/>
                <label htmlFor="day7">SU</label>
            </div>
            <button className="save-btn" onClick={jumpToLogin}>Save</button>
            <button className="skip-btn" onClick={jumpToLogin}>Skip</button>
        </div>
    )
}

export default Time
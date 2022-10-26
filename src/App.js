import './App.css';
import Login from "./login/Login.js"
import GetStarted from "./get-started/GetStarted.js"
import Choose from "./choose/Choose.js"
import Time from "./time/Time.js"
import React, { useState } from 'react'

function App() {
  const [index, setIndex] = useState(0)
  const [pages, setPages] = useState(() => {
    return (
      [
      <Login nextPage={nextPage}/>,
      <GetStarted nextPage={nextPage}/>,
      <Choose nextPage={nextPage}/>,
      <Time setIndex={setIndex}/>
      ]
    )
  })

  function nextPage() {
    setIndex(prev => prev + 1)
  }

  return (
    <div className="App">
      {pages[index]}
    </div>
  );
}

export default App;

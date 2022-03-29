import React, {useState, useRef} from "react";
import './index.css';


function App() {
  
    const [timer, setTime] = useState(3595);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false); 
    const increment = useRef(null);
  
  const handleStartButton =  () => {
    setIsActive(true)
    setIsPaused(true)
    increment.current = setInterval(()=>{
      setTime((timer)=> timer +1)
    }, 1000)
  };

  const handleStopButton =  () => {
   clearInterval(increment.current)
   setIsPaused(false)
  };

  const handleResetButton = () => {
    clearInterval(increment.current)
    setIsActive(false)
    setIsPaused(false)
    setTime(0)  
  };

  const handleResumeButton = () => {
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTime((timer) => timer + 1)
    }, 1000) 
  };

  const formatTime = () => {
    const getSeconds = `0${(timer%60)}`.slice(-2);
    const minutes = `${Math.floor(timer/60)}`.slice(-2);
    const getMinutes = `0${(minutes%60)}`.slice(-2);
    const getHours = `0${Math.floor(timer/3600)}`.slice(-2);
  
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  }
  
  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(timer)}</p>
        <div className="buttons">
            {
                !isActive && !isPaused? 
                <button onClick = {handleStartButton}>Start</button>
                : (
                    isPaused? < button onClick={handleStopButton}>Stop</button> :
                    <button onClick={handleResumeButton}>Resume</button>
                )
            }
            <button onClick={handleResetButton} disabled={!isActive}>Reset</button>

            </div>
        </div>
      </div>
    </div>
  );
}

export default App;

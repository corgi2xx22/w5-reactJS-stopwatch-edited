import React from "react";
import { formatTime } from "./formatTime";
import { useTimer } from "./useTimer";

const Timer = () => {
    const {timer, isActive, isPaused, handleStartButton, handleResumeButton, handleResetButton, handleStopButton } = useTimer(0)

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




export default Timer;

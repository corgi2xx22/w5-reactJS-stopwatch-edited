import {useState, useRef} from "react";

const useTimer = (initialState = 0) => {
    const [timer,setTimer] = useState(initialState)
    const [isActive,setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const countRef= useRef(null)

const handleStartButton = () => {
    setIsActive(true)
    setIsPaused(true)
    countRef.current = setInterval(() => {
        setTimer((timer)=> timer + 1)
    }, 1000)
}

const handleStopButton = () => {
   clearInterval(countRef.current)
   setIsPaused(false)
}

const handleResumeButton = () => {
    setIsPaused(true)
    countRef.current = setInterval(() => {
        setTimer((timer)=> timer + 1)
    }, 1000)
}

const handleResetButton = () => {
    clearInterval(countRef.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
}

   return { timer, isActive, isPaused, handleStartButton, handleStopButton, handleResumeButton, handleResetButton} 
}

export default useTimer;
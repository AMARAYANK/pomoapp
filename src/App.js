import React, {useState, useRef} from 'react';
import './App.css';

function padTime(time){
  return time.toString().padStart(2,'0')
}

export default function App() {
  const [timeLeft, setTimeLeft] = useState(25*60)
  const [title, setTitle] = useState('Let the countdown begin!!')
  const [isRunning, setIsRunning] = useState(false)
  const [isReset, setIsReset] = useState(false)

  const clearTimerId = useRef(null)
  
  const minutes = padTime(Math.floor(timeLeft/60))
  const seconds = padTime(timeLeft - minutes * 60)
  
  function startTimer(){
    setIsRunning(true)
    setIsReset(true)
    if (clearTimerId.current !== null) return 

    setTitle(`You're doing great!`)
    clearTimerId.current = setInterval(() => {
       setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1
        resetTimer()
        return 0
        })
    },1000)
  } 
 
  function resetTimer(){
    setIsRunning(false)
    setIsReset(false)
    setTitle('Let the countdown begin!!')
    clearInterval(clearTimerId.current) // stopping the timer
    clearTimerId.current = null
    setTimeLeft(25*60)
  }
 
  function stopTimer(){
    setIsRunning(false)
    setIsReset(true)
    if(clearTimerId.current === null) return 
    clearInterval(clearTimerId.current)
    setTitle('keep it up!')
    clearTimerId.current = null
  }

  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
       {!isRunning ? <button onClick={startTimer}>Start</button> : null}
        {isRunning ? <button onClick={stopTimer}>Stop</button> : null}
        {isReset ? <button onClick={resetTimer}>Reset</button> : null}
      </div>
    </div>
  );
}

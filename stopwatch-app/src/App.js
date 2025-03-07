import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.body.className = darkMode ? "dark" : "light"; // Apply to entire page
  }, [darkMode]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = (time % 1000) / 10;
    
    if (hours > 0) {
      return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
    } else {
      return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
    }
  };

  return (
    <div className="container">
      <h1>Stopwatch</h1>
      <div className="dial">
        <div className="timer-display">{formatTime(time)}</div>
      </div>
      <div className="buttons">
        <button className="start" onClick={() => setRunning(true)}>Start</button>
        <button className="stop" onClick={() => setRunning(false)}>Stop</button>
        <button className="reset" onClick={() => { setTime(0); setRunning(false); }}>Reset</button>
      </div>
      <button className="toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
      </button>
    </div>
  );
};

export default App;

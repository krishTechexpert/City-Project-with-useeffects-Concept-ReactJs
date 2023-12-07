import React, { useState, useEffect } from "react";
function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const timerId = setInterval(() => {
      console.log("progress bar");
      setRemainingTime((prevTimer) => prevTimer - 10);
    }, 10);
    return () => {
      console.log("stop the timer cleanup...");
      clearInterval(timerId);
    };
  }, []);
  return <progress value={remainingTime} max={timer}></progress>;
}
export default ProgressBar;

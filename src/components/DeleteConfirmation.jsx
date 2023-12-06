import React, { useEffect, useState } from "react";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);

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

  useEffect(() => {
    console.log("setTimeout");

    const timerId = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      console.log("cleanup timer");
      clearTimeout(timerId);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIMER}></progress>
    </div>
  );
}

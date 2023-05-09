import { useEffect, useState } from "react";

const Timer = ({ timer, setTimer, setRest }) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const setTime = () => {
    if (timer) {
        return;
    }

    if (minutes === 3) {
        setRest(false)
    }

    if (seconds >= 59) {
      setSeconds(0);
      setMinutes(minutes + 1);
    } else {
      setSeconds(seconds + 1);
    }
  };

  const handleToggle = () => {
    setTimer(!timer)
  }

  useEffect(() => {
    const interval = setInterval(setTime, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="flex justify-between w-1/2">
        <div className="timer">
          Rest for 3:00 minutes | {minutes}:{seconds < 10 ? "0" : null}
          {seconds}
        </div>
        <div onClick={handleToggle}>{timer ? 'Resume' : 'Pause'}</div>
    </div>
  );
};

export default Timer;

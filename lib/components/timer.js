import { useEffect, useState } from "react";

const Timer = ({ setRest }) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(false);

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
    <div className="flex justify-between my-3 mx-6 p-2 rounded-lg bg-neutral-700">
        <div className="timer">
          {minutes}:{seconds < 10 ? "0" : null}
          {seconds} <span className="text-neutral-400 ml-3 text-sm">Rest 3min.</span>
        </div>
        <div onClick={handleToggle}>{timer ? 'Resume' : 'Pause'}</div>
    </div>
  );
};

export default Timer;

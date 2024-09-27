import { useState, useEffect } from 'react';

export default function Time() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => {
      clearInterval(t);
    };
  }, []);

  return (
    <div>
      <p>Timer: {seconds} seconds</p>
    </div>
  );
}

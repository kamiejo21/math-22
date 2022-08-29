import React, {useEffect} from 'react';

function Timer({timeLeft, setTimeLeft}) {
  
  useEffect(() => {
    const timer = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000);
      console.log('Starting timer.');
    return () => {
      clearInterval(timer); //cleanup
      console.log('Cleaning up.');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ( 
    <div><strong>Time: </strong>{timeLeft}</div>
  )
}
export default Timer;
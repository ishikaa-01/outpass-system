import React, { useState, useEffect } from 'react';

function HomeText() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update time every second

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getGreeting = () => {
    const currentHour = currentTime.getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return 'Good morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  const getIndianTime = () => {
    return currentTime.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
    });
  };

  const getIndianDate = () => {
    return currentTime.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
    });
  };

  const getTimeOfDayClass = () => {
    const currentHour = currentTime.getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return 'morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      return 'afternoon';
    } else {
      return 'evening';
    }
  };

  return (
    <div>

<div className={`hometext ${getTimeOfDayClass()}`}>
      <div className="ht_content">
        <h1>{getGreeting()}, User!</h1>
        <p>{getIndianTime()}</p>
        <p>{getIndianDate()}</p>
      </div>
    </div>
    <div className='hc_bottom'>
    <br></br>
    </div>
    </div>
  );
}


export default HomeText;

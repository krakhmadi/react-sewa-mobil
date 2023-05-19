import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './useCountdown';
import Segment from './Segment';

const ShowCounter = ({ hours, minutes, seconds }) => {
    
  return (
    <Segment className="show-counter">
      <Segment 
        className="countdown-link d-flex gap-2" 
        rel="noopener noreferrer"
        >
        <DateTimeDisplay value={hours} />
        <p className='paragraph-form py-1'>:</p>
        <DateTimeDisplay value={minutes} />
        <p className='paragraph-form py-1'>:</p>
        <DateTimeDisplay value={seconds} />
      </Segment>
    </Segment>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [hours, minutes, seconds] = useCountdown(targetDate);
    return (
      <ShowCounter
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
};

export default CountdownTimer;

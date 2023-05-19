import React from 'react';
import Segment from './Segment';

const DateTimeDisplay = ({ value, type }) => {
  function makeMeTwoDigits(n){
    return (n < 10 ? "0" : "") + n;
  }
  return (
    <Segment className='countdown'>
      <p className='paragraph-form' style={{background:"red", color:"white", padding: "5px", borderRadius:"5px"}}>{makeMeTwoDigits(value)}</p>
      <span>{type}</span>
    </Segment>
  );
};

export default DateTimeDisplay;

import React from 'react';
import carImg from '../assets/carimg.jpg'; 
const ScheduleTestDrive = () => {
  return (
    <div>
      <h2>Schedule Test Drive:Schedule a test drive, contact the dealership directly, or use their online booking system. Provide your preferred date and time. </h2>
      <img
        src={carImg}
        alt="Car for test drive"
        style={{ height:'390px', width: '1000px', borderRadius: '10px' }}
      />
    </div>
  );
};

export default ScheduleTestDrive;

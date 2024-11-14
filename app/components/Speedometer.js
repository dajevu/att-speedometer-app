// components/Speedometer.js
"use client";

import dynamic from 'next/dynamic';

const ReactSpeedometer = dynamic(() => import('react-d3-speedometer'), { ssr: false });

const Speedometer = () => (
  <div style={{ width: '300px', height: '200px' }}>
    <ReactSpeedometer
      maxValue={100}
      value={70}
      needleColor="red"
      startColor="green"
      segments={10}
      endColor="blue"
      textColor="black"
    />
  </div>
);

export default Speedometer;

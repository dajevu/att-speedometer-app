// app/components/ClientOnlySpeedometer.js
"use client";

import dynamic from 'next/dynamic';

// Dynamically import ReactSpeedometer, disabling server-side rendering
const ReactSpeedometer = dynamic(() => import('react-d3-speedometer'), { ssr: false });

const ClientOnlySpeedometer = () => {
  return (
    <div style={{ width: '300px', height: '200px' }}>
<ReactSpeedometer
    value={777}
    currentValueText="Happiness Level"
    customSegmentLabels={[
      {
        text: "Very Bad",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "Bad",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "Ok",
        position: "INSIDE",
        color: "#555",
        fontSize: "19px",
      },
      {
        text: "Good",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "Very Good",
        position: "INSIDE",
        color: "#555",
      },
    ]}
  />
    </div>
  );
};

export default ClientOnlySpeedometer;

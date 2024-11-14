import { use } from 'react';
import ClientOnlySpeedometer from '../app/components/ClientOnlySpeedometer';

export default function Home() {
  return (
    <div>
      <h1>Speedometer Example</h1>
      <ClientOnlySpeedometer />
    </div>
  );
}

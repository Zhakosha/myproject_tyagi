import { useState } from 'react';
import trail from './images/trail.png';
import asf from './images/asf.jpeg';

export default function RunningSurfaceSelector({ onSurfaceSelected }) {
  const [selectedSurface, setSelectedSurface] = useState(null);

  const handleSurfaceClick = (surface) => {
    setSelectedSurface(surface);
    onSurfaceSelected(surface);
  };

  return (
    <div>
      <h2>Выберите поверхность, на которой вы бегаете:</h2>
      <div>
        <img
          src={trail}
          alt="Трейлраннинг"
          onClick={() => handleSurfaceClick('trail')}
          style={{ cursor: 'pointer' }}
        />
        <img
          src={asf}
          alt="Бег по асфальту"
          onClick={() => handleSurfaceClick('asphalt')}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
}


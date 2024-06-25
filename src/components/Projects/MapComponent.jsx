import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';
import Map from 'react-map-gl';
import CustomMarker from './CustomMarker';
import MapCard from './MapCard';

const positions = [
  { longitude: 5.74, latitude: 58.915 },
  { longitude: 5.69, latitude: 58.936 },
];

export default function MapComponent({ data }) {
  const [selectedMarkerId, setSelectedMarkerId] = useState(null);

  const handleSelectMarker = id => {
    setSelectedMarkerId(prevId => (prevId === id ? null : id));
  };

  const [viewport, setViewPort] = useState({
    latitude: 64.5,
    longitude: 14,
    zoom: 4.3,
  });

  return (
    <div className="w-full h-full">
      <Map
        mapboxAccessToken={import.meta.env.VITE_APP_TOKEN}
        initialViewState={{
          longitude: viewport.longitude,
          latitude: viewport.latitude,
          zoom: viewport.zoom,
        }}
        style={{ width: '100%', height: '100%', position: 'relative' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {data?.map(project => (
          <CustomMarker
            key={project.id}
            id={project.id}
            position={project.position}
            handleClick={handleSelectMarker}
            isSelected={selectedMarkerId === project.id}
          />
        ))}
        {selectedMarkerId && <MapCard data={data} id={selectedMarkerId} />}
      </Map>
    </div>
  );
}

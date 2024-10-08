import { Map } from 'react-map-gl';
import { useState } from 'react';
import { MAPBOX_APP_TOKEN } from '../../../constants';
export default function ProjectMap({ data }) {
  const [viewport, setViewPort] = useState({
    latitude: data?.position.latitude,
    longitude: data?.position.longitude,
    zoom: 18,
  });

  return (
    <div className="w-full h-full">
      <Map
        mapboxAccessToken={MAPBOX_APP_TOKEN}
        initialViewState={{ ...viewport }}
        style={{ width: '100%', height: '690px' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
}

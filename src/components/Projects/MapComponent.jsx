import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef, useState, useMemo } from 'react';
import Map from 'react-map-gl';
import CustomMarker from './CustomMarker';
import MapCard from './MapCard';
import useSupercluster from 'use-supercluster';

export default function MapComponent({ data }) {
  const [selectedMarkerId, setSelectedMarkerId] = useState(null);
  const [viewport, setViewPort] = useState({
    latitude: 64.5,
    longitude: 14,
    zoom: 4.3,
  });
  const mapRef = useRef(null);

  // Convert data into GEOJSON objects for cluster markers
  const points = useMemo(
    () =>
      data?.map(point => ({
        type: 'Feature',
        properties: {
          cluster: false,
          pointId: point.id,
          category: point.details.status,
        },
        geometry: {
          type: 'Point',
          coordinates: [
            parseFloat(point.position.longitude),
            parseFloat(point.position.latitude),
          ],
        },
      })),
    [data],
  );

  const bounds = mapRef.current
    ? mapRef.current.getMap().getBounds().toArray().flat()
    : [];

  const handleSelectMarker = id => {
    setSelectedMarkerId(prevId => (prevId === id ? null : id));
  };

  return (
    <div className="w-full h-full">
      <Map
        mapboxAccessToken={import.meta.env.VITE_APP_TOKEN}
        ref={mapRef}
        initialViewState={{
          longitude: viewport.longitude,
          latitude: viewport.latitude,
          zoom: viewport.zoom,
        }}
        maxZoom={20}
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
        {selectedMarkerId && (
          <MapCard
            data={data}
            id={selectedMarkerId}
            setSelectedMarkerId={setSelectedMarkerId}
          />
        )}
      </Map>
    </div>
  );
}

import { Marker } from 'react-map-gl';

export default function CustomMarker({
  handleClick,
  id,
  position,
  isSelected,
}) {
  return (
    <Marker
      onClick={() => handleClick(id)}
      longitude={position.longitude}
      latitude={position.latitude}
      anchor="bottom"
    >
      <img src={isSelected ? '/selectedMarker.svg' : '/mapPin.svg'} />
    </Marker>
  );
}

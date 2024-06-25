import Documents from './Documents';
import Map from './Map';

export default function Overview() {
  return (
    <div className="w-full border border-black">
      <Map />
      <Documents />
    </div>
  );
}

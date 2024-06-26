import Documents from './Documents';
import ProjectMap from './ProjectMap';

export default function Overview({ data }) {
  return (
    <div className="w-full flex flex-col gap-5">
      <h2 className="text-3xl">Kart</h2>
      <ProjectMap data={data} />
      <Documents />
    </div>
  );
}

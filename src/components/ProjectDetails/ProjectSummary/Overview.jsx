import Documents from './Documents';
import ProjectMap from './ProjectMap';

export default function Overview({ data }) {
  return (
    <div className="w-full border border-black">
      <ProjectMap data={data} />
      <Documents />
    </div>
  );
}

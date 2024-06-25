import { useNavigate } from 'react-router-dom';
export default function MapCard({ data, id }) {
  const selectedProject = data?.find(project => project.id === id);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${id}`);
  };
  return (
    <div className="absolute bottom-24 right-[50%] translate-x-[50%] w-[450px] max-h-[165px] rounded-lg bg-white z-50 grid grid-cols-[0.7fr_1fr_0.1fr] gap-3 p-2">
      <div className="">
        <img src={selectedProject?.images[0].src} className="rounded-xl" />
      </div>
      <div className="flex flex-col justify-evenly">
        <h6 className="text-lg uppercase font-medium">
          {selectedProject.title}
        </h6>
        <p className="text-sm">
          <span className="font-bold">FRIST FOR INNSPILL:</span>{' '}
          {selectedProject.deadline}
        </p>
        <button
          onClick={handleClick}
          className="bg-custom_green text-white w-full mt-auto p-1 h-10 text-sm font-light"
        >
          Gå til prosjektet
        </button>
      </div>
      <div className="w-full">
        <button className="mx-auto">X</button>
      </div>
    </div>
  );
}

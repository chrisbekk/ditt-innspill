import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ data }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${data?.id}`);
  };

  return (
    <div
      onClick={() => handleClick(data.id)}
      className="w-full md:grid md:grid-cols-[0.5fr_1fr] md:gap-4 md:min-h-46 bg-neutral-50 md:mb-4 md:p-2 hover:cursor-pointer hover:bg-gray-200 hover:transition-colors"
    >
      <div className="md:h-full md:w-full">
        <img
          src={data?.images[0].src}
          className="md:h-full md:w-full object-cover"
        />
      </div>
      <div className="w-full">
        <h6 className="text-lg font-semibold max-w-[75ch] mb-3 md:mb-2 uppercase">
          {data?.title}
        </h6>
        <div className="flex flex-wrap items-center gap-2 w-full mb-3 md:mb-0">
          <p className="font-semibold uppercase text-[14px] ">
            Frist for innspill
          </p>
          <p>{data?.deadline}</p>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ data }) {
  const cardRef = useRef(null);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${data?.id}`);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        cardRef.current.addEventListener('click', handleClick);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="w-full md:grid md:grid-cols-[0.5fr_1fr] md:gap-4 md:min-h-46 bg-neutral-50 md:mb-4 md:p-2"
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

        <button
          onClick={handleClick}
          className="py-2 px-4 bg-custom_black md:hidden text-white text-sm mb-3 md:mb-0"
        >
          Se prosjekt
        </button>
      </div>
    </div>
  );
}

import { Link, useNavigate } from 'react-router-dom';
import Button from '../generics/Button';
import { CiSearch } from 'react-icons/ci';

export default function Hero() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/projects');
  };
  return (
    <div className="md:flex ">
      <div className="w-full md:h-[500px] md:max-w-[468px] md:order-last">
        <img src="./heroImg.jpg" className="h-full w-full object-cover" />
      </div>
      <div className="py-8 px-6 md:px-0 md:py-32">
        <h1 className="text-3xl md:text-5xl font-medium tracking-wide">
          Din mening teller.
        </h1>
        <h1 className="text-3xl md:text-5xl font-medium tracking-wide">
          Bli med å påvirke kommunens utvikling.
        </h1>
        <p className="text-base my-6">
          I DittInnspill kan du sende inn innspill og merknader på prosjekter
          kommunene legger ut.
        </p>
        <Button handleClick={handleClick}>
          <CiSearch className="text-2xl" />
          <p>Finn prosjekter</p>
        </Button>
      </div>
    </div>
  );
}

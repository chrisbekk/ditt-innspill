import { useNavigate } from 'react-router-dom';
import Button from '../generics/Button';

export default function InformationGrid() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <>
      <div className="md:grid md:grid-cols-2 md:h-[450px] mb-10 md:mb-0">
        <img src="./HavneBy-BvzgVvnj.webp" className="h-full object-cover" />
        <div className="bg-custom_purple py-10 md:py-20 px-10 h-full">
          <h2 className="text-2xl mb-4">
            DittInnspill er for deg som vil bli hørt!
          </h2>
          <p className="hidden md:block md:mb-4">
            Ved å delta i disse prosjektene kan du bidra til å forme utviklingen
            av ditt eget lokalsamfunn. Dette gir deg mulighet til å uttrykke
            dine synspunkter, bekrymringer og ønsker knyttet til utviklingen av
            kommunen.{' '}
          </p>
          <Button handleClick={handleClick}>
            <p>Om DittInnspill</p>
          </Button>
        </div>
      </div>
      <div className=" md:grid md:grid-cols-2 md:h-[450px]">
        <img
          src="public/FolkJobber-C3itZ9pf.webp"
          className="h-full object-cover md:order-last"
        />
        <div className="bg-custom_orange py-10 md:py-20 px-10 h-full">
          <h2 className="text-2xl mb-4">
            DittInnspill er for deg som vil bli hørt!
          </h2>
          <p className="hidden md:block md:mb-4">
            Ved å delta i disse prosjektene kan du bidra til å forme utviklingen
            av ditt eget lokalsamfunn. Dette gir deg mulighet til å uttrykke
            dine synspunkter, bekrymringer og ønsker knyttet til utviklingen av
            kommunen.{' '}
          </p>
          <Button handleClick={handleClick}>
            <p>For kommuneansatte</p>
          </Button>
        </div>
      </div>
    </>
  );
}

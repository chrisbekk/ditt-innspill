import Button from '../components/generics/Button';
import { CiSearch } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
export default function About() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/projects');
  };
  return (
    <div className="w-full">
      <div className="h-[300px] md:h-auto md:mx-auto max-w-[1200px] md:mt-14">
        <img
          src="/writingStockImgBig-BCjAkk80.webp"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-[960px] px-10 lg:px-0 md:mx-auto mt-10">
        <h1 className="text-4xl md:text-5xl">Om DittInnspill</h1>
        <h2 className="text-2xl md:text-3xl mt-4">
          Del dine tanker, bidra til din kommunes prosjekter og bli hørt!
        </h2>
        <div className="mt-4 md:border-l md:border-black md:p-8">
          <p className="max-w-full leading-[140%] tracking-wide">
            Som innbygger i din kommune spiller du en viktig rolle i utformingen
            og utviklingen av ditt lokalsamfunn. I MittInnspill kan du finne
            ulike prosjekter sammen med all nødvendig informasjon du trenger for
            å gi innspill eller merknader. Denne plattformen gir deg muligheten
            til å uttrykke dine meninger og ideer, som kan bidra til bedre
            beslutningsprosesser i kommunen. Enten det gjelder byutvikling,
            lokale arrangementer eller andre samfunnsspørsmål, er din stemme
            verdifull for å skape et mer levende og inkluderende lokalsamfunn.
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl mt-8">
          Del dine tanker, bidra til din kommunes prosjekter og bli hørt!
        </h2>
        <div className="mt-4 md:flex md:items-center md:gap-10 md:mb-14">
          <div className="md:max-w-[700px] md:flex-shrink">
            <p className="max-w-full leading-[140%] mt-4 tracking-wide">
              MittInnspill gir deg muligheten til både å sende inn innspill og
              få oversikt over aktiviteter du kan delta i. På denne plattformen
              kan du enkelt finne informasjon om de ulike prosessen knyttet til
              hvert prosjekt, samt holde deg løpende oppdatert.
            </p>
            <p className="max-w-full leading-[140%] mt-4 tracking-wide">
              MittInnspill er utviklet i samarbeid med kommunene for å sikre en
              inkluderende og transparent prosess. Her har du muligheten til å
              delta aktivt og bidra med dine tanker og meninger, noe som er
              essensielt for å forme et levende og dynamisk lokalsamfunn.
            </p>
          </div>
          <div className="mt-8 mb-14 flex justify-center md:block md:flex-grow">
            <Button handleClick={handleNavigate}>
              <CiSearch className="text-3xl" />
              <p>Finn prosjekter</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

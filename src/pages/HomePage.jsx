import DescriptionCard from '../components/Home/DescriptionCard';
import Hero from '../components/Home/Hero';
import InformationGrid from '../components/Home/InformationGrid';

export default function HomePage() {
  return (
    <div className="max-w-[960px] md:px-10 lg:px-0 md:mx-auto md:mt-10">
      <section>
        <Hero />
      </section>
      <section className="px-6">
        <h2 className="text-2xl md:text-3xl font-medium tracking-wide ">
          DittInnspill gjør medvirkning til hva det burde være. Det er du som
          sier din mening om hvordan kommunen din skal utvikle seg.
        </h2>
      </section>
      <section className="px-6 my-20">
        <div className=" md:grid  md:grid-cols-3 md:gap-8">
          <DescriptionCard src={'./HandHoldingAppKart-qkU0s909.webp'}>
            <p>
              Finn prosjekter nær deg gjennom å søke i liste eller kart. Scroll
              deg nedover lista, eller klikk deg rundt i kartet.
            </p>
          </DescriptionCard>
          <DescriptionCard
            src={'public/HandHoldingAppSammendrag-BVSzSiH4.webp'}
          >
            <p>
              Få all informasjon du trenger for å dele din mening. Vi har samlet
              bilder, sammendrag, innspill, kart og dokumenter, slik at du kan
              finne informasjonen du trenger før du gir innspill.
            </p>
          </DescriptionCard>
          <DescriptionCard src={'public/HandHoldingAppInnspill-CsSVzUox.webp'}>
            <p>
              Din lokalkunnskap og dine ønsker kan ha virkning på
              sluttresultatet når prosjektet skal besluttes. Slik kan prosjektet
              utvikles i retningen du ønsker.
            </p>
          </DescriptionCard>
        </div>
      </section>
      <section className="px-6 mb-20">
        <InformationGrid />
      </section>
    </div>
  );
}

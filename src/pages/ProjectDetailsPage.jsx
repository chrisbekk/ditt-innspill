import Pending from '../components/generics/Pending';
import { useState } from 'react';
import { FaRegBell } from 'react-icons/fa';
import useFetchProject from '../hooks/useFetchProject';
import { useParams, useNavigate } from 'react-router-dom';
import ImageCarousel from '../components/ProjectDetails/ImageCarousel';
import Description from '../components/ProjectDetails/Description';
import Details from '../components/ProjectDetails/Details';
import Button from '../components/generics/Button';

import TabsHeader from '../components/ProjectDetails/TabsHeader';
import { initialTabs } from '../components/ProjectDetails/initialTabs';
import ProjectSummary from '../components/ProjectDetails/ProjectSummary';

export default function ProjectDetailsPage() {
  const { projectID } = useParams();
  const navigate = useNavigate();
  const { data, pending, fetchError } = useFetchProject(projectID);
  const [tabs, setTabs] = useState(initialTabs);

  const handleNavigate = () => {
    navigate('/');
  };

  if (pending) return <Pending />;
  if (fetchError) return <div>Error loading project</div>;

  return (
    <div className="max-w-[960px] px-4 mt-4 md:px-10 lg:px-0 md:mx-auto md:mt-10 min-h-screen">
      <div className="">
        <section>
          <h1 className="text-3xl md:text-5xl font-medium max-w-[75ch] tracking-wide">
            {data?.title}
          </h1>
          <div className="bg-custom_yellow py-2 pl-4 flex items-center gap-2 mt-6 md:mt-10">
            <FaRegBell className="text-orange-600 text-2xl" />
            <p className="">Frist for innspill: {data?.deadline}</p>
          </div>
        </section>
        <section className="mt-8 md:mt-10 mb-10">
          <ImageCarousel images={data?.images} />

          <h6 className="text-lg font-semibold">BESKRIVELSE</h6>
          <Description text={data?.description} />

          <Details details={data?.details} />
          <div className="w-full flex justify-center mt-10">
            <Button>Si din mening</Button>
          </div>
        </section>
        <TabsHeader tabs={tabs} setTabs={setTabs} />
      </div>

      <section className="my-10">
        <ProjectSummary tabs={tabs} data={data} />
      </section>
      <div className="w-full flex justify-center mt-10 mb-24">
        <Button>Si din mening</Button>
      </div>
    </div>
  );
}

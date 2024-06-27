import { act, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IoRemoveOutline } from 'react-icons/io5';
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';

import ProjectsMenu from '../components/Projects/ProjectsMenu';
import Header from '../components/Header';
import useFetchData from '../hooks/useFetchData';
import InputField from '../components/generics/InputField';
import DropDownMenu from '../components/Projects/DropDownMenu';
import Tag from '../components/generics/Tag';
import ProjectCardSmall from '../components/Projects/ProjectCardSmall';
import MapComponent from '../components/Projects/MapComponent';
export default function ProjectsPage() {
  const { pathname } = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeKommune, setActiveKommune] = useState(null);
  const { data, pending, fetchError } = useFetchData();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortProjects, setSortProjects] = useState(false);
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data && data?.projects) {
      setOriginalData(data.projects);
      setFilteredData(data.projects);
    }
  }, [data]);

  const handleClick = () => {
    setToggleMenu(prev => !prev);
  };
  const handleChange = e => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
  };

  useEffect(() => {
    let result = originalData;
    if (searchTerm) {
      result = result.filter(project =>
        project.title.toLowerCase().includes(searchTerm),
      );
    }
    if (activeKommune) {
      result = result.filter(project => project.kommune === activeKommune.name);
    }
    setFilteredData(result);
  }, [searchTerm, activeKommune, originalData]);

  const handleSort = () => {};

  useEffect(() => {
    if (pathname === '/projects') {
      document.body.classList.add('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [pathname]);

  return (
    <div className="border border-black h-screen grid grid-rows-[1fr_64px] md:block">
      <div className="h-full overflow-hidden relative">
        <Header />
        <div className="md:flex w-full h-full relative md:mt-4 ">
          <div className=" order-last md:order-1 h-full w-full">
            <MapComponent data={filteredData} />
          </div>
          <ProjectsMenu
            toggleMenu={toggleMenu}
            setToggleMenu={setToggleMenu}
            data={filteredData}
          />
          <div className="w-full flex-wrap h-full md:overflow-y-scroll  hidden md:block md:min-w-[480px] md:max-w-[680px]">
            <div className="mx-2 lg:mx-8 h-full">
              <h3 className="text-2xl">Finn prosjekter</h3>

              <InputField
                id={'searchTerm'}
                label={'Søk'}
                placeholder={'Søk'}
                isRequired={false}
                value={searchTerm}
                handleChange={handleChange}
              />
              <DropDownMenu
                activeKommune={activeKommune}
                setActiveKommune={setActiveKommune}
                filteredData={data?.projects}
                setFilteredData={setFilteredData}
              />
              <div className="w-[80%] mt-8 flex flex-wrap gap-1">
                {searchTerm && (
                  <Tag
                    name={searchTerm}
                    handleClick={() => setSearchTerm('')}
                  />
                )}
                {activeKommune && (
                  <Tag
                    name={activeKommune?.name}
                    handleClick={() => setActiveKommune(null)}
                  />
                )}
              </div>
              <div className="mt-10">
                <p className="font-semibold">Sorter</p>
                <div className="flex gap-3">
                  <button
                    onClick={handleSort}
                    className="flex bg-custom_green p-2 px-5 text-sm font-light text-white items-center gap-2 rounded-full"
                  >
                    {sortProjects ? <FaArrowDown /> : <FaArrowUp />}A-Å
                  </button>
                  <button className="border border-custom_black p-2 px-5 rounded-full text-sm font-light">
                    Frist
                  </button>
                </div>
              </div>
              <div className="px-2 py-1 h-full bg-slate-100">
                {filteredData.map(project => (
                  <ProjectCardSmall key={project.title} data={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 h-full md:hidden">
        <span className="w-full flex justify-center">
          <IoRemoveOutline className="font-bold text-3xl" />
        </span>
        <button
          onClick={() => setToggleMenu(prev => !prev)}
          className="w-full px-2"
        >
          {toggleMenu ? (
            <span className="flex gap-3">
              <img src="./mapIcon.svg" />
              <p className="text-custom_green">Vis kart</p>
            </span>
          ) : (
            <span className="flex gap-3">
              <img src="./liste.svg" />
              <p className="text-custom_green">Vis liste</p>
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IoRemoveOutline } from 'react-icons/io5';
import ProjectsMenu from '../components/Projects/ProjectsMenu';
import Header from '../components/Header';
export default function ProjectsPage() {
  const { pathname } = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./src/data/projects.json');
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }, []);
  const handleClick = () => {
    setToggleMenu(prev => !prev);
  };
  useEffect(() => {
    if (pathname === '/projects') {
      document.body.classList.add('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [pathname]);

  return (
    <div className="border border-black h-screen  grid grid-rows-[1fr_64px] md:block">
      <div className="h-full overflow-hidden relative">
        <Header />
        <div className="md:grid md:grid-cols-[0.4fr_0.6fr] w-full h-full relative">
          <div className="bg-green-400 order-last md:order-1 h-full">MAP</div>
          <ProjectsMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
          <div className="bg-orange-400 w-full h-full hidden md:block">ss</div>
        </div>
      </div>
      <div className="bg-blue-400 h-full md:hidden">
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

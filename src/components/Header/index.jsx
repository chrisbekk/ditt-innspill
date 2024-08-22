import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import navbarIcon from '/navbars.svg';
import NavbarMenu from './NavbarMenu';
import AltHeader from './AltHeader';
export default function Header() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [showAltHeader, setShowAltHeader] = useState(false);
  useEffect(() => {
    if (pathname === '/projects') {
      setShowAltHeader(true);
    } else {
      setShowAltHeader(false);
    }
  }, [pathname]);
  return (
    <div className={`${showAltHeader ? 'min-h-16' : 'h-16'} md:h-16 border-b`}>
      <div className="h-full">
        <div className="max-w-[1440px] mx-auto h-full flex items-center px-2 justify-between md:justify-normal relative">
          <Link
            to={'/'}
            id="mainHeader"
            className={`${showAltHeader ? 'hidden md:block' : ''}`}
          >
            <h1 className="text-3xl font-medium font-figTree tracking-wide">
              DittInnspill
            </h1>
          </Link>

          <nav className="hidden ml-8 gap-5 md:flex">
            <Link to={'/projects'}>
              <p className="font-light">Finn prosjekter</p>
            </Link>
            <Link to={'/about'}>
              <p className="font-light">Om</p>
            </Link>
            <Link to={'/'}>
              <p className="font-light">For kommuneansatte</p>
            </Link>
          </nav>
          <button
            onMouseUp={() => {
              setIsVisible(true);
            }}
            className="md:hidden rounded-full hover:bg-lime-100"
          >
            <img src={navbarIcon} className="m-3" />
          </button>
          <NavbarMenu isVisible={isVisible} setIsVisible={setIsVisible} />
          {showAltHeader && <AltHeader setToggleFilter={setToggleFilter} />}
        </div>
        {showAltHeader && toggleFilter && <p className="md:hidden"></p>}
      </div>
    </div>
  );
}

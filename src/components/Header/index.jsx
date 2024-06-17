import { Link } from 'react-router-dom';
import { useState } from 'react';
import navbarIcon from '/navbars.svg';
export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="h-16 border-b ">
      <div className="max-w-[1440px] mx-auto h-full flex items-center px-2 justify-between md:justify-normal">
        <Link to={'/'}>
          <h1 className="text-3xl font-medium font-figTree tracking-wide">
            DittInnspill
          </h1>
        </Link>

        <nav className="hidden ml-8 gap-5 md:flex">
          <Link to={'/projects'}>
            <p className="font-light">Finn prosjekter</p>
          </Link>
          <Link to={'/'}>
            <p className="font-light">Om</p>
          </Link>
          <Link to={'/'}>
            <p className="font-light">For kommuneansatte</p>
          </Link>
        </nav>
        <button className="md:hidden rounded-full hover:bg-lime-100">
          <img src={navbarIcon} className="m-3" />
        </button>
      </div>
    </div>
  );
}

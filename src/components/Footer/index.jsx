import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div className="w-screen bg-custom_yellow">
        <div className="max-w-[1440px] mx-auto px-2 h-48">
          <div className="p-4 sm:p-8 h-full flex justify-between">
            <div>
              <h2 className="text-2xl">DittInnspill.</h2>
              <Link to={'/projects'}>
                <p className="underline font-light sm:hidden">
                  Finn prosjekter
                </p>
              </Link>
            </div>
            <div className="hidden sm:block">
              <h3 className="text-lg font-semibold">DittInnspill</h3>
              <Link to={'/projects'}>
                <p className="underline font-light">Finn prosjekter</p>
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Administrator</h3>
              <div>
                <Link to={'/'}>
                  <p className="underline font-light">Brukerstøtte</p>
                  <p className="underline font-light">Logg inn</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen bg-custom_black text-white">
        <div className="max-w-[1440px] mx-auto h-40 p-4 sm:p-8">
          <h2 className="text-2xl">DittInnspill</h2>
          <p className="font-light text-sm">© 2024 Christian Bekkelund</p>
          <p className="font-light text-sm">
            Developer case based on MittInnspill by Norkart
          </p>
        </div>
      </div>
    </>
  );
}

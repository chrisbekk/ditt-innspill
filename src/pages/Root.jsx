import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Root() {
  //TODO: conditionally render header and footer based on path

  return (
    <div className="flex flex-col min-h-screen text-custom_black bg-slate-50 font-figTree overflow-x-hidden">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

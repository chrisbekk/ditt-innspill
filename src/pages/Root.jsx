import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

export default function Root() {
  const { pathname } = useLocation();
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    setShowHeader(pathname !== '/projects');
    setShowFooter(pathname !== '/projects');
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen text-custom_black bg-slate-50 font-figTree overflow-clip">
      <header>{showHeader && <Header />}</header>
      <main>
        <Outlet />
      </main>
      {showFooter && (
        <footer className="mt-auto">
          <Footer />
        </footer>
      )}
    </div>
  );
}

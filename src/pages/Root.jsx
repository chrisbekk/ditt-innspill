import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
export default function Root() {
  return (
    <div className="flex flex-col min-h-screen text-custom_black bg-slate-50">
      <header>
        <Header />
      </header>
      <body>
        <Outlet />
      </body>
      <footer className="mt-auto h-24">
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

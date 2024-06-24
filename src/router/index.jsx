import { createBrowserRouter } from 'react-router-dom';

// Import page components
import Root from '../pages/Root';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import About from '../pages/About';

//
export const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    errorElement: <p>ERROR</p>,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'details/:projectID',
        element: <ProjectDetailsPage />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

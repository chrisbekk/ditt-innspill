import { createBrowserRouter } from 'react-router-dom';

// Import page components
import Root from '../pages/Root';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';

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
        path: 'details/:prjocetID',
        element: <ProjectDetailsPage />,
      },
    ],
  },
]);

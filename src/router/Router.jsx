import { createBrowserRouter } from 'react-router-dom';

import Root from '../components/Root/Root';
import Home from '../components/Home/Home';
import SearchPage from '../components/SearchPage/SearchPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;

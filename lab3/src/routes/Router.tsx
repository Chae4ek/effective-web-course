import { createBrowserRouter } from 'react-router-dom';
import { Characters } from './Characters';
import { Comics } from './Comics';
import { Series } from './Series';

export default createBrowserRouter([
  {
    path: '/',
    element: <Characters />
  },
  {
    path: 'comics',
    element: <Comics />
  },
  {
    path: 'series',
    element: <Series />
  }
]);

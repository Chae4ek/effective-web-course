import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import { FC, lazy, ReactNode, Suspense } from 'react';
import Characters from './Characters';
import Loading from './Loading';
import Empty from './Empty';
import routes from '../config/routes';

const CardDetails = lazy(() => import('./CardDetails'));
const Comics = lazy(() => import('./Comics'));
const Series = lazy(() => import('./Series'));

const Lazy: FC<{ node: ReactNode }> = ({ node }) => {
  return <Suspense fallback={<Loading />}>{node}</Suspense>;
};

export default function Root() {
  const cardDetails = <Lazy node={<CardDetails />} />;

  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Empty /> },
        { path: routes.characters, element: <Lazy node={<Characters />} /> },
        { path: `${routes.characters}/:id`, element: cardDetails },
        { path: routes.comics, element: <Lazy node={<Comics />} /> },
        { path: `${routes.comics}/:id`, element: cardDetails },
        { path: routes.series, element: <Lazy node={<Series />} /> },
        { path: `${routes.series}/:id`, element: cardDetails },
        { path: '*', element: <Navigate replace to="/" /> }
      ]
    }
  ]);
}

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

import { Home, History } from '@pages/index';
import { RoutesEnum } from './routes';
import { useRoutes } from 'react-router-dom';

export const RouteConfig = () => {
  const routes = useRoutes([
    {
      path: RoutesEnum.Home,
      element: <Home />,
    },
    {
      path: RoutesEnum.History,
      element: <History />,
    },
  ]);

  return routes;
};

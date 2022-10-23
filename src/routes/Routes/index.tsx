import {Routes, Route, Navigate} from 'react-router-dom';

import {publicRoutes} from '../index';

import {RouteNames} from './Routes.enum';


const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(route => {
        if (route.path === RouteNames.BOOK) {
          return <Route path={`${route.path}/:id`}
            element={<route.element/>}
            key={route.path}
          />;
        } else {
          return <Route path={route.path}
            element={<route.element/>}
            key={route.path}
          />;
        }
      }
      )}
      <Route path={'*'} element={<Navigate replace to={RouteNames.HOME} />} />
    </Routes>
  );
};

export default AppRouter;
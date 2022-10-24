import Home from '../../pages/Public/Home';
import Book from '../../pages/Public/Book';

import { RouteNames } from './routes.enum';
import { IRouteProps } from './routes.typings';

export const publicRoutes: IRouteProps[] = [
  {path: RouteNames.HOME, element: Home},
  {path: RouteNames.BOOK, element: Book}
];
import Home from '../pages/Public/Home';
import Book from '../pages/Public/Book';

import {RouteNames} from './Routes/Routes.enum';
import {IRouteProps} from './Routes/Routes.typings';

export const publicRoutes: IRouteProps[] = [
  {path: RouteNames.HOME, element: Home},
  {path: RouteNames.BOOK, element: Book}
];
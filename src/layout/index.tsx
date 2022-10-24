import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { RouteNames } from '../router/routes/routes.enum';

import {
  BodyStyled,
  HeaderStyled
} from './Layout.styles';
import { ILayoutProps } from './Layout.typings';
import Header from './elements/Header';


const Layout: FC<ILayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {(location.pathname === RouteNames.HOME)        &&
        <HeaderStyled>
          <Header />
        </HeaderStyled>}
      <BodyStyled>
        {children}
      </BodyStyled>
    </>
  );
};

export default Layout;
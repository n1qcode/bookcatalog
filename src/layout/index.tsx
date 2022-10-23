import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { RouteNames } from '../routes/Routes/Routes.enum';

import {
  BodyStyled,
  HeaderStyled,
  LayoutStyled
} from './Layout.styles';
import { ILayoutProps } from './Layout.typings';
import Header from './elements/Header';


const Layout: FC<ILayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <LayoutStyled>
      {(location.pathname === RouteNames.HOME)        &&
        <HeaderStyled>
          <Header />
        </HeaderStyled>}
      <BodyStyled>
        {children}
      </BodyStyled>
    </LayoutStyled>
  );
};

export default Layout;
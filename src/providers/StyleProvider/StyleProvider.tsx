import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../styles/globalStyle';
import theme from '../../styles/theme';

interface Props {
    children: ReactNode;
}

const StyleProvider: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
const global = {
  defaultFontSize: '15px',
  defaultFontFamily: 'Roboto',
};

export interface ITheme {
    global: typeof global;
}

const theme: ITheme = {
  global,
};

export default theme;
import { DefaultTheme, IBreakpoint } from 'styled-components';

import { min, max } from './styled-responsive';

const BREAKPOINTS: IBreakpoint = {
  xs: 576,
  sm: 600,
  md: 992,
  lg: 1200,
  xl: 1700,
};

const theme: DefaultTheme = {
  breakpoints: BREAKPOINTS,
  colors: {
    main: '#e85a4f',
    secondary: '#8e8d8a',
    body: '#eae7dc',
  },
  font: 'Poppins,sans-serif',
  min,
  max,
};

export default theme;

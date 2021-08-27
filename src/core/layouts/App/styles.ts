import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

import POPPINS_REGULAR from 'core/assets/fonts/Poppins-Regular.ttf';
import POPPINS_BOLD from 'core/assets/fonts/Poppins-Bold.ttf';

const Styles = createGlobalStyle`
  ${styledNormalize};
  
  body {
    background-color: ${(p) => p.theme.colors.body};
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${POPPINS_REGULAR});
    font-weight: 400;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Poppins';
    src: url(${POPPINS_BOLD});
    font-weight: 700;
    font-style: normal;
  }
`;

export default Styles;

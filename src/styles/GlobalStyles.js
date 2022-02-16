import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}

 //공통스타일
  .mt-10 {
    margin-top: 10px;
  }

  select {
    border: 1px solid #c3c3c3;
    width: 100px;
    height: 40px;
  }

  .page_photo {
    max-width: 640px;
    margin: 0 auto;
  }

`;

export default GlobalStyles;

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 80px;
    font-family: 'Inter';

    transition: background-color 0.3s ease, color 0.3s ease;
      @media (max-width: 768px) {
      padding: 0 16px;
   }
  }
    main {
    font-family: 'Inter';
    transition: zoom 0.3s ease;

    @media (min-width: 1200px) and (max-width: 1400px) {
      zoom: 0.85;
    }

    @media (min-width: 1100px) and (max-width: 1200px) {
      zoom: 0.75;
    }

    @media (min-width: 965px) and (max-width: 1100px) {
      zoom: 0.65;
    }

    @media (min-width: 850px) and (max-width: 965px) {
      zoom: 0.55;
    }

    @media (min-width: 769px) and (max-width: 850px) {
      zoom: 0.5;
    }
  }

  @font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Regular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-SemiBold.otf') format('opentype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Bold.otf') format('opentype');
  font-weight: 700;
  font-style: normal;
}

`;

export default GlobalStyles;

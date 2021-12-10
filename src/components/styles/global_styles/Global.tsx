import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    
    *, 
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        min-height: 100%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: ${({ theme }) => theme.colors.ligth}
    }
`;

export default GlobalStyles;

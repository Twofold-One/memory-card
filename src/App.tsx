import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './components/styles/global_styles/theme';
import Score from './components/Score';
import GlobalStyles from './components/styles/global_styles/Global';

// Components required
// Header component (includes title, description and Score component);
// Score component (includes scores and best score);
// Main component (includes 10 Card components);
// Card component (includes image and short description);

function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Score score={score} bestScore={bestScore} />
            </>
        </ThemeProvider>
    );
}

export default App;

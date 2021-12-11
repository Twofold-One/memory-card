import React, { useState } from 'react';
import './global_styles/App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// Components required
// Header component (includes title, description and Score component);
// Score component (includes scores and best score);
// Main component (includes 10 Card components);
// Card component (includes image and short description);

const App = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    return (
        <>
            <Header score={score} bestScore={bestScore} />
            <Main />
            <Footer />
        </>
    );
};

export default App;

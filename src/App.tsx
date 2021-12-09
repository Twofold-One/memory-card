import React, { useState } from 'react';
import Score from './components/Score';

// Components required
// Header component (includes title, description and Score component);
// Score component (includes scores and best score);
// Main component (includes 10 Card components);
// Card component (includes image and short description);

function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    return (
        <>
            <Score score={score} bestScore={bestScore} />
        </>
    );
}

export default App;

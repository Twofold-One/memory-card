import React, { useState, useEffect } from 'react';
import './global_styles/App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { cards } from './cards_information/cards';
import { shuffleArray } from './utility_functions/array_shuffle';

export type Cards = Array<{
    id: number;
    src: string;
    alt: string;
    text: string;
}>;

const App = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [deck, setDeck] = useState<Cards>(cards);
    const [clickedCards, setClickedCards] = useState([]);

    useEffect(() => {
        setDeck(shuffleArray(cards));
    }, []);

    return (
        <>
            <Header score={score} bestScore={bestScore} />
            <Main deck={deck} />
            <Footer />
        </>
    );
};

export default App;

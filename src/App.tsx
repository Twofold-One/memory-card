import React, { useState, useEffect } from 'react';
import './global_styles/App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { cards } from './cards_information/cards';
import { shuffleArray } from './utility_functions/array_shuffle';
import { cardRepeatCheck } from './utility_functions/repeat_check';
import Win from './components/Win';

export type Cards = Array<{
    id: number;
    src: string;
    alt: string;
    text: string;
}>;

export type Card = {
    id: number;
    src: string;
    alt: string;
    text: string;
};

const App = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [deck, setDeck] = useState<Cards>(cards);
    const [clickedCards, setClickedCards] = useState<Array<any>>([]);

    useEffect(() => {
        setDeck(shuffleArray(cards));
        if (score > bestScore) {
            setBestScore(score);
        }
    }, [clickedCards, score, bestScore]);

    const returnToMainScreen = () => {
        setScore(0);
        setBestScore(0);
        setClickedCards([]);
    };

    const handleCardClick = (id: string) => {
        const clickedCard = deck.find((card) => card.id === Number(id));
        const prevState = clickedCards.slice();
        if (cardRepeatCheck(clickedCard, prevState)) {
            setScore(0);
            setClickedCards([]);
            return;
        }
        setScore(score + 1);
        setClickedCards([...prevState, clickedCard]);
    };

    return (
        <>
            <Header score={score} bestScore={bestScore} />
            <Main deck={deck} handleCardClick={handleCardClick} />
            <Win
                isWin={bestScore === 9 ? true : false}
                returnToMainScreen={returnToMainScreen}
            />
            <Footer />
        </>
    );
};

export default App;

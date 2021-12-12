import React, { useState, useEffect } from 'react';
import './global_styles/App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { cards } from './cards_information/cards';
import { shuffleArray } from './utility_functions/array_shuffle';
import { cardRepeatCheck } from './utility_functions/repeat_check';

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
        // console.log(clickedCards);
        console.log(`Score: ${score}`);
    }, [clickedCards, score]);

    const handleCardClick = (id: string) => {
        const clickedCard = deck.find((card) => card.id === Number(id));
        const prevState = clickedCards.slice();
        console.log(prevState);
        const newState = [...prevState, clickedCard];
        console.log(newState);
        // if (cardRepeatCheck(newState, prevState)) {
        //     console.log('repetition detected');
        //     setScore(0);
        //     setClickedCards([]);
        //     return;
        // }
        setClickedCards([...prevState, clickedCard]);
        setScore(score + 1);
    };

    return (
        <>
            <Header score={score} bestScore={bestScore} />
            <Main deck={deck} handleCardClick={handleCardClick} />
            <Footer />
        </>
    );
};

export default App;

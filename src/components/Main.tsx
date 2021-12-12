import React, { MouseEvent } from 'react';
import styles from './styles/Main.module.scss';
import Card from './Card';
import type { Cards } from '../App';

interface MainProps {
    deck: Cards;
}

const Main = ({ deck }: MainProps) => {
    // const handleCardClick = (event) => {
    //     console.log(event);
    // };

    const renderCards = deck.map((card) => (
        <Card key={card.id} src={card.src} alt={card.alt} text={card.text} />
    ));

    return <div className={styles.main}>{renderCards}</div>;
};
export default Main;

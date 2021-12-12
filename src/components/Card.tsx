import React from 'react';
import styles from './styles/Card.module.scss';

interface CardProps {
    id: number;
    src: string;
    alt: string;
    text: string;
    handleCardClick: any;
}

const Card = ({ id, src, alt, text, handleCardClick }: CardProps) => {
    const onCardClick = (event: React.MouseEvent) => {
        console.log(event.currentTarget.id);
        const id = event.currentTarget.id;
        handleCardClick(id);
    };

    return (
        <figure
            onClick={onCardClick}
            id={id.toString()}
            className={styles.card}
        >
            <img src={src} alt={alt}></img>
            <figcaption>{text}</figcaption>
        </figure>
    );
};

export default Card;

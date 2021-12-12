import React from 'react';
import styles from './styles/Card.module.scss';

interface CardProps {
    src: string;
    alt: string;
    text: string;
}

const Card = ({ src, alt, text }: CardProps) => {
    const onCardClick = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event.target);
    };

    return (
        <figure className={styles.card} onClick={onCardClick}>
            <img src={src} alt={alt}></img>
            <figcaption>{text}</figcaption>
        </figure>
    );
};

export default Card;

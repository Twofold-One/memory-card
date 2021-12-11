import styles from './styles/Card.module.scss';

interface CardProps {
    src: string;
    alt: string;
    text: string;
}

const Card = ({ src, alt, text }: CardProps) => {
    return (
        <figure className={styles.card}>
            <img src={src} alt={alt}></img>
            <figcaption>{text}</figcaption>
        </figure>
    );
};

export default Card;

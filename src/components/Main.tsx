import styles from './styles/Main.module.scss';
import Card from './Card';
import type { Cards } from '../App';

interface MainProps {
    deck: Cards;
    handleCardClick: any;
}

const Main = ({ deck, handleCardClick }: MainProps) => {
    const renderCards = deck.map((card) => (
        <Card
            key={card.id}
            id={card.id}
            src={card.src}
            alt={card.alt}
            text={card.text}
            handleCardClick={handleCardClick}
        />
    ));

    return <div className={styles.main}>{renderCards}</div>;
};
export default Main;

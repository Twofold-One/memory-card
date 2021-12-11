import styles from './styles/Main.module.scss';
import Card from './Card';
import { cards } from '../cards_information/cards';

const Main = () => {
    // onclick = () => {

    // };

    const renderCards = cards.map((card) => (
        <Card key={card.id} src={card.src} alt={card.alt} text={card.text} />
    ));

    return <div className={styles.main}>{renderCards}</div>;
};
export default Main;

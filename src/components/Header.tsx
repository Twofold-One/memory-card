import styles from './styles/Header.module.scss';
import guitarImg from '../assets/header_guitar.png';

interface ScoreProps {
    score: number;
    bestScore: number;
}

const Header = ({ score, bestScore }: ScoreProps) => {
    return (
        <header className={styles.header}>
            <div>
                <img src={guitarImg} alt="guitar"></img>
            </div>
            <div>
                <h1>Guitar Shapes</h1>
                <h2>Memory Game</h2>
            </div>

            <div className={styles.score}>
                <p>Score: {score}</p>
                <p>Best score: {bestScore}</p>
            </div>
        </header>
    );
};

export default Header;

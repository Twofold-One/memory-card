import winGif from '../assets/rockstar.gif';
import styles from './styles/Win.module.scss';

const WinScreen = ({ returnToMainScreen }: any) => {
    return (
        <div className={styles.win}>
            <h1>You are ROCKSTAR!</h1>
            <img src={winGif} alt="win gif" />
            <button onClick={returnToMainScreen}>ROCK AGAIN!</button>
        </div>
    );
};

const Win = ({ isWin, returnToMainScreen }: any) => {
    if (isWin) {
        return <WinScreen returnToMainScreen={returnToMainScreen} />;
    }
    return <div></div>;
};

export default Win;

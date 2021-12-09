import Container from './styles/styled_components/Container.styled';
import ScoreLine from './styles/styled_components/ScoreLine.styled';

interface ScoreProps {
    score: number;
    bestScore: number;
}

const Score = ({ score, bestScore }: ScoreProps) => {
    return (
        <Container>
            <ScoreLine>Score: {score}</ScoreLine>
            <ScoreLine>Best score: {bestScore}</ScoreLine>
        </Container>
    );
};

export default Score;

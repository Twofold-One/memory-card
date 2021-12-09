import React, { useState } from 'react';
import styled from 'styled-components';

interface ScoreProps {
    score: number;
    bestScore: number;
}

const Score = ({ score, bestScore }: ScoreProps) => {
    return (
        <div>
            <ScoreLine>Score: {score}</ScoreLine>
            <ScoreLine>Best score: {bestScore}</ScoreLine>
        </div>
    );
};

const ScoreLine = styled.p`
    padding: 10px;
    color: palevioletred;
    font-size: 1.5rem;
`;

export default Score;

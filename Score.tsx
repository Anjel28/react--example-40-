import React from 'react';

type ScoreProps = {
    score: number;
}

const Score: React.FC<ScoreProps> = ({score}) =>{
    return<h3>Score: {score}</h3>
}

export default Score;
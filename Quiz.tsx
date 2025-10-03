import React, { useState } from 'react';
import Score from './Score';
import Questions from './Questions';


const Quiz: React.FC = () => {
    const [score, setScore] = useState<number>(0);

    const handleCorrectAnswer = () => {
        setScore(Prev => Prev + 1);
    }

    return(
        <div>
            <h1>Rio Quiz App</h1>
            <Score score={score}></Score>
            <Questions onCorrect={handleCorrectAnswer}></Questions>
        </div>
    )
}

export default Quiz;

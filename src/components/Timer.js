import { useEffect, useState } from 'react';

const Timer = ({ setTimeOut, questionNumber, setQuestionNumber }) => {
    const [timer, setTimer] = useState(10);

    useEffect(() => {
        if (timer === 0) return setQuestionNumber(questionNumber + 1);
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [timer, setTimeOut]);

    useEffect(() => {
        setTimer(10);
    }, [questionNumber]);
    return timer;
};

export default Timer;
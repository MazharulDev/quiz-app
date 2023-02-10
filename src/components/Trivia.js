import React, { useEffect, useState } from 'react';

const Trivia = ({
    data,
    questionNumber,
    setQuestionNumber,
    setTimeOut,
    setCount,
    count
}) => {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");


    useEffect(() => {
        if ((data.length) + 1 === questionNumber) {
            setTimeOut(true)
        }
    }, [data.length, questionNumber, setTimeOut])
    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
    }, [data, questionNumber]);

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    };

    const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName("answer active");
        delay(100, () => {
            setClassName(a.correct ? "answer correct" : "answer wrong");
        });

        delay(100, () => {
            if (a.correct) {
                delay(50, () => {
                    setCount(count + 1)
                    setQuestionNumber((prev) => prev + 1);
                    setSelectedAnswer(null);
                });
            } else {
                delay(50, () => {
                    setQuestionNumber((prev) => prev + 1);
                    setSelectedAnswer(null)

                });
            }
        })
    };
    return (
        <div className="trivia">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a) => (
                    <div
                        className={selectedAnswer === a ? className : "answer"}
                        onClick={() => !selectedAnswer && handleClick(a)}
                    >
                        {a.text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trivia;
import "./App.css";
import { useState } from "react";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

const App = () => {
  const [count, setCount] = useState(0)
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What capital of Bangladesh",
      answers: [
        {
          text: "Cittogong",
          correct: false,
        },
        {
          text: "Rajshahi",
          correct: false,
        },
        {
          text: "Dhaka",
          correct: true,
        },
        {
          text: "Mymensight",
          correct: false,
        },
      ],
    },
  ];



  return (
    <div className="app">
      <div className="main">
        {timeOut ? (
          <h1 className="endText">Your currect question is: {count}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer
                  setTimeOut={setTimeOut}
                  questionNumber={questionNumber}
                />
              </div>
            </div>
            <div className="bottom">
              <Trivia
                data={data}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                setTimeOut={setTimeOut}
                setCount={setCount}
                count={count}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
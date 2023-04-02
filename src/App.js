import "./App.css";
import { useState } from "react";
import Timer from "./components/Timer";
import QuizCore from "./components/QuizCore";

const App = () => {
  const [count, setCount] = useState(0)
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const data = [
    {
      id: 1,
      question: "বাংলাদেশের রাজধানীর নাম কি? ",
      answers: [
        {
          text: "ময়মনসিংহ",
          correct: false,
        },
        {
          text: "ঢাকা",
          correct: true,
        },
        {
          text: "বরিশাল",
          correct: false,
        },
        {
          text: "খুলনা",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "বাংলাদেশের জাতীয় ফুলের নাম কি? ",
      answers: [
        {
          text: "শাপলা",
          correct: true,
        },
        {
          text: "গোলাপ",
          correct: false,
        },
        {
          text: "জবা",
          correct: false,
        },
        {
          text: "বেলী",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "বাংলাদেশের জাতীয় মাছের নাম কি? ",
      answers: [
        {
          text: "কাতল",
          correct: false,
        },
        {
          text: "তিমি",
          correct: false,
        },
        {
          text: "চিংড়ি",
          correct: false,
        },
        {
          text: "ইলিশ",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "৫ আর ৫ যোগ করলে কত হবে? ",
      answers: [
        {
          text: "২০",
          correct: false,
        },
        {
          text: "১৭",
          correct: false,
        },
        {
          text: "১০",
          correct: true,
        },
        {
          text: "৯",
          correct: false,
        },
      ],
    },
  ];



  return (
    <div className="app">
      <div className="main">
        {timeOut ? (
          <h1 className="endText">তোমার {count} টি উত্তর সঠিক হয়েছে</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer
                  setTimeOut={setTimeOut}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
                />
              </div>
            </div>
            <div className="bottom">
              <QuizCore
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
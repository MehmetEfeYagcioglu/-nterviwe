import { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "Fransa'nın başkenti nedir?",
    options: ["New York", "Londra", "Paris", "Berlin"],
    correctAnswer: "Paris",
  },
  {
    question: "Tesla'nın kurucusu kimdir?",
    options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
    correctAnswer: "Elon Musk",
  },
  {
    question: "Iphone hangi firmanın markasıdır?",
    options: ["Apple", "Intel", "Amazon", "Microsoft"],
    correctAnswer: "Apple",
  },
  {
    question: "Kaç tane Harry Potter kitabı vardır?",
    options: ["1", "4", "6", "7"],
    correctAnswer: "7",
  },
  {
    question: "Pisa Kulesi hangi ülkede bulunur?",
    options: ["Türkiye", "İtalya", "Hollanda", "Almanya"],
    correctAnswer: "İtalya",
  },
];

function App() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizFinished(true);
      if (score + 1 === questions.length) {
        setShowText(true);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
    setShowText(false);
  };

  return (
    <>
      <br />
      <div className="title text-center text-4xl font-bold">Test Sayfası</div>
      <br />
      <br />
      <div className="quiz-app bg-gray-700 p-4 rounded-lg shadow-lg">
        {!quizFinished ? (
          <div className="questions-area p-4 bg-gray-400 rounded shadow-md">
            <div className="question-section text-center">
              <div className="question-count text-2xl">
                <span>Soru {currentQuestion + 1} / {questions.length}</span>
              </div>
              <br />
              <div className="question-text text-xl">
                {questions[currentQuestion].question}
              </div>
            </div>

            <div className="answer-section text-center">
              {questions[currentQuestion].options.map((option) => (
                <button
                  className="answer-button m-2 p-2 bg-slate-700 text-white rounded hover:bg-slate-900"
                  key={option}
                  onClick={() => handleAnswerOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="score-area text-center text-3xl text-slate-200">
            {questions.length} soruda {score} doğru cevabın var
            <br />
            {showText && <p>Tüm soruları doğru cevapladınız.</p>}
            <br />
            <button
              className="restart-button m-2 p-2 bg-green-500 text-white rounded hover:bg-neutral-500"
              onClick={resetQuiz}
            >
              Yeniden Başla
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

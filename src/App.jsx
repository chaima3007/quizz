/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

const App = () => {
  const [step, setStep] = useState("home");
  const [score, setScore] = useState(0);

  const startQuiz = () => setStep("quiz");
  const endQuiz = (finalScore) => {
    setScore(finalScore);
    setStep("result");
  };
  const restartQuiz = () => setStep("home");

  return (
    <div className="app-container">
      {step === "home" && <Home startQuiz={startQuiz} />}
      {step === "quiz" && <Quiz endQuiz={endQuiz} />}
      {step === "result" && <Result score={score} restartQuiz={restartQuiz} />}
    </div>
  );
};

export default App;

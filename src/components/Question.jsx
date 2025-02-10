/* eslint-disable react/prop-types */

// import Result from "./Result";


function Question({questions, currentIndex, selectedAnswer, handleAnswerClick,handleNextQuestion}) {
  return (
    <div className="quiz-card">
          <h2 className="question-title">{questions[currentIndex]?.question || "Question indisponible"}</h2>
          <div className="answers-container">
            {questions[currentIndex]?.incorrect_answers &&
              [...questions[currentIndex].incorrect_answers, questions[currentIndex].correct_answer]
                
                .map((answer, index) => (
                  <button
                    key={index}
                    className={`answer-btn ${selectedAnswer === answer ? "selected" : ""}`}
                    onClick={() => handleAnswerClick(answer)}
                  >
                    {answer}
                  </button>
                ))}
          </div>
          <button className="submit-btn" onClick={handleNextQuestion} disabled={!selectedAnswer}>
            Envoyer
          </button>

         

          {/* <Result score={score} /> */}
          
        </div>
  );
}

export default Question;
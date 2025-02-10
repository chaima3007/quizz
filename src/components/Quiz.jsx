/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './quiz.css'; // Import des styles
import Question from './Question';
import Result from './Result';

const Quiz = ({ endQuiz }) => {
	const [questions, setQuestions] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
    // loading est une variable d'état qui 
    // permet de suivre si les données sont en train d'être chargées.
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null); // Gestion des erreurs
	const [quizStarted, setQuizStarted] = useState(false);
	const [score, setScore] = useState(0);
	const [count, setCount] = useState(0);

	// Fonction pour récupérer les questions avec gestion des erreurs
	const fetchQuestions = async () => {
		setLoading(true);
		setError(null);
		try {
			const response = await fetch(
				'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy'
			);

			if (!response.ok) {
				throw new Error(
					`Erreur API: ${response.status} - Trop de requêtes`
				);
			}

			const data = await response.json();

			if (!data.results || data.results.length === 0) {
				throw new Error('Aucune question trouvée !');
			}

			setQuestions(data.results);
			setCurrentIndex(0);
			setSelectedAnswer(null);
			setQuizStarted(true);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	// Gérer la sélection de réponse
	const handleAnswerClick = (answer) => {
		setSelectedAnswer(answer);
		if (answer === questions[currentIndex].correct_answer) {
			setScore(score + 1);
		}
	};

	// Passer à la question suivante
	const handleNextQuestion = () => {
		if (currentIndex < questions.length - 1) {
			setCurrentIndex(currentIndex + 1);
			setSelectedAnswer(null);
		} else {
			endQuiz(); // Fin du quiz
			setQuizStarted(false);
		}
		setCount(count + 1);
	};

	return (
		<div className="quiz-container">
            {!quizStarted &&count >= 10 ? (
				<div>
					{/* ...existing code... */}
					<Result score={score} /> {/* Ensure Result is imported */}
				</div>
			) : null}
			{!quizStarted ? (
				<button
					className="start-btn"
					onClick={fetchQuestions}
					disabled={loading}
				>
					{loading ? 'Chargement...' : 'Démarrer le Quiz'}
				</button>
			) : null}

			{quizStarted && error ? (
				<div className="error-message">
					<p>❌ {error}</p>
					<button onClick={fetchQuestions}>Réessayer</button>
				</div>
			) : null}

			{quizStarted && !error && questions.length > 0 ? (
				// je veux afficher la composante Question qui est la "import Question from "./Question""
				<Question
					questions={questions}
					currentIndex={currentIndex}
					selectedAnswer={selectedAnswer}
					handleAnswerClick={handleAnswerClick}
					handleNextQuestion={handleNextQuestion}
					// score={score}
				/>
			) : null}

			

		</div>
	);
};

export default Quiz;

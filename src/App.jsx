import Quiz from './components/Quiz';
import Home from './components/Home';

function App() {
	return (
		<>
			<Home />
			<Quiz
				endQuiz={() => {
					console.log('end quizz');
				}}
			/>
		</>
	);
}

export default App;

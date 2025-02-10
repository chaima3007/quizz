import { useState } from 'react';
import './Home.css';
import Logo from '../../images/logo.png';
import Quiz from './Quiz';


function Home() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <>
        <div className="Home-body" style={{ display: isVisible ? 'block' : 'none' }}>
           <div>
                    <div className="header">
                        <img src={Logo} alt="logo" />
                        <h1>Prêt à tester tes connaissances ? 🌟</h1>
                    </div>

                    <div className="content-center">
                        <h2>Challenge-toi avec notre super quizz interactif !</h2>
                        <p>10 questions, 4 réponses, un seul champion. Réussiras-tu à atteindre le score parfait ?</p>

                        <button className="btn" onClick={() => setIsVisible(false)}>
                            <div>GET STARTED</div>
                            <svg fill="none" viewBox="0 0 24 24" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" stroke="black" d="M11.6801 14.62L14.2401 12.06L11.6801 9.5"></path>
                                <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" stroke="black" d="M4 12.0601H14.17"></path>
                                <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" stroke="black" d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"></path>
                            </svg>
                        </button>
                    </div>
                </div>
        </div>
        <div className="Home-body" style={{ display: isVisible ? 'none' : 'block' }}>
            <Quiz
                            endQuiz={() => {
                                console.log('end quizz');
                            }}
                        />
        </div>

        </>
    );
}

export default Home;
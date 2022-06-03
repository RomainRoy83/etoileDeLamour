import { Link } from "react-router-dom";
import React, {useState} from 'react';
import '../css/Questions.css';


function Questions() {
const quizz = [
    { 
      questionText : "Pour vous, un Ewok c'est... ",
      answerPossibilities: [
          {answerText : 'Un ami', isCorrect: true},
          {answerText : 'Un rôti', isCorrect: false},
      ],  
    },
    { 
        questionText : "Vous apprenez être l'enfant de Dark Vador, vous vous dîtes...",
        answerPossibilities: [
            {answerText: "Le cauchemar !", isCorrect: true},
            {answerText: "Le rêve !", isCorrect: false},
        ],  
      },
      { 
        questionText : 'Votre date idéal serait ...',
        answerPossibilities: [
            {answerText: 'Un pique-nique sur Naboo', isCorrect: true},
            {answerText: 'Une soirée "ordre 66" dans une école Jedi', isCorrect: false},
        ],  
      },
      { 
        questionText : "Eradiquer une population entière, c'est...",
        answerPossibilities: [
            {answerText: 'Inconcevable', isCorrect: true},
            {answerText: 'Parfois nécessaire', isCorrect: false},
        ],  
      },
      { 
        questionText : "Vos vêtements sont plutôt ...",
        answerPossibilities: [
            {answerText: 'clair et aéré', isCorrect: true},
            {answerText: 'sombre et passe-partout', isCorrect: false},
        ],  
      },
      { 
        questionText : "Êtes-vous végétarien ?",
        answerPossibilities: [
            {answerText: 'Oui', isCorrect: true},
            {answerText: 'Non', isCorrect: false},
        ],  
      },
      { 
        questionText : 'On vous offre un sabre laser...',
        answerPossibilities: [
            {answerText: "j'attends de savoir l'utiliser", isCorrect: true},
            {answerText: "Pourquoi attendre ?", isCorrect: false},
        ],  
      },
      { 
        questionText : 'Êtes-vous courageux ?',
        answerPossibilities: [
            {answerText: 'Oui', isCorrect: true},
            {answerText: 'Non', isCorrect: false},
        ],  
      },
      { 
        questionText : "Un génie vous offre un voeu, vous désireriez ...",
        answerPossibilities: [
            {answerText: 'La paix dans le monde', isCorrect: true},
            {answerText: "Devenir maître de l'univers", isCorrect: false},
        ],  
      },
      { 
        questionText : "En tant que leader de groupe, vous êtes...",
        answerPossibilities: [
            {answerText: 'Le plus sage', isCorrect:true},
            {answerText: 'Le plus fort', isCorrect: false},
        ],  
      },
      { 
        questionText : 'Vous préférez ?',
        answerPossibilities: [
            {answerText: 'La méditation', isCorrect: true},
            {answerText: 'Les bastons', isCorrect: false},
        ],  
      },
      { 
        questionText : 'De quoi ai-je horreur',
        answerPossibilities: [
            {answerText: 'De rester seul.e', isCorrect: true},
            {answerText: 'De répondre à ce questionnaire !!', isCorrect: false},
        ],  
      },
];

  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

	  const nextQuestion = currentQuestion + 1;
		if (nextQuestion < quizz.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
};

return (
  <div className='box-quizz'>
    {showScore ? (
      <div className='score-section'>
        Vous avez obtenu {score} points sur {quizz.length} ! 
        {score >= 6 ?<Link to="/LightSide"> <button> Light cruise </button></Link> : <Link to="/DarkSide"><button className='dark-cruise-button'> Dark cruise </button></Link>} 
      </div>
      
    ) : (
      <>
        <div className='question-section'>
          <div className='question-count'>
            <p id="p-title">🛸 Répondez à ces questions pour savoir quelle croisière est faite pour vous 🛸 ...</p>

            <span> Question {currentQuestion + 1}</span> sur {quizz.length}
          </div>
          <div className='question-text'>{quizz[currentQuestion].questionText}</div>
        </div>
        <div className='answer-section'>
          {console.log("objet:", quizz[currentQuestion].answerPossibilities)}
          {quizz[currentQuestion].answerPossibilities.map((answerOption) => (
            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
          ))}
        </div>
      </>
    )}
  </div>
);
}


export default Questions;

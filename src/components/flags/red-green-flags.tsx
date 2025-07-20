import { useState, useMemo } from 'react';
import allQuestions from './flags';
import getResultMessage from './resultsMessage';

const NUMBER_OF_QUESTIONS_ASKED = 5;

export default function RedGreenFlagsQuiz() {
  const [questions, setQuestions] = useState(() => {
    const greenQuestions = allQuestions.filter((q) => q.colour === 'green');
    const redQuestions = allQuestions.filter((q) => q.colour === 'red');

    const selectedGreen = [...greenQuestions].sort(() => 0.5 - Math.random()).slice(0, NUMBER_OF_QUESTIONS_ASKED);
    const selectedRed = [...redQuestions].sort(() => 0.5 - Math.random()).slice(0, NUMBER_OF_QUESTIONS_ASKED);

    return [...selectedGreen, ...selectedRed].sort(() => 0.5 - Math.random());
  });

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showAllFlags, setShowAllFlags] = useState(false);

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers, [currentQuestion]: answer };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setShowAllFlags(false);

    const greenQuestions = allQuestions.filter((q) => q.colour === 'green');
    const redQuestions = allQuestions.filter((q) => q.colour === 'red');

    const selectedGreen = [...greenQuestions].sort(() => 0.5 - Math.random()).slice(0, NUMBER_OF_QUESTIONS_ASKED);
    const selectedRed = [...redQuestions].sort(() => 0.5 - Math.random()).slice(0, NUMBER_OF_QUESTIONS_ASKED);

    setQuestions([...selectedGreen, ...selectedRed].sort(() => 0.5 - Math.random()));
  };

  const result = useMemo(() => {
    let greenCorrect = 0;
    let redCorrect = 0;
    let greenFlags = [];
    let redFlags = [];

    questions.forEach((question, index) => {
      const answer = answers[index];

      if (question.colour === 'green' && answer === 'yes') {
        greenCorrect++;
        greenFlags.push(question.flag);
      } else if (question.colour === 'red' && answer === 'yes') {
        redCorrect++;
        redFlags.push(question.flag);
      }
    });

    const netScore = greenCorrect - redCorrect;
    const maxPossibleScore = NUMBER_OF_QUESTIONS_ASKED;
    const minPossibleScore = -NUMBER_OF_QUESTIONS_ASKED;

    return {
      greenCorrect,
      redCorrect,
      netScore,
      maxPossibleScore,
      minPossibleScore,
      greenFlags,
      redFlags,
    };
  }, [questions, answers]);

  const resultMessage = useMemo(() => {
    return getResultMessage(result.greenCorrect, result.redCorrect, result.maxPossibleScore);
  }, [result.greenCorrect, result.redCorrect, result.maxPossibleScore]);

  if (showResults) {
    const allGreenFlags = allQuestions.filter((q) => q.colour === 'green').map((q) => q.flag);
    const allRedFlags = allQuestions.filter((q) => q.colour === 'red').map((q) => q.flag);

    return (
      <div className="max-w-4xl sm:px-6 space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Quiz Results!</h1>

          <div className="bg-white rounded-lg shadow-lg p-4 my-4">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {result.greenCorrect}/{result.maxPossibleScore}
                </div>
                <div className="text-green-700 text-sm">Green Flags 💚</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">
                  {result.redCorrect}/{result.maxPossibleScore}
                </div>
                <div className="text-red-700 text-sm">Red Flags 🚩</div>
              </div>
            </div>

            <div className="text-lg font-medium text-center p-4 bg-gray-50 rounded-lg mb-4">{resultMessage}</div>

            <div className="grid md:grid-cols-2 gap-4 mb-4 md:gap-6 text-left">
              {result.greenFlags.length > 0 && (
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">💚 Your Green Flags</h3>
                  <ul className="space-y-2">
                    {result.greenFlags.map((flag, index) => (
                      <li key={index} className="text-green-700 text-sm">
                        {flag}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {result.redFlags.length > 0 && (
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">🚩 Your Red Flags</h3>
                  <ul className="space-y-2">
                    {result.redFlags.map((flag, index) => (
                      <li key={index} className="text-red-700 text-sm">
                        {flag}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setShowAllFlags(!showAllFlags)}
                className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                {showAllFlags ? 'Hide All Flags' : 'Show All Flags'}
              </button>

              {showAllFlags && (
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">💚 All Green Flags</h3>
                    <ol className="space-y-1">
                      {allGreenFlags.map((flag, index) => (
                        <li key={index} className="text-green-700 text-sm">
                          {flag}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-800 mb-3">🚩 All Red Flags</h3>
                    <ol className="space-y-1">
                      {allRedFlags.map((flag, index) => (
                        <li key={index} className="text-red-700 text-sm">
                          {flag}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}

              <button
                onClick={resetQuiz}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Take Quiz Again (with different questions)
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">
            {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="mb-6 h-40 text-center flex items-center justify-center bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold p-4 leading-relaxed">{questions[currentQuestion].question}</h2>
        </div>

        <div className="grid-cols-2 grid gap-4">
          <button
            onClick={() => handleAnswer('yes')}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Yes
          </button>
          <button
            onClick={() => handleAnswer('no')}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

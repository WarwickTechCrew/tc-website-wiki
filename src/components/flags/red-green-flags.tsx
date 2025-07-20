import { useState } from 'react';

const NUMBER_OF_QUESTIONS_ASKED = 5;

export default function RedGreenFlagsQuiz() {
  const allQuestions = [
    {
      question: 'Are you/have you been/are you open to being a Tech Crew (or associate) member?',
      colour: 'green',
      flag: 'Is/has been/is open to being a Tech Crew (or associate) member',
    },
    { question: 'Do you contribute to the TC Wiki?', colour: 'green', flag: 'Contributes to the TC Wiki' },
    {
      question: 'Do you want to trade hoodies (or other clothes)?',
      colour: 'green',
      flag: 'Wants to trade hoodies (or other clothes)',
    },
    {
      question: 'Do you offer to wash up if someone else cooks?',
      colour: 'green',
      flag: 'Offers to wash up if you cook',
    },
    { question: "Do you get on with your partner's siblings?", colour: 'green', flag: 'Gets on with your siblings' },
    { question: 'Would you come to parkrun and pancakes?', colour: 'green', flag: 'Comes to parkrun and pancakes' },
    {
      question: 'Do you listen to songs that are recommended to you?',
      colour: 'green',
      flag: 'Listens to song you recommended',
    },
    {
      question: 'Do you know the difference between DMX and XLR cable?',
      colour: 'green',
      flag: 'Knows the difference between DMX and XLR cable',
    },
    {
      question: "Does Trin's mum get a 'good vibe' from you?",
      colour: 'green',
      flag: 'Trin\'s mum gets a "good vibe" from them',
    },
    { question: 'Do you shower frequently?', colour: 'green', flag: 'Showers frequently' },
    {
      question: 'Do you wait for everyone to have food before starting (within reason)?',
      colour: 'green',
      flag: 'Waits for everyone to have food before starting (within reason)',
    },
    {
      question: "Do you offer to paint someone's other hand when they're painting their nails?",
      colour: 'green',
      flag: "Offers to paint your other hand when you're painting your nails",
    },
    {
      question: 'Have you watched MCU up til phase 4 (or are you open to watch them)?',
      colour: 'green',
      flag: 'Has watched MCU up til phase 4 (or is open to watch them)',
    },
    {
      question: "Do you say 'happy tomorrow' at midnight not 'happy today'?",
      colour: 'green',
      flag: 'Says "happy tomorrow" at midnight not "happy today"',
    },
    { question: 'Do you join discord vc?', colour: 'green', flag: 'Joins discord vc' },
    { question: 'Do you have soft toys?', colour: 'green', flag: 'Has soft toys' },
    {
      question: 'Do you like Swedish meatballs (if not vegetarian)?',
      colour: 'green',
      flag: 'Likes Swedish meatballs (if not vegetarian)',
    },
    { question: 'Do you like spontaneous IKEA trips?', colour: 'green', flag: 'Likes spontaneous IKEA trips' },
    { question: 'Do you appreciate kids animated movies?', colour: 'green', flag: 'Appreciates kids animated movies' },
    {
      question: "Would you refuse to borrow someone's hoodie because of gender stereotypes?",
      colour: 'red',
      flag: "Won't borrow your hoodie because of gender stereotypes",
    },
    { question: "Do your partner's siblings hate you?", colour: 'red', flag: 'Siblings hate them' },
    { question: 'Do you hate parkrun?', colour: 'red', flag: 'Hates parkrun' },
    {
      question: "Does Trin's mum get a 'bad vibe' from you?",
      colour: 'red',
      flag: 'Trin\'s mum gets a "bad vibe" from them',
    },
    {
      question: 'Do you grow mould in your room (not for the sake of science)?',
      colour: 'red',
      flag: 'Grows mould in their room (not for the sake of science)',
    },
    { question: 'Do you dislike cats?', colour: 'red', flag: "Doesn't like cats" },
    { question: "Do you avoid talking to Trin's mum?", colour: 'red', flag: "Doesn't talk to Trin's mum" },
    { question: 'Do you refuse to do ski pole ears?', colour: 'red', flag: "Doesn't do ski pole ears" },
    {
      question: 'Do you not wave back at people who wave at you?',
      colour: 'red',
      flag: "Doesn't wave back at people who wave at them",
    },
    { question: "Do you not react to Josh's sad face?", colour: 'red', flag: "Doesn't react to Josh's sad face" },
  ];

  // Select random questions - NUMBER_OF_QUESTIONS_ASKED of each type
  const [questions] = useState(() => {
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

  const calculateScore = () => {
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
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setShowAllFlags(false);
    // Generate new random questions - NUMBER_OF_QUESTIONS_ASKED of each type
    const greenQuestions = allQuestions.filter((q) => q.colour === 'green');
    const redQuestions = allQuestions.filter((q) => q.colour === 'red');

    const selectedGreen = [...greenQuestions].sort(() => 0.5 - Math.random()).slice(0, NUMBER_OF_QUESTIONS_ASKED);
    const selectedRed = [...redQuestions].sort(() => 0.5 - Math.random()).slice(0, NUMBER_OF_QUESTIONS_ASKED);

    const newQuestions = [...selectedGreen, ...selectedRed].sort(() => 0.5 - Math.random());
    questions.splice(0, questions.length, ...newQuestions);
  };

  const getResultMessage = (greenFlags, redFlags, maxScore) => {
    // max green flags
    if (greenFlags === maxScore && redFlags === 0) {
      return "🌟 Perfect! You're basically the ideal person :D";
    }
    if (greenFlags === maxScore && redFlags === 1) {
      return '💚 oh my- you have,, is that all? all the green flags??? but you manage to stay cool and edgy with your single red flag.. i- you- us, we? we could be. are you single?';
    }
    if (greenFlags === maxScore && redFlags === maxScore) {
      return `💚💔 Woah, how did you get all the flags??? you didn't just spam the yes button did you ????`;
    }
    if (greenFlags === maxScore && redFlags > 0) {
      return `💚 Amazing green flags, you have them ALL, but hmmm ${redFlags} red flag${redFlags > 1 ? 's' : ''} to work on... can I tell you a secret? even the best people have flaws. It's what you do with them that counts.`;
    }
    // some green flags but not all
    if (redFlags === 0 && greenFlags > 0) {
      return `✨ Clean slate with no red flags! ${'yip '.repeat(greenFlags).trim()}peeeee`;
    }
    if (greenFlags >= maxScore * 0.8 && redFlags <= 1) {
      return '💚 Yippeee! Lots of green flags with minimal red ones! I think i can fix you';
    }
    if (greenFlags > redFlags) {
      return `✅ Prettyyyyy gooooooood ${greenFlags} green flags outweigh ${redFlags} red flag${redFlags > 1 ? 's' : ''}!`;
    }
    if (greenFlags === redFlags && greenFlags > 0) {
      return "woah... Perfectly balanced - equal green and red flags. i- i don't know what to say. this has never happened before. you fall deeper in cosmic harmony with the universe every passing day. i- want to be you.";
    }
    if (redFlags > greenFlags && greenFlags > 0) {
      return `😬 Concerning... - ${redFlags} red flags vs ${greenFlags} green flag${greenFlags > 1 ? 's' : ''}. I'm not sure if we can be friends anymore...`;
    }
    // no green flags
    if (redFlags > 0 && greenFlags === 0) {
      return `🚩 Yikes... ${redFlags} red flag${redFlags > 1 ? 's' : ''} and no green ones... how will you redeem yourself (commit to tc wiki)`;
    }
    if (redFlags === 0 && greenFlags === 0) {
      return "did you just spam the no button :( that's okay i guess.. i still love you.";
    }
    return '⚖️ Mixed results - room for improvement!';
  };

  if (showResults) {
    const { greenCorrect, redCorrect, netScore, maxPossibleScore, greenFlags, redFlags } = calculateScore();

    const allGreenFlags = allQuestions.filter((q) => q.colour === 'green').map((q) => q.flag);
    const allRedFlags = allQuestions.filter((q) => q.colour === 'red').map((q) => q.flag);

    return (
      <div className="max-w-4xl sm:px-6  space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Quiz Results!</h1>

          <div className="bg-white rounded-lg shadow-lg p-4 my-4">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{greenCorrect}</div>
                <div className="text-green-700 text-sm">Green Flags 💚</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">{redCorrect}</div>
                <div className="text-red-700 text-sm">Red Flags 🚩</div>
              </div>
            </div>

            <div className="text-lg font-medium text-center p-4 bg-gray-50 rounded-lg mb-4">
              {getResultMessage(greenCorrect, redCorrect, maxPossibleScore)}
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4 md:gap-6 text-left">
              {greenFlags.length > 0 && (
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">💚 Your Green Flags</h3>
                  <ul className="space-y-2">
                    {greenFlags.map((flag, index) => (
                      <li key={index} className="text-green-700 text-sm">
                        {flag}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {redFlags.length > 0 && (
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">🚩 Your Red Flags</h3>
                  <ul className="space-y-2">
                    {redFlags.map((flag, index) => (
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
                    <ul className="space-y-1">
                      {allGreenFlags.map((flag, index) => (
                        <li key={index} className="text-green-700 text-sm">
                          {flag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-800 mb-3">🚩 All Red Flags</h3>
                    <ul className="space-y-1">
                      {allRedFlags.map((flag, index) => (
                        <li key={index} className="text-red-700 text-sm">
                          {flag}
                        </li>
                      ))}
                    </ul>
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

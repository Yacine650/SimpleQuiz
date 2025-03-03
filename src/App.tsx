import React, { useState, useEffect } from 'react';
import { levels, Level, Question } from './data/questions';
import LevelCard from './components/LevelCard';
import QuizQuestion from './components/QuizQuestion';
import ResultScreen from './components/ResultScreen';
import { Brain } from 'lucide-react';

// Game states
type GameState = 'selection' | 'quiz' | 'results';

function App() {
  const [gameState, setGameState] = useState<GameState>('selection');
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);

  // Handle level selection
  const handleLevelSelect = (level: Level) => {
    setSelectedLevel(level);
    setGameState('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
    setCorrectAnswers(0);
    setStartTime(Date.now());
  };

  // Handle answer selection
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + (selectedLevel?.questions[currentQuestionIndex].points || 0));
      setCorrectAnswers(prev => prev + 1);
    }
    
    // Move to next question after a delay
    setTimeout(() => {
      moveToNextQuestion();
    }, 1500);
  };

  // Handle time up
  const handleTimeUp = () => {
    moveToNextQuestion();
  };

  // Move to next question or end quiz
  const moveToNextQuestion = () => {
    if (!selectedLevel) return;
    
    if (currentQuestionIndex < selectedLevel.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // End of quiz
      setTimeTaken(Math.floor((Date.now() - startTime) / 1000));
      setGameState('results');
    }
  };

  // Retry the same level
  const handleRetry = () => {
    if (selectedLevel) {
      handleLevelSelect(selectedLevel);
    }
  };

  // Go back to level selection
  const handleBackToLevels = () => {
    setGameState('selection');
    setSelectedLevel(null);
  };

  // Current question
  const currentQuestion: Question | undefined = 
    selectedLevel?.questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center py-10 px-4">
      {/* Header */}
      <header className="mb-10 text-center">
        <div className="flex items-center justify-center mb-2">
          <Brain size={32} className="text-indigo-600 mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">Brain Quest</h1>
        </div>
        <p className="text-gray-600">Test your knowledge with our multi-level quiz game!</p>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-6xl">
        {gameState === 'selection' && (
          <div>
            <h2 className="text-2xl font-bold text-center mb-8">Select Difficulty Level</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {levels.map(level => (
                <LevelCard 
                  key={level.id} 
                  level={level} 
                  onSelect={handleLevelSelect} 
                />
              ))}
            </div>
          </div>
        )}

        {gameState === 'quiz' && selectedLevel && currentQuestion && (
          <div className="flex flex-col items-center">
            <div className="w-full max-w-3xl mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-medium">
                  Level: {selectedLevel.name}
                </span>
                <span className="text-gray-700 font-medium">
                  Question {currentQuestionIndex + 1}/{selectedLevel.questions.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-indigo-600 h-2 rounded-full" 
                  style={{ width: `${((currentQuestionIndex + 1) / selectedLevel.questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <QuizQuestion 
              question={currentQuestion}
              timeLimit={selectedLevel.timePerQuestion}
              onAnswer={handleAnswer}
              onTimeUp={handleTimeUp}
            />
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">Score: {score} points</p>
            </div>
          </div>
        )}

        {gameState === 'results' && selectedLevel && (
          <div className="flex justify-center">
            <ResultScreen 
              level={selectedLevel}
              score={score}
              correctAnswers={correctAnswers}
              totalQuestions={selectedLevel.questions.length}
              timeTaken={timeTaken}
              onRetry={handleRetry}
              onBackToLevels={handleBackToLevels}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto pt-10 text-center text-gray-500 text-sm">
        <p>© 2025 Brain Quest. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
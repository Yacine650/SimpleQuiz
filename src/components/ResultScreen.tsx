import React from 'react';
import { Level } from '../data/questions';
import { Award, Clock, CheckCircle, XCircle } from 'lucide-react';

interface ResultScreenProps {
  level: Level;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  timeTaken: number;
  onRetry: () => void;
  onBackToLevels: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({
  level,
  score,
  correctAnswers,
  totalQuestions,
  timeTaken,
  onRetry,
  onBackToLevels
}) => {
  // Calculate percentage
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  // Determine message based on percentage
  const getMessage = () => {
    if (percentage >= 80) return "Excellent job!";
    if (percentage >= 60) return "Good work!";
    if (percentage >= 40) return "Nice try!";
    return "Keep practicing!";
  };

  // Format time taken
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
      <h2 className="text-2xl font-bold text-center mb-2">Quiz Results</h2>
      <p className="text-gray-600 text-center mb-6">Level: {level.name}</p>
      
      <div className="flex justify-center mb-8">
        <div className="relative w-40 h-40">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle 
              className="text-gray-200" 
              strokeWidth="10"
              stroke="currentColor" 
              fill="transparent" 
              r="40" 
              cx="50" 
              cy="50" 
            />
            <circle 
              className={`${
                percentage >= 80 ? 'text-green-500' : 
                percentage >= 60 ? 'text-yellow-500' : 
                'text-red-500'
              }`}
              strokeWidth="10"
              strokeDasharray={`${percentage * 2.51} 251`}
              strokeLinecap="round"
              stroke="currentColor" 
              fill="transparent" 
              r="40" 
              cx="50" 
              cy="50" 
            />
          </svg>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="text-3xl font-bold">{percentage}%</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center">
            <Award className="text-blue-500 mr-2" size={20} />
            <span className="text-gray-700">Score</span>
          </div>
          <p className="text-2xl font-bold">{score} points</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center">
            <Clock className="text-blue-500 mr-2" size={20} />
            <span className="text-gray-700">Time</span>
          </div>
          <p className="text-2xl font-bold">{formatTime(timeTaken)}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={20} />
            <span className="text-gray-700">Correct</span>
          </div>
          <p className="text-2xl font-bold">{correctAnswers}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center">
            <XCircle className="text-red-500 mr-2" size={20} />
            <span className="text-gray-700">Incorrect</span>
          </div>
          <p className="text-2xl font-bold">{totalQuestions - correctAnswers}</p>
        </div>
      </div>
      
      <p className="text-xl font-medium text-center mb-6">{getMessage()}</p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={onRetry}
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-md transition-colors"
        >
          Try Again
        </button>
        <button 
          onClick={onBackToLevels}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-md transition-colors"
        >
          Back to Levels
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
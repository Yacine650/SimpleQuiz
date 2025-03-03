import React, { useState, useEffect } from 'react';
import { Question } from '../data/questions';
import Timer from './Timer';

interface QuizQuestionProps {
  question: Question;
  timeLimit: number;
  onAnswer: (isCorrect: boolean) => void;
  onTimeUp: () => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ 
  question, 
  timeLimit, 
  onAnswer,
  onTimeUp
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedOption(null);
    setAnswered(false);
  }, [question.id]);

  const handleOptionSelect = (index: number) => {
    if (answered) return;
    
    setSelectedOption(index);
    setAnswered(true);
    
    const isCorrect = index === question.correctAnswer;
    onAnswer(isCorrect);
  };

  const getOptionClass = (index: number) => {
    if (!answered || selectedOption !== index) {
      return 'bg-white hover:bg-gray-50';
    }
    
    if (index === question.correctAnswer) {
      return 'bg-green-100 border-green-500';
    }
    
    return 'bg-red-100 border-red-500';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl w-full">
      <Timer 
        duration={timeLimit} 
        onTimeUp={onTimeUp}
        isActive={!answered}
      />
      
      <h2 className="text-xl font-bold mt-4 mb-6">{question.question}</h2>
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`w-full text-left p-4 border rounded-md transition-colors ${getOptionClass(index)}`}
            onClick={() => handleOptionSelect(index)}
            disabled={answered}
          >
            <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
          </button>
        ))}
      </div>
      
      {answered && (
        <div className="mt-6 text-center">
          <p className={selectedOption === question.correctAnswer ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>
            {selectedOption === question.correctAnswer ? 'Correct!' : 'Incorrect!'}
          </p>
          {selectedOption !== question.correctAnswer && (
            <p className="text-gray-700 mt-2">
              The correct answer is: {question.options[question.correctAnswer]}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;
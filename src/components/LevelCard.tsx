import React from 'react';
import { Level } from '../data/questions';
import { Brain, Clock, Award } from 'lucide-react';

interface LevelCardProps {
  level: Level;
  onSelect: (level: Level) => void;
}

const LevelCard: React.FC<LevelCardProps> = ({ level, onSelect }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer transform hover:scale-105 transition-transform duration-200"
      onClick={() => onSelect(level)}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">{level.name}</h3>
        <div className={`
          px-3 py-1 rounded-full text-sm font-semibold
          ${level.id === 1 ? 'bg-green-100 text-green-800' : 
            level.id === 2 ? 'bg-yellow-100 text-yellow-800' : 
            'bg-red-100 text-red-800'}
        `}>
          Level {level.id}
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{level.description}</p>
      
      <div className="flex flex-col space-y-2">
        <div className="flex items-center text-gray-700">
          <Brain size={18} className="mr-2" />
          <span>{level.questions.length} Questions</span>
        </div>
        
        <div className="flex items-center text-gray-700">
          <Clock size={18} className="mr-2" />
          <span>{level.timePerQuestion} seconds per question</span>
        </div>
        
        <div className="flex items-center text-gray-700">
          <Award size={18} className="mr-2" />
          <span>{level.questions[0].points} points per correct answer</span>
        </div>
      </div>
      
      <button 
        className={`
          mt-6 w-full py-2 px-4 rounded-md text-white font-medium
          ${level.id === 1 ? 'bg-green-500 hover:bg-green-600' : 
            level.id === 2 ? 'bg-yellow-500 hover:bg-yellow-600' : 
            'bg-red-500 hover:bg-red-600'}
          transition-colors duration-200
        `}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default LevelCard;
import React, { useEffect, useState } from 'react';

interface TimerProps {
  duration: number;
  onTimeUp: () => void;
  isActive: boolean;
}

const Timer: React.FC<TimerProps> = ({ duration, onTimeUp, isActive }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  
  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (!isActive) return;
    
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp, isActive]);

  // Calculate percentage for progress bar
  const percentage = (timeLeft / duration) * 100;
  
  // Determine color based on time left
  const getColor = () => {
    if (percentage > 60) return 'bg-green-500';
    if (percentage > 30) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">Time Left</span>
        <span className="text-sm font-medium">{timeLeft}s</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${getColor()}`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Timer;
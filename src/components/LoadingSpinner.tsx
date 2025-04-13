
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  color?: string;
}

const LoadingSpinner = ({ 
  size = 'medium', 
  className = '',
  color = 'custom-purple' 
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    small: 'h-4 w-4',
    medium: 'h-8 w-8',
    large: 'h-12 w-12',
  };

  return (
    <div className={`${className} flex items-center justify-center`}>
      <div 
        className={`${sizeClasses[size]} border-4 border-white/10 border-t-${color} rounded-full animate-spin`}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
};

export default LoadingSpinner;

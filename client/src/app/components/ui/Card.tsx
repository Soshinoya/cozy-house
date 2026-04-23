import React from 'react';
import { CardProps } from '../../../types';

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-[#fafafa] rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-xl ${className}`}>
      {children}
    </div>
  );
};

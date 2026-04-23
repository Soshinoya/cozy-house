import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'mobile' | 'tablet' | 'desktop' | 'max';
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '',
  maxWidth = 'max'
}) => {
  const maxWidthStyles = {
    mobile: 'max-w-[20rem]',
    tablet: 'max-w-[48rem]',
    desktop: 'max-w-[64rem]',
    max: 'max-w-[90rem]'
  };

  return (
    <div className={`${maxWidthStyles[maxWidth]} mx-auto px-5 md:px-8 lg:px-16 ${className}`}>
      {children}
    </div>
  );
};

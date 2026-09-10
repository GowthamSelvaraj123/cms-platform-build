import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`bg-white shadow rounded-lg overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`px-4 py-5 sm:px-6 border-b border-gray-200 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardBody({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`px-4 py-5 sm:p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`px-4 py-4 sm:px-6 border-t border-gray-200 bg-gray-50 ${className}`} {...props}>
      {children}
    </div>
  );
}

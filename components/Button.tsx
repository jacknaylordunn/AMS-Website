import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button',
  size = 'md'
}) => {
  const baseStyles = "inline-flex items-center justify-center font-heading font-semibold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variants = {
    primary: "border border-transparent text-white bg-aegis-navy hover:bg-aegis-blue focus:ring-aegis-navy shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    secondary: "border border-transparent text-white bg-aegis-teal hover:bg-teal-700 focus:ring-aegis-teal shadow-md hover:shadow-lg hover:-translate-y-0.5",
    outline: "border-2 border-aegis-navy text-aegis-navy bg-transparent hover:bg-aegis-navy hover:text-white focus:ring-aegis-navy",
    white: "border border-transparent text-aegis-navy bg-white hover:bg-gray-50 focus:ring-white shadow-lg hover:shadow-xl"
  };

  const combinedStyles = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};

export default Button;
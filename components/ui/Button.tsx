import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-200 ease-out font-bold tracking-wide focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed rounded-full";
  
  const variants = {
    primary: "bg-accent-500 text-white hover:bg-brand-black hover:shadow-lg border border-transparent",
    dark: "bg-brand-black text-white hover:bg-accent-500 hover:shadow-lg border border-transparent",
    outline: "bg-transparent border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white hover:border-brand-black",
    ghost: "bg-transparent text-brand-gray hover:text-brand-black"
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-8 py-3.5 text-base",
    lg: "px-10 py-5 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
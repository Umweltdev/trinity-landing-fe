/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface GlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  [key: string]: any;
}

const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
  type = 'button',
  ...props
}) => {
  // Variant styles
  const variants = {
    primary: 'bg-blue-500/20 border-blue-400/30 hover:bg-blue-500/30 text-blue-100',
    secondary: 'bg-gray-500/20 border-gray-400/30 hover:bg-gray-500/30 text-gray-100',
    success: 'bg-green-500/20 border-green-400/30 hover:bg-green-500/30 text-green-100',
    danger: 'bg-red-500/20 border-red-400/30 hover:bg-red-500/30 text-red-100',
    warning: 'bg-yellow-500/20 border-yellow-400/30 hover:bg-yellow-500/30 text-yellow-100',
  };

  // Size styles
  const sizes = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const baseStyles = `
    inline-flex items-center justify-center
    backdrop-blur-md
    border
    rounded-lg
    font-medium
    transition-all duration-200
    shadow-lg
    hover:shadow-xl
    active:scale-95
    focus:outline-none focus:ring-2 focus:ring-white/50
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const glassEffect = `
    bg-white/10
    border-white/20
    hover:bg-white/15
    active:bg-white/20
  `;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${glassEffect}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default GlassButton;
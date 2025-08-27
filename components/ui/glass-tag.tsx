import React from 'react';

interface GlassTagProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  closable?: boolean;
  onClose?: () => void;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const GlassTag: React.FC<GlassTagProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  closable = false,
  onClose,
  className = '',
  ...props
}) => {
  // Variant styles
  const variants = {
    primary: 'bg-blue-500/20 border-blue-400/30 text-blue-100',
    secondary: 'bg-gray-500/20 border-gray-400/30 text-gray-100',
    success: 'bg-green-500/20 border-green-400/30 text-green-100',
    danger: 'bg-red-500/20 border-red-400/30 text-red-100',
    warning: 'bg-yellow-500/20 border-yellow-400/30 text-yellow-100',
    info: 'bg-cyan-500/20 border-cyan-400/30 text-cyan-100',
  };

  // Size styles
  const sizes = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-1 text-sm',
    large: 'px-4 py-2 text-base',
  };

  const baseStyles = `
    inline-flex items-center
    backdrop-blur-sm
    border
    rounded-full
    font-medium
    transition-all duration-150
  `;

  const glassEffect = `
    bg-white/5
    border-white/10
    hover:bg-white/10
  `;

  return (
    <span
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
      {closable && (
        <button
          onClick={onClose}
          className="ml-2 hover:text-white transition-colors"
          aria-label="Close tag"
        >
          ×
        </button>
      )}
    </span>
  );
};

export default GlassTag;
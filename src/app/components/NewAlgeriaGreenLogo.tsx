import React from 'react';
import logoImage from 'figma:asset/320c23ae99dc41b293b6bd17867c38abbd282e30.png';

interface NewAlgeriaGreenLogoProps {
  size?: number;
  className?: string;
}

export const NewAlgeriaGreenLogo: React.FC<NewAlgeriaGreenLogoProps> = ({ 
  size = 40,
  className = "" 
}) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <img
        src={logoImage}
        alt="Algeria Green Logo"
        width={size}
        height={size}
        className="w-full h-full object-contain drop-shadow-sm rounded-full"
      />
    </div>
  );
};

export default NewAlgeriaGreenLogo;
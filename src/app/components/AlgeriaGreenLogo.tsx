import React from 'react';

interface AlgeriaGreenLogoProps {
  size?: number;
  showCrescent?: boolean;
  className?: string;
}

export const AlgeriaGreenLogo: React.FC<AlgeriaGreenLogoProps> = ({ 
  size = 40, 
  showCrescent = true,
  className = "" 
}) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        {/* Main green circle background */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="#2ECC71"
          stroke="#ffffff"
          strokeWidth="2"
        />
        
        {/* Optional crescent outline for Algerian identity */}
        {showCrescent && (
          <path
            d="M 25 25 Q 50 15, 75 25 Q 50 85, 25 75 Q 50 35, 25 25"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
            opacity="0.3"
          />
        )}
        
        {/* Stylized red tree - main trunk */}
        <rect
          x="47"
          y="55"
          width="6"
          height="20"
          fill="#E74C3C"
          rx="3"
        />
        
        {/* Tree crown - main canopy */}
        <ellipse
          cx="50"
          cy="45"
          rx="18"
          ry="15"
          fill="#E74C3C"
        />
        
        {/* Tree crown - upper layer for depth */}
        <ellipse
          cx="50"
          cy="42"
          rx="14"
          ry="12"
          fill="#E74C3C"
          opacity="0.9"
        />
        
        {/* Small leaves/branches for detail */}
        <circle cx="42" cy="48" r="4" fill="#E74C3C" opacity="0.8" />
        <circle cx="58" cy="48" r="4" fill="#E74C3C" opacity="0.8" />
        <circle cx="50" cy="35" r="5" fill="#E74C3C" opacity="0.9" />
        
        {/* Subtle root system */}
        <path
          d="M 47 75 Q 40 78, 35 75 M 53 75 Q 60 78, 65 75"
          stroke="#E74C3C"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
        
        {/* White highlights for modern flat design */}
        <ellipse
          cx="48"
          cy="40"
          rx="3"
          ry="2"
          fill="#ffffff"
          opacity="0.4"
        />
        <circle
          cx="52"
          cy="37"
          r="1.5"
          fill="#ffffff"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};

export default AlgeriaGreenLogo;
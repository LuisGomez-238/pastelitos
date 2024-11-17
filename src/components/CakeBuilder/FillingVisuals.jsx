// New component for filling visualizations
import React from 'react';

const FillingVisuals = ({ type, position, width }) => {
  const patterns = {
    'fresh-strawberries': (
      <g className="strawberry-pattern">
        {[...Array(4)].map((_, i) => (
          <g key={i} transform={`translate(${60 + i * 50}, ${position})`}>
            <path
              d="M0,0 Q5,-8 10,0 T20,0"
              fill="#FF0000"
              className="strawberry"
            />
            <circle cx="10" cy="-2" r="1" fill="#00FF00" className="stem"/>
          </g>
        ))}
      </g>
    ),
    'nutella': (
      <g className="nutella-swirl">
        <path
          d={`M50,${position} 
            C100,${position - 5} 150,${position + 5} 250,${position}
            C150,${position + 8} 100,${position - 8} 50,${position}`}
          fill="#4A3728"
          opacity="0.8"
          className="nutella-wave"
        />
      </g>
    ),
    'cookies-cream': (
      <g className="cookies-pattern">
        {[...Array(6)].map((_, i) => (
          <g key={i} transform={`translate(${40 + i * 40}, ${position})`}>
            <circle cx="0" cy="0" r="4" fill="#333" className="cookie-bit"/>
            <circle cx="2" cy="2" r="1" fill="#FFF" className="cream-dot"/>
          </g>
        ))}
      </g>
    ),
    'triple-berry': (
      <g className="berry-pattern">
        {[...Array(8)].map((_, i) => (
          <circle
            key={i}
            cx={50 + i * 30}
            cy={position + (i % 2) * 4}
            r="3"
            fill={['#C41E3A', '#4F1271', '#8B0045'][i % 3]}
            className="berry"
          />
        ))}
      </g>
    ),
    // Add more filling patterns...
  };

  return patterns[type] || (
    <path
      d={`M40,${position} Q150,${position - 8} 260,${position}`}
      fill={getFillingColor(type)}
      className="basic-filling"
    />
  );
};

export default FillingVisuals; 
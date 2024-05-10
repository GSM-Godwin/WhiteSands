
import React from 'react';

const Button = ({ text, bg }) => {
  // Determine text and background colors based on the provided bg prop
  const textColorClass = bg === 'FF3514' ? 'text-white' : 'text-red-600';
  const bgColorClass = bg === 'FF3514' ? 'bg-red-600' : 'bg-white';

  return (
    <button
      className={`border border-red-600 ${textColorClass} ${bgColorClass} hover:bg-red-600 hover:text-white w-max px-7 py-3 text-sm`}
    >
      {text}
    </button>
  );
};

export default Button;

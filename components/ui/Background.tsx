import React from 'react';

const Background = ({ white, children }) => {
  const textBackgroundColorClass = white ? `bg-white}` : 'bg-slate-50';
    return (
    <div className={`${textBackgroundColorClass}`}>
      { children }
    </div>
    );
  };

export default Background;
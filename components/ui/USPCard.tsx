import React from 'react';
import Paragraph from './Base/Paragraph';
import H2 from './Base/H2';

const USPCard = ({ H2Text, ParagraphText }) => {
    return (
    <div className="p-10 text-center flex flex-col items-center justify-center rounded-md w-full h-full bg-slate-100 shadow-md hover:shadow-lg">
        <p>Icon</p>
        <H2 color={"black"} text={H2Text} />
        <Paragraph text={ParagraphText} color={"black"} />
    </div>
    );
  };

export default USPCard;
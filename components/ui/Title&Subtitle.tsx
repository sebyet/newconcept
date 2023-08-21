import React from 'react';
import H1 from './Base/H1';
import Paragraph from './Base/Paragraph';

const TitleAndSubtitle = ({ H1Text, ParagraphText }) => {
    return (
    <div className="flex flex-col items-center justify-center w-full h-full">
        <H1 color={"black"} text={H1Text} />
        <Paragraph text={ParagraphText} color={"black"} />
    </div>
    );
  };

export default TitleAndSubtitle;
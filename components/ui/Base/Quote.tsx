import React, { ReactNode } from 'react';

interface MyComponentProps {
  children: ReactNode;
}

const Quote: React.FC<MyComponentProps> = ({ children }) => {
    return <blockquote className={"mt-6 border-l-2 pl-6 italic"}>
    {children}
  </blockquote>;
};

export default Quote;
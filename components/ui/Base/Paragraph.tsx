import React, { ReactNode } from 'react';

interface MyComponentProps {
  children: ReactNode;
}

const Paragraph: React.FC<MyComponentProps> = ({ children }) => {
    return <p className={"leading-7"}>
    {children}
  </p>;
};

export default Paragraph;
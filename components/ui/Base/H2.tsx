import React, { ReactNode } from 'react';

interface MyComponentProps {
  children: ReactNode;
}

const H2: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <h2 className={"scroll-m-20 text-3xl font-semibold tracking-tight transition-colors"}>
      {children}
    </h2>
  );
};

export default H2;
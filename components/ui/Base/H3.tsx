import React, { ReactNode } from 'react';

interface MyComponentProps {
  children: ReactNode;
}

const H3: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <h3 className={"scroll-m-20 text-2xl font-semibold tracking-tight"}>
      {children}
    </h3>
  );
};

export default H3;
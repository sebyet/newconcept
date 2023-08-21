import React, { ReactNode } from 'react';
import NextLink from 'next/link';

interface MyComponentProps {
  children: ReactNode;
  href: string;
}

const Link: React.FC<MyComponentProps> = ({ children, href }) => {
  return (
    <NextLink href={href} className={"hover:underline 'text-blue-600"}>
      {children}
    </NextLink>
  );
};

export default Link;
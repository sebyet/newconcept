import React from 'react';
import H1 from './Base/H1';
import { Button } from './Base/Button';

const Navbar = ({ white }) => {
    const BackgroundColor = white ? `bg-white}` : 'bg-transparent';
    return (
      <div className={`pt-5 flex justify-between items-center w-full ${BackgroundColor}`}>
        <H1 color={"white"} text={"Logo"} />
        <Button>Contact</Button>
      </div>
    );
  };

export default Navbar;
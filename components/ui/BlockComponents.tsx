import React from 'react';
import BlockHero from './features/BlockHero';

const BlockComponents = ({ block }) => {
  switch (block.collection) {
    case '':
      return <p>rien</p>;
    case 'block_hero':
      return <BlockHero id={block.item}/>
    // Add more cases for other block types
    default:
      return null;
  }
};

export default BlockComponents;
import React from 'react';
import './grid.css';
import { getRandomEmoji } from '../../utils';
import { emojidata } from '../../emojidata';

const Grid: React.FC = () => {
  const rows = Array(12).fill(null);
  const cols = Array(12).fill(null);
  
  return (
    <div className="grid">
      {rows.map((_, rowIndex) => (
        cols.map((_, colIndex) => (
          <div key={`${rowIndex}-${colIndex}`} className="square">{getRandomEmoji(emojidata).symbol}</div>
        ))
      ))}
    </div>
  );
};

export default Grid;
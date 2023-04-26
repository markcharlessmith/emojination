import React from 'react';
import './grid.css';
import { getRandomEmoji } from '../../utils';
import { emojidata } from '../../emojidata';
import { cluedata } from '../../cluedata';

// const Grid: React.FC = () => {
//   const rows = Array(12).fill(null);
//   const cols = Array(12).fill(null);
  
//   return (
//     <div className="grid">
//       {rows.map((_, rowIndex) => (
//         cols.map((_, colIndex) => (
//           <div key={`${rowIndex}-${colIndex}`} className="square">{getRandomEmoji(emojidata).symbol}</div>
//         ))
//       ))}
//     </div>
//   );
// };

// export default Grid;

type GridProps = {
  grid: string[][],
  selectedSquares: { row: number, col: number }[],
  correctAnswers: { row: number, col: number, direction: string, length: number }[],
  clues: { key: string, text: string, theme: string, emojiKeys: string[] }[],
  onSquareClick: (row: number, col: number) => void
}

const Grid: React.FC<GridProps> = ({ grid, selectedSquares, correctAnswers, clues, onSquareClick }) => {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        row.map((col, colIndex) => (
          <div 
            key={`${rowIndex}-${colIndex}`} 
            className={`square ${selectedSquares.some(square => square.row === rowIndex && square.col === colIndex) ? 'selected' : ''}`}
            onClick={() => onSquareClick(rowIndex, colIndex)}
          >
            {grid[rowIndex][colIndex] ? grid[rowIndex][colIndex] : getRandomEmoji(emojidata).symbol}
          </div>
        ))
      ))}
    </div>
  );
};

export default Grid;
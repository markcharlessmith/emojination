import { useEffect, useState } from 'react'
import Grid from './components/Grid/Grid'
import './App.css'
import { getRandomEmoji } from './utils'
import { emojidata } from './emojidata'
import Cluelist from './components/Cluelist/Cluelist'
import { cluedata } from './cluedata'


// function App() {
//   // const [selectedSquares, setSelectedSquares] = useState([])

//   useEffect(() => {
//   console.log(getRandomEmoji(emojidata), "random emoji")
//   }, [])

//   return (
//     <div className="App">
//       <div className='app-container'>
//       <h1>Emojination!</h1>
//       <div className='game-container'>
//         <Grid />
//         <Cluelist clues={cluedata} />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App

type Direction = 'horizontal' | 'vertical';

type Answer = {
  row: number;
  col: number;
  direction: Direction;
  length: number;
};

type SelectedSquare = {
  row: number;
  col: number;
};

function App() {
  const [grid, setGrid] = useState<string[][]>(Array(12).fill(Array(12).fill(null)));
  const [selectedSquares, setSelectedSquares] = useState<SelectedSquare[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<Answer[]>(generateCorrectAnswers());

  function generateCorrectAnswers(): Answer[] {
    const answers = new Set<Answer>();

    while (answers.size < 9) {
      const row = Math.floor(Math.random() * 12);
      const col = Math.floor(Math.random() * 12);
      const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
      const length = 2;

      const answer: Answer = { row, col, direction, length };
      const overlaps = answers.has(answer) || checkOverlap(answer, answers);

      if (!overlaps) {
        answers.add(answer);
      }
    }

    return [...answers];
  }

  function checkOverlap(newAnswer: Answer, answers: Set<Answer>): boolean {
    for (let answer of answers) {
      if (newAnswer.direction === 'horizontal' && answer.direction === 'horizontal') {
        if (newAnswer.row === answer.row && newAnswer.col < answer.col + answer.length && newAnswer.col + newAnswer.length > answer.col) {
          return true;
        }
      } else if (newAnswer.direction === 'vertical' && answer.direction === 'vertical') {
        if (newAnswer.col === answer.col && newAnswer.row < answer.row + answer.length && newAnswer.row + newAnswer.length > answer.row) {
          return true;
        }
      } else if (newAnswer.direction === 'horizontal' && answer.direction === 'vertical') {
        if (newAnswer.row < answer.row + answer.length && newAnswer.row + newAnswer.length > answer.row && newAnswer.col === answer.col) {
          return true;
        }
      } else if (newAnswer.direction === 'vertical' && answer.direction === 'horizontal') {
        if (newAnswer.col < answer.col + answer.length && newAnswer.col + newAnswer.length > answer.col && newAnswer.row === answer.row) {
          return true;
        }
      }
    }

    return false;
  }

  function handleClick(row: number, col: number) {
    const selected = { row, col };
    const alreadySelected = selectedSquares.some(square => square.row === row && square.col === col);

    if (!alreadySelected) {
      setSelectedSquares([...selectedSquares, selected]);
    } else {
      setSelectedSquares(selectedSquares.filter(square => !(square.row === row && square.col === col)));
    }
  }

  return (
    <div className="app">
      <h1>Crossword Puzzle</h1>
      <Grid
        grid={grid}
        selectedSquares={selectedSquares}
        correctAnswers={correctAnswers}
        clues={cluedata}
        onSquareClick={handleClick}
      />
      <Cluelist clues={cluedata} />
    </div>
  );
}

export default App;
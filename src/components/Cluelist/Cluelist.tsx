import React, { useState } from 'react'
import { Clue } from '../../types'
import './cluelist.css'

type Props = {
  clues: Clue[];
};

// const Cluelist: React.FC<Props> = ({ clues }) => {
//   return (
//     <div className='cluelist'>
//       <div>
//       <h3>
//         {clues[0].theme}
//       </h3>
//       {clues.map((clue) => (
//         <div key={clue.key}>
//           <span>{clue.text}</span>
//         </div>
//       ))}
//       </div>
//     </div>
//   )
// }

// export default Cluelist;

const Cluelist: React.FC<Props> = ({ clues }) => {
  const [selectedClue, setSelectedClue] = useState<Clue | null>(null);

  const handleClick = (clue: Clue) => {
    setSelectedClue(clue);
  };

  return (
    <div className='cluelist'>
      <div>
        <h3>{clues[0].theme}</h3>
        {clues.map((clue) => (
          <div
            key={clue.key}
            className={selectedClue === clue ? 'clue-selected' : ''}
            onClick={() => handleClick(clue)}
          >
            <span>{clue.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cluelist;
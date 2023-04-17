import React from 'react'
import { Clue } from '../../types'
import './cluelist.css'

type Props = {
  clues: Clue[];
};

const Cluelist: React.FC<Props> = ({ clues }) => {
  return (
    <div className='cluelist'>
      <div>
      <h3>
        {clues[0].theme}
      </h3>
      {clues.map((clue) => (
        <div key={clue.key}>
          <span>{clue.text}</span>
          {/* <span>{clue.emojiKeys.map((emoji) => emoji)}</span> */}
        </div>
      ))}
      </div>
    </div>
  )
}

export default Cluelist;

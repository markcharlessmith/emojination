import React from 'react';
import { Emoji } from '../../types';

type Props = {
  emoji: Emoji;
  handleClick: (emoji: Emoji) => void;
};

const EmojiCard: React.FC<Props> = ({ emoji, handleClick }) => {
  return (
    <div className='emoji-card' onClick={() => handleClick(emoji)}>
      <span>{emoji.symbol}</span>
    </div>
  );
};

export default EmojiCard;
export interface Emoji {
  key: string;
  symbol: string;
  name: string;
  category?: string;
  clueIds?: string[];
}

export interface Clue {
  key: string;
  text: string;
  emojiIds: string[];
}
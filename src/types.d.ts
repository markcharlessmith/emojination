export interface Emoji {
  key: string;
  symbol: string;
  name: string;
  category?: string;
  clueKeys?: string[];
}

export interface Clue {
  key: string;
  text: string;
  theme: string;
  emojiKeys: string[];
}
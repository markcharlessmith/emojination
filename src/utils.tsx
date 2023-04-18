import { Emoji } from "./types";

function getRandomEmoji(emojis: Emoji[]) {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

export { getRandomEmoji }
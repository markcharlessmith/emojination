import { Emoji } from "./types";
import { emojidata } from "./emojidata";

function getRandomEmoji(emojis: Emoji[]) {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}


export { getRandomEmoji }
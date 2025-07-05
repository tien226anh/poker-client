const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

export const cardKeyToFrame: { [key: string]: number } = {};

let frame = 0;

for (const suit of suits) {
  for (const rank of ranks) {
    cardKeyToFrame[`${rank}${suit}`] = frame++;
  }
}

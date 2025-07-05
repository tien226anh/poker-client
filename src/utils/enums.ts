export const ChipColor = Object.freeze({
  RED: 'redChip',
  WHITE: 'whiteChip',
  BLUE: 'blueChip',
  GREEN: 'greenChip',
  BLACK: 'blackChip',
  PURPLE: 'purpleChip',
  YELLOW: 'yellowChip',
  PINK: 'pinkChip',
});

export type ChipColorType = (typeof ChipColor)[keyof typeof ChipColor];

export const CardSuit = Object.freeze({
  HEARTS: 'H',
  DIAMONDS: 'D',
  CLUBS: 'C',
  SPADES: 'S',
});
export type CardSuitType = (typeof CardSuit)[keyof typeof CardSuit];

export const CardRank = Object.freeze({
  TWO: '2',
  THREE: '3',
  FOUR: '4',
  FIVE: '5',
  SIX: '6',
  SEVEN: '7',
  EIGHT: '8',
  NINE: '9',
  TEN: '10',
  JACK: 'J',
  QUEEN: 'Q',
  KING: 'K',
  ACE: 'A',
});

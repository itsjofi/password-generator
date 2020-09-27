// const secureMathRandom = (): number => {
//   return (
//     window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1)
//   );
// };

import { types } from 'util';

const getRandomNumber = (): string => {
  const numbers = '0123456789';

  return numbers[Math.floor(Math.random() * numbers.length)];
};

const getRandomSymbol = (): string => {
  const symbols = '~!@#$%^&*()_+{}":?><;.,';

  return symbols[Math.floor(Math.random() * symbols.length)];
};

const getRandomUpper = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVXZ';

  return chars[Math.floor(Math.random() * chars.length)];
};

const getRandomLower = (): string => {
  const chars = 'abcdefghijklmnopqrstuvxz';

  return chars[Math.floor(Math.random() * chars.length)];
};

export const generatePassword = (
  length: number,
  lower: boolean,
  upper: boolean,
  number: boolean,
  symbol: boolean
): string => {
  let password = '';

  for (let i = 0; i < length; i++) {
    password += randomFunc(lower, upper, number, symbol);
  }

  return password.slice(0, length);
};

const randomFunc = (
  lower: boolean,
  upper: boolean,
  number: boolean,
  symbol: boolean
) => {
  const funcs = [];
  if (upper) {
    funcs.push(getRandomUpper());
  }
  if (lower) {
    funcs.push(getRandomLower());
  }
  if (number) {
    funcs.push(getRandomNumber());
  }
  if (symbol) {
    funcs.push(getRandomSymbol());
  }
  if (funcs.length === 0) return '';

  return funcs[Math.floor(Math.random() * funcs.length)];
};

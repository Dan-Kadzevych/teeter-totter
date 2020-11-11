import { getRandomNumber } from "./numbers";

export function getRandomProperty(object) {
  const keys = Object.keys(object);
  const randomKey = keys[getRandomNumber(keys.length)];

  return object[randomKey];
}

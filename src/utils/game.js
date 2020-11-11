import pick from "lodash/pick";

import {
  SHAPE_TYPES,
  HORIZONTAL_POSITIONS,
  SHAPE_WEIGHTS,
  NEXT_GAME_STATUS_MAPPING
} from "./constants";
import { getRandomProperty } from "./objects";

export function getRandomShape(neededMomentum) {
  const type = getRandomProperty(SHAPE_TYPES);
  const horizontalPosition = getRandomProperty(HORIZONTAL_POSITIONS);
  let weight;

  if (neededMomentum) {
    const possibleWeightKeys = Object.keys(SHAPE_WEIGHTS).filter(key => {
      const weight = SHAPE_WEIGHTS[key];
      return Object.keys(HORIZONTAL_POSITIONS).some(key => {
        const horizontalPositionInM = (HORIZONTAL_POSITIONS[key] + 100) / 100;

        return horizontalPositionInM * weight === neededMomentum;
      });
    });

    weight = getRandomProperty(pick(SHAPE_WEIGHTS, possibleWeightKeys));
  } else {
    weight = getRandomProperty(SHAPE_WEIGHTS);
  }

  return { type, horizontalPosition, weight };
}

export function calculateNextGameStatus(currentStatus) {
  return NEXT_GAME_STATUS_MAPPING[currentStatus];
}

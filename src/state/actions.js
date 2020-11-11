import types from "./types";

export const createRightSideShape = ({
  type,
  bottom,
  weight,
  left,
  momentum
}) => ({
  type: types.createRightSideShape,
  payload: { shape: { type, bottom, left, weight, momentum } }
});

export const createLeftSideShape = ({ type, bottom, weight, right }) => ({
  type: types.createLeftSideShape,
  payload: { shape: { type, bottom, right, weight } }
});

export const setLeftShapeMomentum = momentum => ({
  type: types.setLeftShapeMomentum,
  payload: { momentum }
});

export const setGameStatus = gameStatus => ({
  type: types.setGameStatus,
  payload: { gameStatus }
});

export const moveLeftShapeDown = value => ({
  type: types.moveLeftShapeDown,
  payload: { value }
});

export const moveLeftShapeLeft = value => ({
  type: types.moveLeftShapeLeft,
  payload: { value }
});

export const moveLeftShapeRight = value => ({
  type: types.moveLeftShapeRight,
  payload: { value }
});

export const decrementGameTickTiming = () => ({
  type: types.decrementGameTickTiming
});

export const resetGameState = () => ({
  type: types.resetGameState
});

const actions = {
  createRightSideShape,
  createLeftSideShape,
  setLeftShapeMomentum,
  setGameStatus,
  moveLeftShapeDown,
  moveLeftShapeLeft,
  moveLeftShapeRight,
  decrementGameTickTiming,
  resetGameState
};

export default actions;

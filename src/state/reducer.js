import createReducer from "utils/redux/createReducer";

import { GAME_STATUSES } from "utils/constants";
import types from "state/types";

const initialState = {
  gameTickTimingMs: 10,
  gameStatus: GAME_STATUSES.waiting,
  rightSideShape: undefined,
  leftSideShape: undefined
};

function createRightSideShape(state = initialState, { payload: { shape } }) {
  return { ...state, rightSideShape: shape };
}

function createLeftSideShape(state = initialState, { payload: { shape } }) {
  return { ...state, leftSideShape: shape };
}

function setLeftShapeMomentum(state = initialState, { payload: { momentum } }) {
  return { ...state, leftSideShape: { ...state.leftSideShape, momentum } };
}

function moveLeftShapeDown(state = initialState, { payload: { value } }) {
  return {
    ...state,
    leftSideShape: {
      ...state.leftSideShape,
      bottom: state.leftSideShape.bottom - value
    }
  };
}

function moveLeftShapeRight(state = initialState, { payload: { value } }) {
  if (state.leftSideShape.right <= 0) {
    return state;
  }

  return {
    ...state,
    leftSideShape: {
      ...state.leftSideShape,
      right: state.leftSideShape.right - value
    }
  };
}

function moveLeftShapeLeft(state = initialState, { payload: { value } }) {
  if (state.leftSideShape.right + value >= 500) {
    return state;
  }

  return {
    ...state,
    leftSideShape: {
      ...state.leftSideShape,
      right: state.leftSideShape.right + value
    }
  };
}

function setGameStatus(state = initialState, { payload: { gameStatus } }) {
  return { ...state, gameStatus };
}

function decrementGameTickTiming(state = initialState) {
  if (state.gameTickTimingMs === 1) {
    return state;
  }

  return { ...state, gameTickTimingMs: state.gameTickTimingMs - 1 };
}

function resetGameState() {
  return initialState;
}

const handlers = {
  [types.createRightSideShape]: createRightSideShape,
  [types.createLeftSideShape]: createLeftSideShape,
  [types.setLeftShapeMomentum]: setLeftShapeMomentum,
  [types.moveLeftShapeDown]: moveLeftShapeDown,
  [types.moveLeftShapeLeft]: moveLeftShapeLeft,
  [types.moveLeftShapeRight]: moveLeftShapeRight,
  [types.setGameStatus]: setGameStatus,
  [types.decrementGameTickTiming]: decrementGameTickTiming,
  [types.resetGameState]: resetGameState
};

export default createReducer(initialState, handlers);

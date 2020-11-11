import { store } from "index";
import actions from "./actions";
import { getRandomShape } from "../utils/game";
import {
  GAME_STATUSES,
  VERTICAL_STEP,
  HORIZONTAL_STEP,
  ARROW_KEY_CODES,
  GAME_TICK_TIMING
} from "../utils/constants";

let gameTimer = null;

const onKeyPress = e => {
  if (e.keyCode === ARROW_KEY_CODES.left) {
    store.dispatch(actions.moveLeftShapeLeft(HORIZONTAL_STEP));
  }

  if (e.keyCode === ARROW_KEY_CODES.right) {
    store.dispatch(actions.moveLeftShapeRight(HORIZONTAL_STEP));
  }
};

const gameTick = () => (dispatch, getState) => {
  dispatch(actions.moveLeftShapeDown(VERTICAL_STEP));

  const { leftSideShape, rightSideShape } = getState();

  if (leftSideShape.bottom <= 0) {
    clearInterval(gameTimer);
    document.removeEventListener("keydown", onKeyPress);

    const rightShapeMomentum =
      ((rightSideShape.left + 100) / 100) * rightSideShape.weight;

    const leftShapeMomentum =
      ((leftSideShape.right + 100) / 100) * leftSideShape.weight;

    if (rightShapeMomentum === leftShapeMomentum) {
      setTimeout(() => dispatch(startGame()), 1000);
    } else {
      dispatch(actions.setLeftShapeMomentum(leftShapeMomentum));
      dispatch(actions.setGameStatus(GAME_STATUSES.lost));
      setTimeout(() => dispatch(actions.resetGameState()), 1000);
    }
  }
};

export const startGame = () => dispatch => {
  const rightShape = getRandomShape();
  const rightShapeMomentum =
    ((rightShape.horizontalPosition + 100) / 100) * rightShape.weight;

  const leftShape = getRandomShape(rightShapeMomentum);

  dispatch(
    actions.createRightSideShape({
      type: rightShape.type,
      bottom: 0,
      left: rightShape.horizontalPosition,
      weight: rightShape.weight,
      momentum: rightShapeMomentum
    })
  );
  dispatch(
    actions.createLeftSideShape({
      type: leftShape.type,
      bottom: 400,
      right: leftShape.horizontalPosition,
      weight: leftShape.weight
    })
  );

  dispatch(actions.setGameStatus(GAME_STATUSES.inProgress));

  gameTimer = setInterval(() => dispatch(gameTick()), GAME_TICK_TIMING);

  document.addEventListener("keydown", onKeyPress);
};

export const pauseGame = () => dispatch => {
  dispatch(actions.setGameStatus(GAME_STATUSES.paused));
  clearInterval(gameTimer);
  document.removeEventListener("keydown", onKeyPress);
};

export const resumeGame = () => dispatch => {
  dispatch(actions.setGameStatus(GAME_STATUSES.inProgress));

  gameTimer = setInterval(() => dispatch(gameTick()), GAME_TICK_TIMING);
  document.addEventListener("keydown", onKeyPress);
};

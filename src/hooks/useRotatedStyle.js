import {useSelector} from "react-redux";
import {GAME_STATUSES} from "../utils/constants";

export default function useRotatedStyle() {
  const rightShape = useSelector(state => state.rightSideShape);
  const leftShape = useSelector(state => state.leftSideShape);
  const gameStatus = useSelector(state => state.gameStatus);

  let rotatedStyle;

  if (gameStatus === GAME_STATUSES.lost) {
    if (rightShape.momentum > leftShape.momentum) {
      rotatedStyle = 'rotatedRight';
    } else {
      rotatedStyle = 'rotatedLeft';
    }
  }

  return rotatedStyle;
}
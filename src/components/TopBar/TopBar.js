import { useDispatch, useSelector } from "react-redux";

import Button from "components/Button";

import { startGame, pauseGame, resumeGame } from "state/operations";
import { GAME_STATUSES } from "utils/constants";

import styles from "./TopBar.module.css";

const buttonTextMapping = {
  [GAME_STATUSES.waiting]: "Start Game",
  [GAME_STATUSES.inProgress]: "Pause Game",
  [GAME_STATUSES.paused]: "Resume Game",
  [GAME_STATUSES.lost]: "YOU LOSE"
};

function TopBar() {
  const gameStatus = useSelector(state => state.gameStatus);
  const dispatch = useDispatch();

  const buttonText = buttonTextMapping[gameStatus];

  const handleClick = () => {
    switch (gameStatus) {
      case GAME_STATUSES.waiting:
        dispatch(startGame());
        break;
      case GAME_STATUSES.inProgress:
        dispatch(pauseGame());
        break;
      case GAME_STATUSES.paused:
        dispatch(resumeGame());
        break;
      default:
        return;
    }
  };

  return (
    <div className={styles.topBar}>
      <Button text={buttonText} onClick={handleClick} />
    </div>
  );
}

export default TopBar;

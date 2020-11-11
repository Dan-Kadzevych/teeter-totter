import { useSelector } from "react-redux";
import classNames from "classnames";

import Shape from "components/Shape";
import useRotatedStyle from "hooks/useRotatedStyle";

import styles from "./GameArea.module.css";

function GameArea() {
  const rightShape = useSelector(state => state.rightSideShape);
  const leftShape = useSelector(state => state.leftSideShape);

  let rotatedStyle = useRotatedStyle();

  return (
    <div className={classNames(styles.gameArea, rotatedStyle)}>
      <div className={styles.blockContainer}>
        {leftShape && (
          <Shape
            type={leftShape.type}
            text={`${leftShape.weight}kg`}
            style={{ bottom: leftShape.bottom, right: leftShape.right }}
          />
        )}
      </div>
      <div className={styles.blockContainer}>
        {rightShape && (
          <Shape
            type={rightShape.type}
            text={`${rightShape.weight}kg`}
            style={{ bottom: rightShape.bottom, left: rightShape.left }}
          />
        )}
      </div>
    </div>
  );
}

export default GameArea;

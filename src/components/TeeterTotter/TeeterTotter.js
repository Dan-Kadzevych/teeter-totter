import classNames from "classnames";

import useRotatedStyle from "hooks/useRotatedStyle";

import styles from "./TeeterTotter.module.css";

function TeeterTotter() {
  let rotatedStyle = useRotatedStyle();

  return (
    <div className={styles.teeterTotter}>
      <div className={classNames(styles.bar, rotatedStyle)} />
      <div className={styles.leg} />
    </div>
  );
}

export default TeeterTotter;

import styles from "./Triangle.module.css";

function Triangle({ style, text }) {
  return (
    <div className={styles.triangle} style={style}>
      {text}
    </div>
  );
}

export default Triangle;

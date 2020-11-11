import styles from "./Circle.module.css";

function Circle({ style, text }) {
  return (
    <div className={styles.circle} style={style}>
      {text}
    </div>
  );
}

export default Circle;

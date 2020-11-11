import styles from "./Rectangle.module.css";

function Rectangle({ style, text }) {
  return (
    <div className={styles.rectangle} style={style}>
      {text}
    </div>
  );
}

export default Rectangle;

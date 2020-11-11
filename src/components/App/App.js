import TopBar from "components/TopBar";
import TeeterTotter from "components/TeeterTotter";
import GameArea from "components/GameArea";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.gameZone}>
        <TopBar />
        <div>
          <GameArea />
          <TeeterTotter />
        </div>
      </div>
    </div>
  );
}

export default App;

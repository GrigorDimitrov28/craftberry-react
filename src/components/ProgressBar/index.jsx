import styles from "./style.module.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const ProgressBar = () => {
  const [question, setQuestion] = useState(1);
  const location = useLocation();

  useEffect(() => {
    setQuestion(parseInt(location.pathname.replace("/", "")[1]));
  }, [location]);

  return (
    <>
      {location.pathname != "/" && location.pathname != "/results" ? (
        <div className={styles.wrapper}>
          <div
            style={{ "--rotation-angle": `${question * 72}deg` }}
            className={styles.circularProgress}
          >
            <span className={styles.progress}>{question}/5</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ProgressBar;

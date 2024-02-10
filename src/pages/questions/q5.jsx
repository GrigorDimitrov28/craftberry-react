import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { useState } from "react";

const FifthQuestion = () => {
  const [active, setActive] = useState(null);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.question}>
        What is your natural hair color(s) today?
      </h1>
      <div className={styles.answerContainer}>
        <div
          onClick={() => setActive(1)}
          className={`${styles.answer} ${active == 1 ? styles.active : ""}`}
        >
          a. Black
        </div>
        <div
          onClick={() => setActive(2)}
          className={`${styles.answer} ${active == 2 ? styles.active : ""}`}
        >
          b. Brown
        </div>
        <div
          onClick={() => setActive(3)}
          className={`${styles.answer} ${active == 3 ? styles.active : ""}`}
        >
          c. Blonde
        </div>
        <div
          onClick={() => setActive(4)}
          className={`${styles.answer} ${active == 4 ? styles.active : ""}`}
        >
          d. Red/Orange
        </div>
        <div
          onClick={() => setActive(5)}
          className={`${styles.answer} ${active == 5 ? styles.active : ""}`}
        >
          e. Silver/Grey
        </div>
      </div>

      <div className={styles.linkContainer}>
        <Link to="/q4" className={styles.back}>
          Back
        </Link>
        <Link to="/results" className={styles.next}>
          Discover your results
        </Link>
      </div>
    </div>
  );
};

export default FifthQuestion;

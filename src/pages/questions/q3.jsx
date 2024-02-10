import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { useState } from "react";

const ThirdQuestion = () => {
  const [active, setActive] = useState(null);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.question}>
        What benefit do you look for in your hair products?
      </h1>
      <div className={styles.answerContainer}>
        <div
          onClick={() => setActive(1)}
          className={`${styles.answer} ${active == 1 ? styles.active : ""}`}
        >
          a. Anti-breakage
        </div>
        <div
          onClick={() => setActive(2)}
          className={`${styles.answer} ${active == 2 ? styles.active : ""}`}
        >
          b. Hydration
        </div>
        <div
          onClick={() => setActive(3)}
          className={`${styles.answer} ${active == 3 ? styles.active : ""}`}
        >
          c. Soothing dry scalp
        </div>
        <div
          onClick={() => setActive(4)}
          className={`${styles.answer} ${active == 4 ? styles.active : ""}`}
        >
          d. Repairs appearance of damaged hair
        </div>
        <div
          onClick={() => setActive(5)}
          className={`${styles.answer} ${active == 5 ? styles.active : ""}`}
        >
          e. Volume
        </div>
        <div
          onClick={() => setActive(6)}
          className={`${styles.answer} ${active == 6 ? styles.active : ""}`}
        >
          f. Curl and coil enhancing
        </div>
      </div>

      <div className={styles.linkContainer}>
        <Link to="/q2" className={styles.back}>
          Back
        </Link>
        <Link to="/q4" className={styles.next}>
          Next question
        </Link>
      </div>
    </div>
  );
};

export default ThirdQuestion;

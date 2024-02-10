import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { useState } from "react";

const FourthQuestion = () => {
  const [active, setActive] = useState(null);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.question}>
        Is there anything troubling you about your hair?
      </h1>
      <div className={styles.answerContainer}>
        <div
          onClick={() => setActive(1)}
          className={`${styles.answer} ${active == 1 ? styles.active : ""}`}
        >
          a. Breakage
        </div>
        <div
          onClick={() => setActive(2)}
          className={`${styles.answer} ${active == 2 ? styles.active : ""}`}
        >
          b. Frizz
        </div>
        <div
          onClick={() => setActive(3)}
          className={`${styles.answer} ${active == 3 ? styles.active : ""}`}
        >
          c. Scalp dryness
        </div>
        <div
          onClick={() => setActive(4)}
          className={`${styles.answer} ${active == 4 ? styles.active : ""}`}
        >
          d. Damage
        </div>
        <div
          onClick={() => setActive(5)}
          className={`${styles.answer} ${active == 5 ? styles.active : ""}`}
        >
          e. Tangling
        </div>
      </div>

      <div className={styles.linkContainer}>
        <Link to="/q3" className={styles.back}>
          Back
        </Link>
        <Link to="/q5" className={styles.next}>
          Next question
        </Link>
      </div>
    </div>
  );
};

export default FourthQuestion;

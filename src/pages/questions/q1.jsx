import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { useState } from "react";

const FirstQuestion = () => {
  const [active, setActive] = useState(null);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.question}>{"What's your hair type or texture?"}</h1>
      <div className={styles.answerContainer}>
        <div
          onClick={() => setActive(1)}
          className={`${styles.answer} ${active == 1 ? styles.active : ""}`}
        >
          a. Straight
        </div>
        <div
          onClick={() => setActive(2)}
          className={`${styles.answer} ${active == 2 ? styles.active : ""}`}
        >
          b. Curly
        </div>
        <div
          onClick={() => setActive(3)}
          className={`${styles.answer} ${active == 3 ? styles.active : ""}`}
        >
          c. Wavy
        </div>
        <div
          onClick={() => setActive(4)}
          className={`${styles.answer} ${active == 4 ? styles.active : ""}`}
        >
          d. Fine
        </div>
      </div>

      <div className={styles.linkContainer}>
        <Link to="/" className={styles.back}>
          Back
        </Link>
        <Link to="/q2" className={styles.next}>
          Next question
        </Link>
      </div>
    </div>
  );
};

export default FirstQuestion;

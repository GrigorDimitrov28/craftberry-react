import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { useState, useEffect } from "react";

const SecondQuestion = ({ answer, setAnswer }) => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    setActive(answer);
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.question}>How often do you wash your hair?</h1>
      <div className={styles.answerContainer}>
        <div
          onClick={() => {
            setActive(1);
          }}
          className={`${styles.answer} ${active == 1 ? styles.active : ""}`}
        >
          a. Daily
        </div>
        <div
          onClick={() => {
            setActive(2);
          }}
          className={`${styles.answer} ${active == 2 ? styles.active : ""}`}
        >
          b. Every other day
        </div>
        <div
          onClick={() => {
            setActive(3);
          }}
          className={`${styles.answer} ${active == 3 ? styles.active : ""}`}
        >
          c. Twice a week
        </div>
        <div
          onClick={() => {
            setActive(4);
          }}
          className={`${styles.answer} ${active == 4 ? styles.active : ""}`}
        >
          d. Once a week
        </div>
        <div
          onClick={() => {
            setActive(5);
          }}
          className={`${styles.answer} ${active == 5 ? styles.active : ""}`}
        >
          e. Every two weeks
        </div>
      </div>

      <div className={styles.linkContainer}>
        <Link to="/q1" className={styles.back}>
          Back
        </Link>
        <Link
          onClick={() => {
            setAnswer("qSecond", active);
          }}
          to="/q3"
          className={styles.next}
        >
          Next question
        </Link>
      </div>
    </div>
  );
};

export default SecondQuestion;

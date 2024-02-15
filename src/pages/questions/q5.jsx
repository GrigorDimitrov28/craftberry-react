import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { useState, useEffect } from "react";

const FifthQuestion = ({ answer, setAnswer, state }) => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    setActive(answer);
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.question}>
        What is your natural hair color(s) today?
      </h1>
      <div className={styles.answerContainer}>
        <div
          onClick={() => setActive("Black")}
          className={`${styles.answer} ${
            active == "Black" ? styles.active : ""
          }`}
        >
          a. Black
        </div>
        <div
          onClick={() => setActive("Brown")}
          className={`${styles.answer} ${
            active == "Brown" ? styles.active : ""
          }`}
        >
          b. Brown
        </div>
        <div
          onClick={() => setActive("Blonde")}
          className={`${styles.answer} ${
            active == "Blonde" ? styles.active : ""
          }`}
        >
          c. Blonde
        </div>
        <div
          onClick={() => setActive("Red")}
          className={`${styles.answer} ${active == "Red" ? styles.active : ""}`}
        >
          d. Red/Orange
        </div>
        <div
          onClick={() => setActive("Silver")}
          className={`${styles.answer} ${
            active == "Silver" ? styles.active : ""
          }`}
        >
          e. Silver/Grey
        </div>
      </div>

      <div className={styles.linkContainer}>
        <Link to="/q4" className={styles.back}>
          Back
        </Link>
        <Link
          onClick={() => {
            setAnswer("qFifth", active);
          }}
          to="/results"
          className={styles.discover}
        >
          Discover your results
        </Link>
      </div>
    </div>
  );
};

export default FifthQuestion;

import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { useState, useEffect } from "react";

const FirstQuestion = ({ answer, setAnswer }) => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    setActive(answer);
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.question}>{"What's your hair type or texture?"}</h1>
      <div className={styles.answerContainer}>
        <div
          onClick={() => setActive("type_straight")}
          className={`${styles.answer} ${
            active == "type_straight" ? styles.active : ""
          }`}
        >
          a. Straight
        </div>
        <div
          onClick={() => setActive("type_curly")}
          className={`${styles.answer} ${
            active == "type_curly" ? styles.active : ""
          }`}
        >
          b. Curly
        </div>
        <div
          onClick={() => setActive("type_wavy")}
          className={`${styles.answer} ${
            active == "type_wavy" ? styles.active : ""
          }`}
        >
          c. Wavy
        </div>
        <div
          onClick={() => setActive("type_fine")}
          className={`${styles.answer} ${
            active == "type_fine" ? styles.active : ""
          }`}
        >
          d. Fine
        </div>
      </div>

      <div className={styles.linkContainer}>
        <Link to="/" className={styles.back}>
          Back
        </Link>
        <Link
          onClick={() => {
            setAnswer("qFirst", active);
          }}
          to="/q2"
          className={styles.next}
        >
          Next question
        </Link>
      </div>
    </div>
  );
};

export default FirstQuestion;

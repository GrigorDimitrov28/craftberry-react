import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { useState, useEffect } from "react";

const FourthQuestion = ({ answer, setAnswer }) => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    setActive(answer);
  }, []);

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
          onClick={() => setActive("type_frizzy")}
          className={`${styles.answer} ${
            active == "type_frizzy" ? styles.active : ""
          }`}
        >
          b. Frizz
        </div>
        <div
          onClick={() => setActive("type_dry")}
          className={`${styles.answer} ${
            active == "type_dry" ? styles.active : ""
          }`}
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
        <Link
          onClick={() => {
            setAnswer("qFourth", active);
          }}
          to="/q5"
          className={styles.next}
        >
          Next question
        </Link>
      </div>
    </div>
  );
};

export default FourthQuestion;

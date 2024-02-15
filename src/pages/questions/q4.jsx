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
          onClick={() => setActive("type_breakage")}
          className={`${styles.answer} ${
            active == "type_breakage" ? styles.active : ""
          }`}
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
          onClick={() => setActive("type_damaged")}
          className={`${styles.answer} ${
            active == "type_damaged" ? styles.active : ""
          }`}
        >
          d. Damage
        </div>
        <div
          onClick={() => setActive("type_tangling")}
          className={`${styles.answer} ${
            active == "type_tangling" ? styles.active : ""
          }`}
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
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2_55)">
              <path
                d="M13.8517 5.38135L17.7527 9.28229L1.21736 9.28219L1.21736 10.7174L17.7527 10.7173L13.8517 14.6183L14.8666 15.6332L20.5 9.9998L14.8666 4.36643L13.8517 5.38135Z"
                fill="#1C2635"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_55">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default FourthQuestion;

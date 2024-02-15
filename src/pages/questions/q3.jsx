import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { useState, useEffect } from "react";

const ThirdQuestion = ({ answer, setAnswer }) => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    setActive(answer);
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.question}>
        What benefit do you look for in your hair products?
      </h1>
      <div className={styles.thirdAnswerContainer}>
        <div
          onClick={() => setActive("goals_toning")}
          className={`${styles.answer} ${
            active == "goals_toning" ? styles.active : ""
          }`}
        >
          a. Anti-breakage
        </div>
        <div
          onClick={() => setActive("goals_hydrate")}
          className={`${styles.answer} ${
            active == "goals_hydrate" ? styles.active : ""
          }`}
        >
          b. Hydration
        </div>
        <div
          onClick={() => setActive("goals_oil control")}
          className={`${styles.answer} ${
            active == "goals_oil control" ? styles.active : ""
          }`}
        >
          c. Soothing dry scalp
        </div>
        <div
          onClick={() => setActive("goals_texture")}
          className={`${styles.threeD} ${
            active == "goals_texture" ? styles.active : ""
          }`}
        >
          d. Repairs appearance of damaged hair
        </div>
        <div
          onClick={() => setActive("goals_volumise")}
          className={`${styles.answer} ${
            active == "goals_volumise" ? styles.active : ""
          }`}
        >
          e. Volume
        </div>
        <div
          onClick={() => setActive("goals_curl definition")}
          className={`${styles.threeF} ${
            active == "goals_curl definition" ? styles.active : ""
          }`}
        >
          f. Curl and coil enhancing
        </div>
      </div>

      <div className={styles.linkContainer}>
        <Link to="/q2" className={styles.back}>
          Back
        </Link>
        <Link
          onClick={() => {
            setAnswer("qThird", active);
          }}
          to="/q4"
          className={`${styles.next} ${!active ? styles.disabled : ""}`}
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

export default ThirdQuestion;

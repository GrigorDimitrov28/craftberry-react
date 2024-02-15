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
            setActive("Daily");
          }}
          className={`${styles.answer} ${
            active == "Daily" ? styles.active : ""
          }`}
        >
          a. Daily
        </div>
        <div
          onClick={() => {
            setActive("otherDay");
          }}
          className={`${styles.answer} ${
            active == "otherDay" ? styles.active : ""
          }`}
        >
          b. Every other day
        </div>
        <div
          onClick={() => {
            setActive("twice");
          }}
          className={`${styles.answer} ${
            active == "twice" ? styles.active : ""
          }`}
        >
          c. Twice a week
        </div>
        <div
          onClick={() => {
            setActive("onceWeek");
          }}
          className={`${styles.answer} ${
            active == "onceWeek" ? styles.active : ""
          }`}
        >
          d. Once a week
        </div>
        <div
          onClick={() => {
            setActive("twoWeeks");
          }}
          className={`${styles.answer} ${
            active == "twoWeeks" ? styles.active : ""
          }`}
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

export default SecondQuestion;

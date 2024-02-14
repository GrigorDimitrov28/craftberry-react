import style from "./index.module.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.overlay}></div>
        <h1>Build a self care routine suitable for you</h1>
        <p>
          Take out test to get a personalized self care routine based on your
          needs.
        </p>
        <Link to={"/q1"} className={style.start}>
          Start the quiz
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;

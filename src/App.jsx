import "./App.css";
import { useState } from "react";
import LandingPage from "./pages/landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstQuestion from "./pages/questions/q1";
import SecondQuestion from "./pages/questions/q2";
import ThirdQuestion from "./pages/questions/q3";
import FourthQuestion from "./pages/questions/q4";
import FifthQuestion from "./pages/questions/q5";
import ResultsPage from "./pages/results";
import ProgressBar from "./components/ProgressBar";

function App() {
  // Store answers here to be accessible after page navigation
  const [answers, setAnswers] = useState({
    qFirst: null,
    qSecond: null,
    qThird: null,
    qFourth: null,
    qFifth: null,
  });

  // Set current answer from each page
  const handleSetAnswer = (question, answer) => {
    setAnswers({
      ...answers,
      [question]: answer,
    });
  };

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await fetch(
  //       "https://jeval.com.au/collections/hair-care/products.json?page=1"
  //     );
  //     const result = await data.json();

  //     console.log(result.products.forEach((p) => console.log(p)));
  //   };

  //   getData();
  // });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route
          path="/q1"
          exact
          element={
            <FirstQuestion
              answer={answers.qFirst}
              setAnswer={handleSetAnswer}
            />
          }
        ></Route>
        <Route
          path="/q2"
          exact
          element={
            <SecondQuestion
              answer={answers.qSecond}
              setAnswer={handleSetAnswer}
            />
          }
        ></Route>
        <Route
          path="/q3"
          exact
          element={
            <ThirdQuestion
              answer={answers.qThird}
              setAnswer={handleSetAnswer}
            />
          }
        ></Route>
        <Route
          path="/q4"
          exact
          element={
            <FourthQuestion
              answer={answers.qFourth}
              setAnswer={handleSetAnswer}
            />
          }
        ></Route>
        <Route
          path="/q5"
          exact
          element={
            <FifthQuestion
              answer={answers.qFifth}
              setAnswer={handleSetAnswer}
            />
          }
        ></Route>
        <Route
          path="/results"
          exact
          element={<ResultsPage state={answers} />}
        ></Route>
      </Routes>
      <ProgressBar />
    </BrowserRouter>
  );
}

export default App;

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

function App() {
  const [answers, setAnswers] = useState({
    qFirst: null,
    qSecond: null,
    qThird: null,
    qFourth: null,
    qFifth: null,
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/q1" exact element={<FirstQuestion />}></Route>
        <Route path="/q2" exact element={<SecondQuestion />}></Route>
        <Route path="/q3" exact element={<ThirdQuestion />}></Route>
        <Route path="/q4" exact element={<FourthQuestion />}></Route>
        <Route path="/q5" exact element={<FifthQuestion />}></Route>
        <Route path="/results" exact element={<ResultsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

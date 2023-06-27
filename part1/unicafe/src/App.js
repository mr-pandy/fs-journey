import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [allClicks, setAllClicks] = useState([]);

  const handleGood = () => {
    setAllClicks(allClicks.concat("G"));
    setGood(() => good + 1);
    setAll(good + bad + neutral);
  };
  const handleNeutral = () => {
    setAllClicks(allClicks.concat("N"));
    setNeutral(() => neutral + 1);
    setAll(good + bad + neutral);
  };
  const handleBad = () => {
    setAllClicks(allClicks.concat("B"));
    setBad(() => bad + 1);
    setAll(good + bad + neutral);
  };
  return (
    <>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />

      <h1>Statistics</h1>
      <Statistics allClicks={allClicks} value={{ good, neutral, bad, all }} />
    </>
  );
}

export default App;

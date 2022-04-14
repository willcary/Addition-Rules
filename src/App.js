import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Returns a random number between 0 and 100
  function setRandomNumber() {
    return Math.floor(Math.random() * 101);
  }
  // Setting the two numbers, real answer, and user answer with setState hook
  const [numbers, setNumbers] = useState([
    setRandomNumber(),
    setRandomNumber(),
  ]);
  const [answer, setAnswer] = useState("");
  const [userAnswer, setUserAnswer] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(
      answer == userAnswer
        ? "Correct, nice job!"
        : `Incorrect: answer was ${answer}`
    );
  }

  function handleChange(event) {
    setUserAnswer(event.target.value);
  }

  function onClick() {
    setNumbers([setRandomNumber(), setRandomNumber()]);
    setUserAnswer("");
  }

  // Check userAnswer against real answer
  useEffect(() => {
    setAnswer(numbers.reduce((a, b) => a + b, 0));
  }, [numbers]);

  return (
    <div className="App">
      <header>
        <h1>Addition Rules!</h1>
      </header>
      <main>
        <div className="math-body">
          <code>{numbers[0]}</code>
          <code>+{numbers[1]}</code>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="answer"
              value={userAnswer}
              onChange={handleChange}
            />
            <input
              type="submit"
              value="Check Answer"
              className="btn btn-primary"
            />
            <button onClick={onClick} className="btn btn-secondary">
              Next question
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;

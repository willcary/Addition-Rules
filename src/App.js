import { useState, useEffect, useRef } from "react";
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
  const [isDisabled, setIsDisabled] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAnswers, setTotalAnswers] = useState(0);

  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (!isDisabled) {
      setIsDisabled(true);
      setTotalAnswers(totalAnswers + 1);
      if (answer == userAnswer) {
        setCorrectAnswers(correctAnswers + 1);
      }
      // alert(
      //   answer == userAnswer
      //     ? "Correct, nice job!"
      //     : `Incorrect: answer was ${answer}`
      // );
    }
  }

  function handleChange(event) {
    setUserAnswer(event.target.value);
  }

  function onClick() {
    setNumbers([setRandomNumber(), setRandomNumber()]);
    setUserAnswer("");
    setIsDisabled(false);
  }

  // Check userAnswer against real answer
  useEffect(() => {
    setAnswer(numbers.reduce((a, b) => a + b, 0));
    inputRef.current.focus();
  }, [numbers]);

  return (
    <div className="App">
      <header>
        <h1>Addition Rules!</h1>
      </header>
      <main>
        <div className="math-body">
          <p>{numbers[0]}</p>
          <p>+{numbers[1]}</p>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="answer"
              disabled={isDisabled}
              value={userAnswer}
              className={
                !isDisabled
                  ? ""
                  : answer == userAnswer
                  ? "input-disabled-correct"
                  : "input-disabled-incorrect"
              }
              ref={inputRef}
              onChange={handleChange}
            />
            <input
              type="submit"
              value="Check Answer"
              className={isDisabled ? "btn btn-disabled" : "btn btn-primary"}
            />
          </form>
          <button onClick={onClick} className="btn btn-secondary">
            Next question
          </button>
          <div className="answer-info">
            <small>correct: {correctAnswers}</small>
            <small>total: {totalAnswers}</small>
            <small>
              percent ✓:{" "}
              {Math.round((correctAnswers / totalAnswers) * 100) || "0"}
            </small>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

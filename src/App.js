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
      if (answer === Number(userAnswer)) {
        setCorrectAnswers(correctAnswers + 1);
      }
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

  function alert() {
    return answer === Number(userAnswer) ? (
      <p className="alert alert-correct">
        Correct,
        <br /> fantastic work!
      </p>
    ) : (
      <p className="alert alert-incorrect">
        Incorrect:
        <br /> answer was {answer}
      </p>
    );
  }

  // Check userAnswer against real answer
  useEffect(() => {
    inputRef.current.focus();
    const [a, b] = numbers;
    //=============================================== MathJS request =================================
    fetch("http://api.mathjs.org/v4/?expr=" + encodeURIComponent(`${a}+${b}`))
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        setAnswer(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
        setAnswer(numbers.reduce((a, b) => a + b, 0));
      });
  }, [numbers]);

  return (
    <div className="App">
      <header>
        <h1>Addition Rules!</h1>
      </header>
      <main>
        <div className="math-body">
          {isDisabled && alert()}
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
                  : answer === Number(userAnswer)
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
              disabled={isDisabled}
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

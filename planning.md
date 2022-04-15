# Planning Addition Rules!

In this React application, the user is given an addition problem with two numbers ranging from 0 to 100. There is a controlled input for the user to enter their answer. The user should click the primary "Check Answer" button to submit their answer and get feedback of whether or not it was correct as calculated by the MathJS API. After submission, the "Check Answer" button turns grey to indicate it is disabled until the user clicks the "next question" button which will load two new random numbers. The "Check Answer" button then returns to it's original green color.

## Initial Design

My initial design was slightly different from the end result (see sketch below, apologies for the handwriting!), but held true to the main design themes. I wanted a vertical layout because it makes it so much easier when you're learning to add as a child. I made sure to align the numbers so each column is easy to visualize. The main notable differences from my initial design was moving the alert message to the top rather than on the bottom and the format for the # of correct answers.

<img src='./src/images/renci-task-sketch.jpg' alt='Initial sketch of app layout/design' width='500px'/>

## Enhancements

### Keep a running total score

I implemented a simple UI to inform the user of how many questions they answered corectly, the total amount of questions answered, and the percent of correct answers. A next for this would be to implement session or local storage to keep these scores between reloads. A reset button might be a nice touch if so, so that the user could control when they start a new addition practice session.

### Generating more complex mathematical expressions

Adding different operations and/or controlling the figures of the numbers in this app would make it more flexible and useful to a broader audience. A simple way to implement both of these would be to add radio buttons and control the answer in state. For example, if the user wanted to practice multiplication, they could switch the radio button from addition to multiplication and the the questions would be set up to conditionally render to the operator at hand based on the state (e.g., `[operator, setOperator] = useState('add')`). Similarly, you could control the amount of digits in each number, or even impplment decimals to practice with larger or smaller numbers. Adding these two variations would eenhance this app with a much larger amount of variability and would appeal to a wider user base.

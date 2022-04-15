<!-- ## Planning

Provide a `planning.md` file that gives insight into how you planned to build this application, including brief details on how the user interacts with the interface and how the services communicate. This does not need to be polished; a photo of a whiteboard sketch or two with an accompanying story is sufficient.

Discuss how you would add (or actually add) one or two of the following enhancements to your application as you see fit:

- Add unit testing
- Generating more complex mathematical expressions
- Maintain a history of questions
- Keep a running total score
- Give multiple questions at once
- Utilize a timer
- Limit the number of incorrect answers
- Brand the application
- _Anything_ else -->

# Planning Addition Rules!

In this React application, the user is given an addition problem with two numbers ranging from 0 to 100. There is a controlled input for the user to enter their answer. The user should click the primary "Check Answer" button to submit their answer and get feedback of whether or not it was correct as calculated by the MathJS API. After submission, the "Check Answer" button turns grey to indicate it is disabled until the user clicks the "next question" button which will load two new random numbers. The "Check Answer" button then returns to it's original green color.

## Initial Design

My initial design was slightly different from the end result (see sketch below, apologies for the handwriting!), but held true to the main design themes. I wanted a vertical layout because it makes it so much easier when you're learning to add as a child. I made sure to align the numbers so each column is easy to visualize. The main notable differences from my initial design was moving the alert message to the top rather than on the bottom and the format for the # of correct answers.

<img src='./src/images/renci-task-sketch.jpg' alt='Initial sketch of app layout/design' width='500px'/>

## Enhancements

### Keep a running total score

### Generating more complex mathematical expressions

### Utilize a timer

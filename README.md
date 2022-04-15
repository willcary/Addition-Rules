# Addition Rules!

See [Live Version](https://additionrules.netlify.app/)

In this React application, the user is given an addition problem with two numbers ranging from 0 to 100. There is a controlled input for the user to enter their answer. The user should click the primary "Check Answer" button to submit their answer and get feedback of whether or not it was correct as calculated by the MathJS API. After submission, the "Check Answer" button turns grey to indicate it is disabled until the user clicks the "next question" button which will load two new random numbers. The "Check Answer" button then returns to it's original green color. The user always has the option to skip a question.

## Contribute

To run this app on your local system you will need Node >= 14.0.0 and npm >= 5.6. See [Create React App](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md) `README.md` file for available scripts.

_Contributors are welcome!_ See `planning.md` for some ideas. Other ideas that would be nice to implement:

- Infrastructure - I designed and created this app in a hurry and I think it could benefit from some refactoring. Certainly dividing up elements into individual components and splitting up the CSS into more specific sheets to be imported by said components would increase code readability/reusability and make it easier to maintain.
- Implement design framework - I coded the CSS from scratch, but it may benefit future iterations of this app to refactor the styles using a third party framework such as Bootstrap or Material Design.
- Implement unit testing - To add robustness to this app, it would be beneficial to add unit testing to refactored components to ensure consistent and predicatable UI.

## Build and Deploy

To ensure the app is ready for production, you need to run the command `npm run build`. This will optimize the build for best performance. From there, you can use the production build to deploy to your host of choice. The [live version](https://additionrules.netlify.app/) as linked above is hosted on [netlify](https://www.netlify.com/).

## Technologies and Credits

- [React](https://reactjs.org/)
- CSS
- [math.js](https://api.mathjs.org/)
- [Create React App](https://github.com/facebook/create-react-app)

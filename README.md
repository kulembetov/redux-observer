## Redux Observer Pattern Example

This project demonstrates the use of the Observer pattern in a Redux application using the `redux.subscribe` method.

### Explanation

The Observer pattern is a design pattern where an object (the subject) maintains a list of its dependents (observers) and notifies them automatically of any state changes. In a Redux application, the Redux store acts as the subject, and the functions or components that subscribe to it are the observers.

### Key Components

- **Subject**: The Redux store, which holds the application's state.
- **Observers**: Functions or components that register to be notified of state changes.
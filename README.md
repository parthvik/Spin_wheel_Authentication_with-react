# React Spin Wheel With Authentication

This is a simple React application that provides login and signup functionality. Users can register themselves, login with their credentials, and view a success page upon successful login.

## Prerequisites

Before running the application, ensure that you have the following software installed on your machine:

- Node.js
- Yarn package manager

## Installation

Clone the repository or download the source code.
Open your terminal and navigate to the project directory.
Install the project dependencies by running the following command:

yarn install

bash
Copy code

## Usage

To start the application, use the following command:

yarn start

swift
Copy code

This will start the development server and open the application in your default browser.

## Project Structure

The project's file structure is as follows:

css
├── src/
│ ├── components/
│ │ ├── Login.js
│ │ ├── Signup.js
│ │ └── Success.js
│ ├── App.js
│ └── index.js
└── ...

vbnet
Copy code

- `src/components/`: Contains the React components for the application.
  - `Login.js`: Renders the login form and handles user login.
  - `Signup.js`: Renders the signup form and handles user registration.
  - `Success.js`: Displays a success message upon successful login.
- `App.js`: The main component that handles the application logic and renders the login, signup, and success pages based on user actions.
- `index.js`: Entry point of the application.

## Customization

You can customize the application by modifying the code in the respective components. For example, you can update the styling, add form validation, or integrate with a backend API for user authentication.

## Dependencies

The application uses the following dependencies:

- React: JavaScript library for building user interfaces.
- React Router DOM: Library for adding routing functionality to React applications.

## Contributing

Contributions are welcome! If you find any issues or want to improve the application, feel free to submit a pull request.

## License

This project is licensed under the MIT License.

---

## Spin the Wheel Game Logic

This application also includes a "Spin the Wheel" game. Here's how the game logic works:

- The game starts when the user clicks the "Start" button.
- The game limits the number of plays to three.
- On each play, a random reward is generated from a predefined list of rewards.
- The user is shown the won reward and a "Re-spin" button to play again.
- If the user reaches the maximum number of plays, a "Game Over" message is displayed.

The game logic is implemented in the `Game` component in `Game.js` file.

Feel free to explore the code and customize the game according to your requirements.

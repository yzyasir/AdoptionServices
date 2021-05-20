import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
// FRONT END WORK
// 1) Make a react app "npx create-react-app thenTheTheName"
// 1.5) Note to run the react scripts, you have to cd into the client and do "npm start" 
// 2) Check if theres a .git, it creates issues down the road, so make sure its not there (check with "ls -a")
// 3) Install the front side dependencies (while in client) that you need "npm install axios bootstrap @reach/router"
// 4) Make a directory for your components, views
// 5) I first started with making a form component, lets go there now
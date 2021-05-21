import './App.css';
import {Router} from '@reach/router';
import AdoptionListPage from "./views/AdoptionListPage";


function App() {
  return (
    <div className="App">
      <Router>
        <AdoptionListPage path="/"/>
      </Router>
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
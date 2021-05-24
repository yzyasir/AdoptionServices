import './App.css';
import {Router} from '@reach/router';
import AdoptionListPage from "./views/AdoptionListPage";
import CreateAdoptee from "./views/CreateAdoptee";
// Need to import bootstrap from the terminal as a dependency, and then import it into where you are going to use it. 
// I included it here because of course I will use include everything here.
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // So the neat thing is, if I want something to be displayed on every single page, I can include it here in app.js. Like adding a h3 and creating a title for all pages. 
  // Not much practicality since all pages are often unique, but can have its uses like a navbar perhaps.
  return (
    <div className="App">
      <Router>
        <AdoptionListPage path="/" />
        <CreateAdoptee path="/create/new/adoptee" />
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
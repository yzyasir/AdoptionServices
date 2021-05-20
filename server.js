// How to start own MERN Project For Backend (Adrion)!
// Step 1) Make the folders in a server folder, then make a server.js file outside of it
// Step 2) Then in the folder for your backend (atm all I have is the backend), do "npm init -y" in the command line. It will make a package.json.
// Step 3) Then install all the dependencies you need (in the same folder structure), "npm i express cors mongoose". And anythin else you want.

// Now we actually fill the backend with our beautiful code
// Step 4) 
const express = require('express'),
    app = express(),
    port = 8000,
    cors = require('cors'); 

app.use(express.json(), express.urlencoded({extended: true}));
app.use(cors());

app.listen(port, ()=> console.log(`Listening on port ${port}`)) // made a small anon arrow function here

// Step 10)
// After doing the above, we then do our config and routes, and then import here (which is what we did below)
require("./server/config/config.database");
const AllAdopteeRoutes = require("./server/routes/adoption.routes");
AllAdopteeRoutes(app); 
//if I had multiple route files then I have to passs in an (app) for every single one in the require statements in the server

// Step 11) 
// Now check if it all startes using "npm start" (this starts the server, as well as the react scripts)
// But to turn on the react portion, cd into the client, but for server just be outside where server.js is located
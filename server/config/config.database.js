// Step 5)  
// Importing mongoose here
const mongoose = require('mongoose');

// Then just need to connect said mongoose
const database = "adoptionDB";
mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser:true,
    useUnifiedTopology:true // Need to add this otherwise you will get a deprication error
}) 
    .then(res => console.log("You are now in the mainframe!!!"))
    .catch(err => console.log(`Uh oh something went wrong ${err}`))

require(`./server/config/config.database`); //connecting the config file here

// Note: I CAN go to the package.json file and change the start scripts to "nodemon server.js" if need be

// Step 6) 
// Check if the server runs by "npm start"
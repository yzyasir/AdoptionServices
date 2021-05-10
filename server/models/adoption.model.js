// Step 7)
// importing Mongoose, creating the model for our project
const mongoose = require("mongoose");

const adoptionSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Add a name for your pet"],
        minlength:[3, "Name needs to be 3 characters long"],
        maxlength:[12, "Pet name is too long, be reasonable please"]
    }
}, {timestamps:true}) //Here we are making time stamps for any of the data we make

const Adoption = mongoose.model("Adoption", adoptionSchema); // Here we are registering our schema
module.exports = Adoption; //here we are exporting the schema

// Now we go make our controllers
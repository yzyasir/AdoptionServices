// Step 7)
// importing Mongoose, creating the model for our project
const mongoose = require("mongoose");

const adoptionSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Add a name for the adoptee"],
        minlength:[3, "Name needs to be 3 characters long"],
        maxlength:[50, "Pet name is too long, be reasonable please"]
    },
    description:{
        type: String,
        required:[true, "Add a description for the adoptee"],
        minlength:[5, "Please add a longer description"], 
        maxlength:[50, "Please make the description slightly smaller"]
    },
    quality:{
        type: String,
        required:[true, "Please give the adoptee a quality"],
        maxlength:[10, "Please keep the quality to one word"]
    },
    age:{
        type: Number, 
        required:[true, "Please give the adoptee an age"],
        maxlength:[2, "Please give the adoptee a realistic age"]
    }

}, {timestamps:true}) //Here we are making time stamps for any of the data we make

const Adoption = mongoose.model("Adoption", adoptionSchema); // Here we are registering our schema
module.exports = Adoption; //here we are exporting the schema

// Now we go make our controllers
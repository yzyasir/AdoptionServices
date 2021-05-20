// Step 8: Here we are going to add all our CRUD functions
// Need to import the models here, of course
const Adoption = require("../models/adoption.model");

// -----------------------------------------------------------------------------------------------
// Here we can use these two functions to test on Postman whether or not it works 

// FIND ALL
module.exports.findAllPets = (req, res) => {
    Adoption.find(req.body)
    .then(allPet => res.json({message: "Success, we found all Pets", pet: allPet}))
    .catch(err => res.json({message: "Hey, something went wrong", error: err}))
}

// FIND ONE
module.exports.findOnePet = (req, res) => {
    Adoption.findOne({_id: req.params.id})
        .then(onePet => res.json({message: "Success, you found one pet", Pet: onePet}))
        .catch(err => res.json({message: "Hey, something went wrong", error: err}))
}

// CREATE
module.exports.createNewPet = (req, res) => {

    console.log(`getting name ${req.params.name}`)

    Adoption.create(req.body)
        .then(newPet => res.json({pet: newPet}))
        .catch(err => res.json({message: "Hey, something went worng", error: err}))
}

// DESTROY
module.exports.destroy = (req, res) => { // We use destroy instead of delete because delete is a keyword
    Adoption.remove({_id: req.params.id}) // Need to include the id so we can delete that specific one
    .then(res.json({message: "Success, you deleted a pet"}))
    .catch(err => res.json({message: "Hey, something went wrong", error: err}))
}

// -----------------------------------------------------------------------------------------------

// UPDATE
module.exports.updatePet = (req, res) => {
    Adoption.findByIdAndUpdate({_id: req.params.id}, {
        $set: {
            // Here you can put in any of the other info you are updating from your models
            name: req.body.review
        }
    }, {runValidators: true})
        .then(updatedPet => res.json({message: updatedPet}))
        .catch(err => res.json({message: "Hey the update failed", error: err}))
}

// Can also write like this: (All in one object)

// module.exports = {
// index: (req,res) => {
// 
// },
// show: (req,res) => {
// 
// },
// update:(req,res) => {
// 
// }
// }
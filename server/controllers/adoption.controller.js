// Step 8: Here we are going to add all our CRUD functions
// Need to import the models here, of course
const Adoption = require("../models/adoption.model");

// -----------------------------------------------------------------------------------------------
// Here we can use these two functions to test on Postman whether or not it works 

module.exports.createPet = (req, res) => {
    Adoption.create(req.body)
        .then(newPet => res.json({message: "Success, you submitted a pet", pet: newPet}))
        .catch(err => res.json({message: "Hey, something went worng", error: err}))
}

module.exports.findAllPets = (req, res) => {
    Adoption.find(req.body)
    .then(allPet => res.json({message: "Success, we found all Pets", pet: allPet}))
    .catch(err => res.json({message: "Hey, something went wrong", error: err}))
}

module.exports.destroy = (req, res) => {
    Adoption.remove({_id: req.params.id})
    .then(res.json({message: "Success, you deleted a pet"}))
    .catch(err => res.json({message: "Hey, something went wrong", error: err}))
}

// -----------------------------------------------------------------------------------------------

module.exports.findOnePet = (req, res) => {
    Adoption.findOne({_id: req.params.id})
        .then(onePet => res.json({message: "Success, you found one pet", Pet: onePet}))
        .catch(err => res.json({message: "Hey, something went wrong", error: err}))
}

module.exports.updatePet = (req, res) => {
    Adoption.update({_id: req.params.id}, {
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
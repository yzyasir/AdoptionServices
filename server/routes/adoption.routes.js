// Step 9) Here we can make endpoints where we can test out controller functions

const AdoptionController = require('../controllers/adoption.controller'); //here we are importing our controllers

module.exports = (app) => {
    //if we wanted to use that index idea, we would have to do this below
    // app.get("/api/pets", AdoptionController.index)
    //the url word order does matter, if incorrect order it may hit the wrong one or overlook the right one 

    app.get("/api/pets", AdoptionController.findAllPets) // used to find all pets if needed
    app.get("/api/pet/:id", AdoptionController.findOnePet) // Used for show page
    app.post("/api/pet/new", AdoptionController.createNewPet) // Used to Create Pet
    app.put("/api/pet/update/:id", AdoptionController.updatePet) // can edit the page if needed
    app.delete("/api/pet/deleteOne/:id", AdoptionController.destroy) // when a pet is adopted we will of course delete the posting
}

// Step 10)
// Go to the server and import whats necessary 
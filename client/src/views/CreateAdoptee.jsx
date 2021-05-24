// STEP 5) I did this before step 6 (which is making the form component, but its no big deal really), i just have the functions made and everything ready to pass into the form

import { navigate } from '@reach/router';
// we import both navigate and link from reach/router

// need to make a form component and then export, and import it
import axios from 'axios';
import React, {useState} from 'react';
// Always gotta import React

import Form from '../components/Form';

// Front-End:
// 5) Here we are making a component in which we can can fit into other files (create, edit)
// We will be using props to pull necessary functions (from other files like onChange and onSubmit) and values (to connect to the backend, like name and description) 
const CreateAdoptee = (props) => {
    // The logic for each form that I will be passing in will be different, create, update
    const [form, setForm] = useState({
        name: "",
        description: "",
        quality: "", 
        age: ""
        // State is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.
        // A component may choose to pass its state down as props to its child components
    })

    const [error, setError] = useState({}); // this is for storing our errors

    const onChangeHandler = (e) => {    // we will be using this to update our data as we fill the form out

        e.preventDefault(); // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
        // For example, this can be useful when: 
        // Clicking on a "Submit" button, prevent it from submitting a form
        // Clicking on a link, prevent the link from following the URL

        setForm({
            ...form, // this ""..."" is called the spread operator. Spread syntax can be used when all elements from an object or array need to be included in a list of some kind. 
            [e.target.name]: e.target.value // this needs to be e.target.name so that the component in the form updates
        })
    }

    const onSubmitHandler = (e) => {  // in onSubmitHandler we are going to be we we use axios to reach our c in crud component 

        e.preventDefault(); // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
        // For example, this can be useful when: 
        // Clicking on a "Submit" button, prevent it from submitting a form
        // Clicking on a link, prevent the link from following the URL

        axios.post("http://localhost:8000/api/pet/new", form) // Axios is a promise based HTTP client for the browser and node.js. 
        // Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser that also supports the ES6 Promise API.
        // Notice how we are using .post, we are doing the c in crud, form is pulling in the form component after we make, export, then import the component 

        // Here we are doing a promise with if and else statements. Read up more on documentation
        .then(res => {
            if(res.data.error){
                console.log(res.data.error.errors); // this will log our errors into the console for us to see what they are
                setError(res.data.error.errors); // we are setting out errors into setState
            } else {
                console.log("on submit worked, the data should have gone through"); // going to get a console.log that hey the information went through properly
                navigate("/") // need to import the navigate function along with the link a the top, once the info is submitted with want to see it updated on the dash board
            }
        })
        .catch(console.log("The submit did not work"))
        // The catch statement lets you handle the error. This will console log and tell us the bad news. 
    }

    return(
        <div>
            <Link>Go to main page</Link>
            <h3>Know a pet needing a loving home?</h3>

            {/* Need to pass oneChangeHandler and onSubmitHandler this way so that they can access it through the use of props */}
            {/* Make a form and put it into here */}
            <Form onSubmitHandler={onSubmitHandler} form={form} onChangeHandler={onChangeHandler} error={error}/> {/* Need to pass in all the things we need such as out functions, errors, and form */}
            
        </div>
    )
}
export default CreateAdoptee;
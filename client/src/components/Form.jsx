import React from 'react';
// Always gotta import React

// Front-End:
// 5) Here we are making a component in which we can can fit into other files (create, edit)
// We will be using props to pull necessary functions (from other files like onChange and onSubmit) and values (to connect to the backend, like name and description) 
const Form = (props) => {
    // The logic for each form that I will be passing in will be different, create, update
    const [form, setForm] = useState({
        name: "",
        description: "",
        quality: "", 
        age: ""
        // data is stored in json format
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

    const onSubmitHandler = (e) => {
        e.preventDefault(); // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
        // For example, this can be useful when: 
        // Clicking on a "Submit" button, prevent it from submitting a form
        // Clicking on a link, prevent the link from following the URL


    }

    return(
        <div>
            
        </div>
    )
}
export default Form
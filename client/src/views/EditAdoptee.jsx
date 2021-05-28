import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Form from '../components/Form';
import {navigate, Link} from '@reach/router';


const EditAdoptee = (props) => {
    // The logic for each form that I will be passing in will be different, create, update
    const [form, setForm] = useState({ 
        name: "",
        description: "", // so, I didnt use spread for this, but I could
        quality: "", 
        age: ""
        // State is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.
        // A component may choose to pass its state down as props to its child components
    });

    const [error, setError] = useState({}); // using the state hook since this is a functional component

    useEffect(() => { // By using this Hook, you tell React that your component needs to do something after render. By using this Hook, you tell React that your component needs to do something after render.
        axios.get(`http://localhost:8000/api/pet/${props._id}`) // In this effect, we use axios to call on an api, so we could also perform data fetching or call some other imperative API and other things
            .then(res => setForm(res.data.pet)); // here we're doing a small promise without catch
    }, [])

    const onChangeHandler = (e) => { // this synthetic event is what helps change the form data
        e.preventDefault(); // stops the default action of onChange
        setForm({
            ...form, // here we are updating the setState of my form data
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pet/update/:id${props._id}`, form) // here we are submitting the data through the body to create an adoptee
            .then(res => { // promises mixed in with an if else
                if(res.data.error){
                    setError(res.data.error.errors); // if something goes wrong in the submission, update the errors state
                } else {
                    navigate('/') // if everything goes well, then navigate us to the home page
                }
            })
    }

    return(
        <div>
            <Link to="/">Go to Main page</Link>
            <Form onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} error={error}/> 
        </div>
    )
}

export default EditAdoptee;
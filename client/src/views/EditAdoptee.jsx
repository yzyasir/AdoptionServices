import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Form from '../components/Form';
import {navigate, Link} from '@reach/router';


const EditAdoptee = (props) => {
    // The logic for each form that I will be passing in will be different, create, update
    const [form, setForm] = useState({
        name: "",
        description: "",
        quality: "", 
        age: ""
        // State is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.
        // A component may choose to pass its state down as props to its child components
    });

    const [error, setError] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${props._id}`)
            .then(res => setForm(res.data.pet));
    }, [])

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pet/update/:id${props._id}`, form)
            .then(res => {
                if(res.data.error){
                    setError(res.data.error.errors);
                } else {
                    navigate('/')
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
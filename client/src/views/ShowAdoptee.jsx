import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import {navigate} from '@reach/router';

const ShowAdoptee = (props) => {
    const [adoptee, setAdoptee] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${props._id}`)
        .then(res => setAdoptee(res.data.pet))
    }, [])

    const removeAdoptee = (_id) => {
        axios.delete(`http://localhost:8000/api/pet/deleteOne/${props._id}`)
        .then(res => console.log("A pet was adopted!"))
        .then(navigate("/"))
        .catch(err => console.log(err))
    }

    return(
        <div>
            <Link to="/">Go to main page</Link>
            <h3>Details about: {adoptee.name}</h3>
            <a><button onClick={() => removeAdoptee(props._id)}><h2>Adopt {adoptee.name}</h2></button></a>
            <p>Pet Type: {adoptee.description}</p>
            <p>Pet Quality: {adoptee.quality}</p>
            <p>Pet Age: {adoptee.age}</p>
        </div>
    )
}

export default ShowAdoptee;
import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import {Link} from '@reach/router';


const AdoptionListPage = (props) => {

    const [adoptee, setAdoptee] = useState();

    useEffect(() =>{ 
        axios.get("http://localhost:8000/api/pets")
        // .then(res => console.log(res.data)) // Checked in console to see whether or not its present
        // .then(res => console.log(res.data.pet)) // Went into pets to see the information we get in the form of json
        .then(res => setAdoptee(res.data.pet)) // Now we are putting our information into set state
    })

    return(
        <div>
            <h3>These pets are looking for a good home</h3>
        </div>
    )


}

export default AdoptionListPage;
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';


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
            <Link to=""><p>Create Adoptee</p></Link>

            <table>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Characteristic</th>
                    <th>Age</th>
                </tr>
                {
                    adoptee ?
                    adoptee.map((adoptees, indexValues) => {
                        return <tr>
                        <td>{adoptees.name}</td>
                    </tr>
                    }): ""
                }
            </table>
        </div>
    )


}

export default AdoptionListPage;
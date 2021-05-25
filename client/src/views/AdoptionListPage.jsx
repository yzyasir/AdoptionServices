import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';


const AdoptionListPage = (props) => {
    // go over the props and what they can do

    const [adoptee, setAdoptee] = useState();
    // make notes on state and setstate a bit more

    useEffect(() =>{ 
        axios.get("http://localhost:8000/api/pets")
        // .then(res => console.log(res.data)) // Checked in console to see whether or not its present
        // .then(res => console.log(res.data.pet)) // Went into pets to see the information we get in the form of json
        .then(res => setAdoptee(res.data.pet)) // Now we are putting our information into set state
    })

    return(
        <div>
            <h3>These pets are looking for a good home</h3>
            <Link to="/create/new/adoptee"><p>Create Adoptee</p></Link>
            {/* todo: need to actually make a link for this, look up how to do that */}
            <table className="table table-bordered">
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Characteristic</th>
                    <th>Age</th>
                </tr>
                {
                    adoptee ?
                    adoptee.map((adoptees, indexValues) => {
                        // adoptees is the way to cycle through 
                        return <tr>
                        <td>{adoptees.name}</td>
                        <td>{adoptees.description}</td>
                        <td>{adoptees.quality}</td>
                        <td>{adoptees.age}</td>
                        <td><a href={`http://localhost:3000/show/edit/adoptee/${adoptees._id}`}>Edit</a> | <a href={`http://localhost:3000/shows/adoptee/${adoptees._id}`}>Details</a> </td>
                    </tr>
                    }): ""
                }
            </table>
        </div>
    )


}

export default AdoptionListPage;
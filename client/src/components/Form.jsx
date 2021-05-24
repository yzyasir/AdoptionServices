import React from 'react';
// Always gotta import React

// Front-End:
// Step 6 but technically step 5) Here we are making a component in which we can can fit into other files (create, edit)
// We will be using props to pull necessary functions (from other files like onChange and onSubmit) and values (to connect to the backend, like name and description) 
const Form = (props) => {
    // The logic for each form that I will be passing in will be different, create, update

    return(
        <div className="row"> {/* In Bootstrap, the "row" class is used mainly to hold columns in it. Bootstrap divides each row into a grid of 12 virtual columns. In the following example, the col-md-6 div will have the width of 6/12 of the "row"s div, meaning 50%. The col-md-4 will hold 33.3%, and the col-md-2 will hold the remaining 16.66%. */}
            <div className="col-sm-2"/> {/* Remember row can have only 12 columns, so this takes up 2 and leaves 3 */}

            <div className="col-sm-8"> {/* This takes up 8 of the 12 columns, this will be much larger than the others and its where we will put our form */}
                
                <form > {/* This is where we will want to include the functions we made like on submit, its from CreateAdoptee passing it in through props */}
                    
                    <div className="form-group"> {/* The FormGroup component is the easiest way to add some structure to forms. It provides a flexible container for grouping of labels, controls, optional help text, and form validation messaging. By default it only applies margin-bottom, but it picks up additional styles in <Form inline > as needed. */}
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" onChange={props.onChangeHandler} value={props.form.name}></input> {/* Here we want to include onChangeHandler since we want to update the input field, and include value and bring the value from props */}
                        {/* We have to pass our name value from props as well as through form, otherwise it wont work */}

                        { // We are passing our errors through props. 
                          // Need to research what is going on here a bit 
                            props.error.type ?
                            <span>{props.error.type.message}</span>
                            : ""
                        }
                    </div>
                    <div className="form-group"> {/* The FormGroup component is the easiest way to add some structure to forms. It provides a flexible container for grouping of labels, controls, optional help text, and form validation messaging. By default it only applies margin-bottom, but it picks up additional styles in <Form inline > as needed. */}
                        <label>Description</label>
                        <input type="text" name="description" className="form-control" onChange={props.onChangeHandler} value={props.form.description}></input> {/* Here we want to include onChangeHandler since we want to update the input field, and include value and bring the value from props */}
                        {/* We have to pass our name value from props as well as through form, otherwise it wont work */}

                        { // We are passing our errors through props. 
                          // Need to research what is going on here a bit 
                            props.error.type ?
                            <span>{props.error.type.message}</span>
                            : ""
                        }
                    </div>
                    <div className="form-group"> {/* The FormGroup component is the easiest way to add some structure to forms. It provides a flexible container for grouping of labels, controls, optional help text, and form validation messaging. By default it only applies margin-bottom, but it picks up additional styles in <Form inline > as needed. */}
                        <label>Adoptee Quality</label>
                        <input type="text" name="quality" className="form-control" onChange={props.onChangeHandler} value={props.form.quality}></input> {/* Here we want to include onChangeHandler since we want to update the input field, and include value and bring the value from props */}
                        {/* We have to pass our name value from props as well as through form, otherwise it wont work */}

                        { // We are passing our errors through props. 
                          // Need to research what is going on here a bit 
                            props.error.type ?
                            <span>{props.error.type.message}</span>
                            : ""
                        }
                    </div>
                    <div className="form-group"> {/* The FormGroup component is the easiest way to add some structure to forms. It provides a flexible container for grouping of labels, controls, optional help text, and form validation messaging. By default it only applies margin-bottom, but it picks up additional styles in <Form inline > as needed. */}
                        <label>Adoptee Age</label>
                        <input type="text" name="age" className="form-control" onChange={props.onChangeHandler} value={props.form.age}></input> {/* Here we want to include onChangeHandler since we want to update the input field, and include value and bring the value from props */}
                        {/* We have to pass our name value from props as well as through form, otherwise it wont work */}

                        { // We are passing our errors through props. 
                          // Need to research what is going on here a bit 
                            props.error.type ?
                            <span>{props.error.type.message}</span>
                            : ""
                        }
                    </div>
                                           
                    <input type="submit" value="Submit" className="btn btn-primary"/> {/* Need to include a submit button afterall */}

                </form>

            </div>
                        
            <div className="col-sm-2" /> {/* Remember, since a row only include 12 columns, 2 are taken from the left, 8 for the form, and 2 right now for even spacing */}

        </div>
    )
}
export default Form;
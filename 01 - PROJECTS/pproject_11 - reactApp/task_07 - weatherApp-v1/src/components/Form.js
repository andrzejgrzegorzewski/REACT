import React from 'react';

const Form = props => {
    return ( 
        <form onSubmit={props.submit}>
        <input type="text" value={props.value} placeholder="Enter city" onChange={props.change} />
        <button>Search for the city</button>
        </form>
     );
}
 
export default Form;
import React from 'react'

const ButtonFetchUsers = props => {
    return ( 
        <button 
            style={{
                padding:'10px 20px',
                border: '4px solid yellow',
                borderRadius: '50%',
                backgroundColor: 'green',
                color: 'yellow',
                margin: 20,
                boxShadow: '0 0 0 4px yellow, 0 0 0 12px green',
            }}
        onClick={props.click}>Add user !</button>
     );
}
 
export default ButtonFetchUsers;
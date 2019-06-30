import React from 'react';
import './ButtonFetchUsers.css';

const ButtonFetchUsers = props => {
    return ( 
        <button className='btn' onClick={props.click}>Display 3 users !</button>
     );
}
 
export default ButtonFetchUsers;
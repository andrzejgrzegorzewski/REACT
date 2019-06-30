import React from 'react';
import './UserList.css';

const UsersList = (props) => {

    const users = props.users.map(user => (
        <div key={user.login.uuid}>
            <img src={user.picture.large} alt={user.name.last}></img>
            <h4>{`${user.name.title} ${user.name.last}`}</h4>
            <p>{user.email}</p>
        </div>
    ));
    return ( 
    <div className='users'>
        {users.reverse()}
    </div>
    );
}
 
export default UsersList;
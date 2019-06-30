import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','https://jsonplaceholder.typicode.com/users', true);

    // xhr.onload = ()=>{
    //   // console.log(typeof xhr.response);
    //   console.log(xhr.status);

    //   if(xhr.status === 200){

    //     const users = JSON.parse(xhr.responseText)
    //     console.log(users);
    //     this.setState({users});        
    //   }
    // }
    // or

    xhr.addEventListener('load', ()=>{

      // console.log(typeof xhr.response);
      console.log(xhr.status);

      if(xhr.status === 200){

        const users = JSON.parse(xhr.responseText)
        console.log(users);
        this.setState({users});        
      }
    })

    xhr.send(null);
  }

  render() {
    const users = this.state.users.map(user =>(
      <div key={user.id}>
      <h4>{user.name}</h4>
      <p>{user.address.city}</p>
      </div>
    ))
    return (
      <div>
        {users}
      </div>
    );
  }
}

export default App;

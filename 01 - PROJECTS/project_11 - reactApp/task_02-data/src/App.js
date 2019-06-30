import React, { Component } from 'react';
import './App.css';

const data =[
  {id: 1, title: 'Note number 1', body: 'Content of message No. 1 ...'},
  {id: 2, title: 'Note number 2', body: 'Content of message No. 2 ...'},
]

setInterval(()=>{
  const index = data.length +1;
  data.push({
     id: index,
     title: `Note number ${index}`,
     body: `Content of message No. ${index} ...`,
  });
},2000);

class App extends Component {
  state = {
    comments:[...data]
  }

  getData = () => {
    if(this.state.comments.length !== data.length){
      this.setState({
        comments:[...data]
      })
    } else {
      console.log('The same data - does not update');
    }
  }

  componentDidMount() {
    this.idInterval = setInterval(this.getData,2000)
  }

  componentWillUnmount(){
    clearInterval(this.idInterval)
  }
  
  render() {

    const comments = this.state.comments.map(comment=>(
      <div key={comment.id}>
        <h4>{comment.title}</h4> 
        <div>{comment.body}</div>
      </div>
    ))

    return (
      <div className="App">
      {comments.reverse()}
      </div>
    );
  }
}

export default App;

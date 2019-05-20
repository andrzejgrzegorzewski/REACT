class App extends React.Component{
  state={
    value: ""
  }

handleChange(e){
  console.log("The content of the evente" + e.target.value);
  console.log("The content of value before setState" + this.state.value);

  this.setState({
    value: e.target.value
  })
  console.log("The content of value after setState" + this.state.value);
}

handleClick = () => {
  this.setState({
    value:""
  })
}

render(){
  console.log("The content of value in render methode" + this.state.value);
    return(
      <>
      <input value = {this.state.value} placeholder = "input" onChange = {this.handleChange.bind(this)} type="text"/>
      <button onClick = {this.handleClick}>Reset</button>
      <h1 className="title">{this.state.value.toUpperCase()}</h1>
      </>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'));
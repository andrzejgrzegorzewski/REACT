class App extends React.Component {

  state={
   options:[
          "aaaa",
          "bbbb",
          "cccc",
          "dddd",
          "eeee",
          "ffff",
      ],
      option: null,
      value: "",
  }

  handleShowOption = () => {

    const index = Math.floor(Math.random()*this.state.options.length);
    
    this.setState({
      option: this.state.options[index]
    })
  }
  
  handleInputChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  handleAddClick = () => {
    if(this.state.value === "") return alert ("Add something")

    // const options = [...this.state.options]
    // options.push(this.state.value)
    // or

    const options = this.state.options.concat(this.state.value)
    
    this.setState({
      options,
      value:"",
    })
    
    alert (`Your Divinations is: ${options}`)

  }

  render() {

      return (
      <>
      <button onClick={this.handleShowOption}>See the DIVINATION</button>
      <br/>
      <br/>
      <input type="text" value={this.state.value} onChange={this.handleInputChange}/>
      <button onClick={this.handleAddClick}>Add DIVINATION</button>
      <br/>
      <br/>
      {this.state.option? <h1>{this.state.option}</h1>: null}
      </>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))
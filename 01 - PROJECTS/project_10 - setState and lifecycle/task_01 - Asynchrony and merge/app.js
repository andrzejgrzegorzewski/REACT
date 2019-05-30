class Clicker extends React.Component {

  state={
    number1: 0,
    number2: 0,
    number3: 0,
  }

  handleClick1 = () => {
    this.setState(prevState => ({
      number1: prevState.number1 +1
    }))
    console.log(`In handleClick ${this.state.number1}`)
  }
  
  handleClick2 = () => {
    this.setState({
      number2: this.state.number2 + 1
    })
    this.setState({
      number2: this.state.number2 + 1
    })
    this.setState({
      number2: this.state.number2 + 1
    })
    console.log(`In handleClick ${this.state.number2}`)
  }

  handleClick3 = () => {
    this.setState(prevState => ({
      number3: prevState.number3 + 1
    }))
    this.setState(prevState => ({
      number3: prevState.number3 + 1
    }))
    this.setState(prevState => ({
      number3: prevState.number3 + 1
    }))
    console.log(`In handleClick ${this.state.number3}`)
  }
  
  render() {
    console.log(`In render ${this.state.number1}`)
    return (
      <div>
        <button onClick={this.handleClick1}>Add 1</button>
        <h1>{this.state.number1}</h1>
        <button onClick={this.handleClick2}>Add 3</button>
        <h1>{this.state.number2}</h1>
        <button onClick={this.handleClick3}>Add 3</button>
        <h1>{this.state.number3}</h1>
      </div>
    )
  }
}

ReactDOM.render(<Clicker />, document.getElementById('root'))


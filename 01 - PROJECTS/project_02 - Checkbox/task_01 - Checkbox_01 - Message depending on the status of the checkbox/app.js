const PositiveMessage = () => <p>You can watch the movie!!! Welcome</p>;
const NegativeMessage = () => <p>You cant watch the movie !!! Sorry</p>;



class CheckboxAgeConfirmation extends React.Component {

  state = {
    
    isConfirmed: false,

  }

  handleCheckboxChange = () => {

    this.setState({
      isConfirmed: !this.state.isConfirmed,
    })

  }

  displayMessage = () => {
    if(this.state.isConfirmed){
      return <PositiveMessage/>
    } else {
      return <NegativeMessage/>
    }
  }

  render() {
    console.log(this.state.isConfirmed)
    return(
    <>
      <h1> Buy a ticket for the horror of the year </h1>
      <input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={this.state.isConfirmed}/>
      <label htmlFor="age">I am at least 16 years old!!!</label>

      {this.displayMessage()}
      </>
    )
  }


}

ReactDOM.render(<CheckboxAgeConfirmation/> , document.getElementById('root'))
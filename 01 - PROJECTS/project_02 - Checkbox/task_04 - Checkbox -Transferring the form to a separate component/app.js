const ValidationMessage = (props) => <p>{props.txt}</p>;

const OrderForm = (props) => {
  return(
  <form onSubmit={props.submit}>
      <input type="checkbox" id="age" onChange={props.change} checked={props.checked}/>
      <label htmlFor="age">I am at least 16 years old!!!</label>
      <br/><br/>
      <button>Buy a ticket</button>
      </form>
  )
}

class TicketShop extends React.Component {

  state = {
    
    isConfirmed: false,
    ifFormSubmitted: false,

  }

  handleCheckboxChange = () => {

    this.setState({
      isConfirmed: !this.state.isConfirmed,
      ifFormSubmitted: false,
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()

      if(!this.state.ifFormSubmitted){
      this.setState({
        ifFormSubmitted: true,
      })
    }

  }

  displayMessage = () => {
    if(this.state.ifFormSubmitted){
      if(this.state.isConfirmed){
        return <ValidationMessage txt = "You can watch the movie!!! Welcome"/>
      } else {
        return <ValidationMessage txt = "You cant watch the movie !!! Sorry"/>
      }
  } else {return null}
  }

  render() {
    
    const {isConfirmed,ifFormSubmitted} = this.state

    return(
    <>
      <h1> Buy a ticket for the horror of the year </h1>
      <OrderForm 
      submit={this.handleFormSubmit} 
      change={this.handleCheckboxChange} 
      checked={isConfirmed}/>
      
      {this.displayMessage()}
      </>
    )
  }


}

ReactDOM.render( <TicketShop/> , document.getElementById('root'))
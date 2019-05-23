// const PositiveMessage = () => <p>You can watch the movie!!! Welcome</p>;
// const NegativeMessage = () => <p>You cant watch the movie !!! Sorry</p>;

const displayMessage = (isConfirmed,ifFormSubmitted) => {
  if (ifFormSubmitted) {
    if (isConfirmed) {
      return <ValidationMessage txt = "You can watch the movie!!! Welcome" / >
    } else {
      return <ValidationMessage txt = "You cant watch the movie !!! Sorry" / >
    }
  } else {
    return null
  }
}

const ValidationMessage = (props) => <p>{props.txt}</p>;

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

  // displayMessage = () => {
  //   if(this.state.ifFormSubmitted){
  //   if(this.state.isConfirmed){
  //     return <ValidationMessage txt = "You can watch the movie!!! Welcome"/>
  //   } else {
  //     return <ValidationMessage txt = "You cant watch the movie !!! Sorry"/>
  //   }
  // } else {return null}
  // }

  render() {
    
    const {isConfirmed,ifFormSubmitted} = this.state

    return(
    <>
      <h1> Buy a ticket for the horror of the year </h1>
      <form onSubmit={this.handleFormSubmit}>
      <input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={isConfirmed}/>
      <label htmlFor="age">I am at least 16 years old!!!</label>
      <br/><br/>
      <button>Buy a ticket</button>
      </form>

      {displayMessage(isConfirmed, ifFormSubmitted)}
      </>
    )
  }


}

ReactDOM.render( <TicketShop/> , document.getElementById('root'))
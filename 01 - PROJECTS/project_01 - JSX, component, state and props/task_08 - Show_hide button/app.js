class Message extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messageIsActive: false
    };
    this.handleMessageButton = this.handleMessageButton.bind(this);
  }

  handleMessageButton(){
    this.setState((prevState) => ({
      messageIsActive: !prevState.messageIsActive
    }));
  }

  render() {
    console.log(this.state.messageIsActive);
    const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, odit at? Itaque doloribus minima ipsam obcaecati nam, atque expedita beatae voluptatibus possimus ducimus. Adipisci nemo corporis optio aspernatur. Ut, dolores.";

    return (
      <>
      <button onClick = {this.handleMessageButton}>{this.state.messageIsActive ? "Hide" :  "Show"}
      </button>

      {/* <p>{this.state.messageIsActive && text}</p> */}
      {/* or */}
      {/* {this.state.messageIsActive ? <p>{text}</p>:null} */}
      {/* or */}
      {this.state.messageIsActive && <p>{text}</p>}
      
      </>
    )
  }
}

ReactDOM.render(<Message /> , document.getElementById('root'));
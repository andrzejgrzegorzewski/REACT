//Funkcja strzałkowa a deklarowanie metody. Bind
//setState - przekazanie do metody obiektu i funkcji
//Definiowanie state w konstruktorze

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     text: ""
  //   }
  //   this.handleClick = this.handleClick.bind(this)
  // }

  state = {
    text: ""
  };

  handleClick = () => {
    // this.state.text += "a";
    // console.log(this.state.text);
    // console.log(this);
    // const letter = "A"
    const number = Math.floor(Math.random() * 10);

    // this.setState({
    //   text: this.state.text + letter
    // })

    this.setState(() => ({
      text: this.state.text + number
    }));
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>{this.props.btnTitle}</button>
        <PanelResult text={this.state.text} />
      </React.Fragment>
    );
  }
}

const PanelResult = props => {
  return <h1>{props.text}</h1>;
};

ReactDOM.render(<App btnTitle="Add NUMBER" />, document.getElementById("root"));

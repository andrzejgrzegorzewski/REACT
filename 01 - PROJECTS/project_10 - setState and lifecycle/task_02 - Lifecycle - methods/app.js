class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
    console.log("Method constructor");
  }

  componentWillMount() {
    console.log('Method componentWillMount');
  }

  componentDidMount() {
    console.log('Method componentDidMount');
    this.setState({
      number: 1
    })
  }

  componentDidUpdate() {
    console.log('Method componentDidUpdate');
  }

  render() {
    console.log("Method render");

    return (
      <div>
        <p>
          lifecycle - component
      </p>
        <Child />
      </div>
    )
  }
}

class Child extends React.Component {
  componentDidMount() {
    console.log('Method componentDidMount in Child component');
  }

  render() {
    console.log(`
    ------------------------------------------
    Render method in Child component
    ------------------------------------------
    `);
    return (
      <h1>Child</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

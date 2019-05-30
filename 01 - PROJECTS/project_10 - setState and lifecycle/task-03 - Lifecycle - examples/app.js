class App extends React.Component {

  state={
    status: true,
  }

  // handleClick = () => {
  //   this.setState({
  //     status: !this.state.status
  //   })
  // }
  // or
  
  handleClick = () => {
    this.setState(prevState => ({
      status: !prevState.status
    }))
  }

  componentDidMount(){
    console.log("App mounted")
  }

  componentDidUpdate(){
    console.log('App update')
  }
  
  render() {
    console.log('App render')
    return (
      <div>
        <button onClick={this.handleClick}>Switch</button>
        <br/><br/>
        <Child1 status={this.state.status}/>
        <br/>

        {/* {this.state.status ? <Child2/> : null }
        or */}
        {this.state.status && <Child2/>}

      </div>
    )
  }
}

class Child1 extends React.Component {
  
  componentDidMount(){
    console.log("Child1 mounted")
  }
  
  componentDidUpdate(){
    console.log('Child1 update')
  }
  
  render() {
    console.log('Child1 render')
    return (
      <div>
        {String(this.props.status)}
      </div>
    )
  }
}

class Child2 extends React.Component {
  
  componentDidMount(){
    console.log("Child2 mounted")
  }
  
  componentDidUpdate(){
    console.log('Child2 update')
  }
  
  componentWillUnmount(){
    console.log('Child2 unmounted')
   
  }

  render() {
    return (
    <div>Component Child2 is mounted</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

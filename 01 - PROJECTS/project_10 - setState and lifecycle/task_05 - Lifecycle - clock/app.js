class App extends React.Component {

  state = {
    active: true
  }

  handleClick = () =>{
    this.setState({
      active: !this.state.active
    })
  }
  render() {
    return (
      <div>
        <SwitchButton active={this.state.active} click={this.handleClick}/>
        <br/><br/>
        {this.state.active && <Clock/>}
      </div>
    )
  }
}

const SwitchButton = props => (
  <button onClick={props.click}>{props.active ? "Turn off" : "Turn on"} </button>
)

class Clock extends React.Component {

  interval = ""

  state={
    time: this.getTime()
  }
  
  getTime(){
    const currentTime = new Date();
    // console.log(currentTime);

    return({
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
    })
  }
  
  setTime(){
    const time = this.getTime()
    this.setState({
      time
    })
  }

  componentDidMount(){
    this.interval = setInterval(this.setTime.bind(this),1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }
  
  render() {
    const {hours, minutes, seconds} = this.state.time
    return (
      <div>
       {hours > 9 ? hours : `0${hours}`} : {minutes > 9 ? minutes : `0${minutes}`} : {seconds > 9 ? seconds : `0${seconds}`}
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))

class Counter extends React.Component {

  state={
    count: 0,
    result: this.props.result,
  }

handleMathClick(type, number = 1){
  // debugger 
  if(type === "subtraction"){
    this.setState(prevState => ({
      count: prevState.count + 1,
      result: prevState.result - number
    }))
  } else if(type === "reset"){
    this.setState(prevState => ({
      count: prevState.count + 1,
      result: this.props.result
    }))
  }
  else if (type === "addition") {
    this.setState(prevState => ({
      count: prevState.count + 1,
      result: prevState.result + number
    }))
  }
}

render() {
  return (
    <>
     <button onClick = {this.handleMathClick.bind(this,"subtraction", 10)}>-10</button>
     <button onClick = {() => this.handleMathClick("subtraction", 1)}>-1</button>
     <button onClick = {this.handleMathClick.bind(this,"reset")}>Reset</button>
     <button onClick = {this.handleMathClick.bind(this,"addition", 1)}> 1 </button>
     <button onClick = {this.handleMathClick.bind(this,"addition", 10)}> 10 </button>
     <h1>Clicks number: {this.state.count}</h1>
     <h1>Result: {this.state.result}</h1>
     </>

  )
}

}

const startValue = 20;
ReactDOM.render(<Counter result = {startValue}/>, document.getElementById("root"));
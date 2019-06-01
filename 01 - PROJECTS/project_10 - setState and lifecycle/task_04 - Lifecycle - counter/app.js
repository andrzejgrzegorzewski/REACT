class Counter extends React.Component {
  state = {
    result: 1,
    ratio: 2
  }

  handleMultiplication = () => {

    // this.setState({
    //   result: this.state.result * this.state.ratio
    // })
    // or

    this.setState(prevState => ({
      result: prevState.result *prevState.ratio
    }))
  }

  componentDidUpdate(){
    console.log(this.state);
    if(this.state.result > 1000 && this.state.ratio === 2)
    this.setState({
      ratio: .5
    })
    else if(this.state.result < 1 && this.state.ratio === .5)
    this.setState({
      ratio: 2
    })
  }

  render() {
    return (
      <div>
        <p>The calculator multiplies by two if the sum is less than 1000. After exceeding 1000, the numerator multiplies by 0.5 until it reaches a sum less than one. Then he starts multiplying again for two.</p>
        <button onClick={this.handleMultiplication}>{`Multiply by  ${this.state.ratio}`}</button>
        <h1>Result: {this.state.result}</h1>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'))

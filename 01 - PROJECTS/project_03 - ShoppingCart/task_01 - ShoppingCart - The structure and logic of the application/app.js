class App extends React.Component {
state = {
  availableProducts: 8,
  shoppingCart: 1, 
}

handleRemoveFromCard = () => {
this.setState({
shoppingCart: this.state.shoppingCart - 1,
availableProducts: this.state.availableProducts + 1,
})
}

handleAddToCard = () => {
this.setState({
  shoppingCart: this.state.shoppingCart + 1, 
  availableProducts: this.state.availableProducts - 1,
})
}

  render() {
    return (
      <div>
      <button disabled={this.state.shoppingCart === 1 ? true: false} onClick={this.handleRemoveFromCard}>-</button>
      <span> {this.state.shoppingCart} </span>
      <button
      disabled = {this.state.availableProducts === 1  ? true:false} 
      onClick = {this.handleAddToCard}> + </button>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
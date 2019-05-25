const Cash = props => {
  const value = (props.cash /props.ratio * props.price).toFixed(2)
  
  return (
    <div>{props.title}{props.cash <= 0 ? "0" : value }</div>  
    )
}

class ExchangeCounter extends React.Component {

  state = {
    amount:"",
    product: "electricity",
  }

  static defaultProps = {
    
    currencies: [
      {
        id: 0,
        name: "zloty",
        ratio: 1,
        title: "Value in zloty: ",
      },
      {
        id: 1,
        name: "yen",
        ratio: 1.6,
        title: "Value in yen: ",
      },
      {
        id: 2,
        name: "euro",
        ratio: 4.2,
        title: "Value in euro: ",
      },
      {
        id: 3,
        name: "ruble",
        ratio: 0.6,
        title: "Value in ruble: ",
      },
      {
        id: 4,
        name: "usaDollar",
        ratio: 3.6,
        title: "Value in USA dollars: ",
      },
      {
        id: 5,
        name: "auDollar",
        ratio: 2.8,
        title: "Value in AU dollars: ",
      },
      {
        id: 6,
        name: "nzDollar",
        ratio: 2.6,
        title: "Value in NZ dollars: ",
      },
    ],
    prices: {
      electricity: .65,
      gas: 4.8,
      oranges: 3.45,
    },
  }

  handleChange = (e) => {
    this.setState({
      amount: e.target.value
    })
  }

  handleSelect = e => {
    this.setState({
      product: e.target.value,
      amount: "",
    })
  }
  
  insertSuffix(select){
    if (select === "electricity") return <em> kWh</em>
    else if (select === "gas") return <em> liters</em>
    else if (select === "oranges") return <em> kg</em>
    else return null
  }

  selectPrice = select => this.props.prices[select]

  render() {

    const {amount, product} = this.state
    const price = this.selectPrice(product)

    const calculators = this.props.currencies.map(currency => (
      <Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={this.state.amount} price={price}/>
    ))

    return (
      <div className="app">
      <label>Select a product: </label>
      <select value={product} onChange={this.handleSelect}>
        <option value="electricity">Electricity</option>
        <option value="gas">Gas</option>
        <option value="oranges">Oranges</option>
      </select>
      <br/>
      <br/>
      <label>
      <input type="number" value={amount} onChange={this.handleChange}/>

      {this.insertSuffix(this.state.product)}
      </label>

      {calculators}
      </div>
    )
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))

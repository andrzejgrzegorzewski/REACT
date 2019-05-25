// const Dollars = (props) => (
//   <div>Value in dollars: {props.cash <= 0 ? "0" : (props.cash / props.ratio).toFixed(2)}</div>
// )

// const Euros = (props) => (
//   <div>Value in euros: {props.cash <= 0 ? "0" : (props.cash / props.ratio).toFixed(2)}</div>
// )


// --------------------------------------------------------------------------------------------
const Cash = props => {
  const value = (props.cash /props.ratio).toFixed(2)
  
  return (
    <div>{props.title}{props.cash <= 0 ? "0" : value }</div>  
    )
}
// --------------------------------------------------------------------------------------------


class ExchangeCounter extends React.Component {

  state = {
    amount:"",
    // ratioDollar: 3.6,
    // ratioEuro: 4.2,
  }

  currencies = [
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
  ]

  handleChange = (e) => {
    this.setState({
      amount: e.target.value
    })
  }
  
  render() {

    const {amount, ratioDollar, ratioEuro} = this.state;

    const calculators = this.currencies.map(currency => (
      <Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={amount}/>
    ))

    return (
      <div className="app">
      <label>
      <input type="number" value={amount} onChange={this.handleChange}/>
      </label>

      {/* <Dollars cash={amount} ratio={ratioDollar}/>
      <Euros cash={amount} ratio={ratioEuro}/>    
      or only one Component */}
      
      {/* <Cash cash={amount} ratio={ratioDollar} title="Value in dollars: "/>
      <Cash cash={amount} ratio={ratioEuro} title="Value in euros: "/>
      or with a lot currency */}

      {calculators}
      </div>
    )
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))

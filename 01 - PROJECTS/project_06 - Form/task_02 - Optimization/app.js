class Form extends React.Component {

  state={
    city: "London", 
    text: "",
    isLoved: true,
    number: ""
  }

  // handleCityChange = (event) => {
  //   this.setState({
  //       city: event.target.value
  //   })
  // }
  
  // handleTextChange = (e) => {
  //   this.setState({
  //       text: e.target.value
  //   })
  // }

  // handleIsLoveChange = (e) => {
  //   this.setState({
  //     isLoved: e.target.checked
  //   })
  // }

  // handleVisitsNumberChange(e){
  //   this.setState({
  //     number: e.target.value
  //   })

  // }

  handleChange = (e) => {
    this.setState({

    })
  }

  render() {
    return (
      <div>
      <label>
        Add City 
        <br/>
        <input value={this.state.city} onChange={this.handleChange} type="text"/>
      </label>
      <br/>
      <br/>
      <label>
      Write something about this city
      <br/>
      < textarea value = {
        this.state.text
      }
      onChange = {
        this.handleChange
      } > < /textarea>  
      </label>
      <br/>
      <br/>
      <label>
      Do you love this city
      <br/>
      <input type="checkbox" checked={this.state.isLoved} onChange={this.handleIsLoveChange} />    
      </label>
      <br/>
      <br/>
      <label>
      How many times have you been in this city
      <br/>
        <select value={this.state.number} onChange={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="more">more</option>
        </select>
      </label>


      </div>
    )
  }
}

ReactDOM.render(<Form />, document.getElementById('root'))

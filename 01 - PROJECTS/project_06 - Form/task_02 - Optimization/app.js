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
    console.log(e.target.type);
    if(e.target.type === "checkbox"){
      this.setState({
        [e.target.name]: e.target.checked
        })
    } 
    else{
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  render() {
    return (
      <div>
      <label>
        Add City 
        <br/>
        <input name="city" value={this.state.city} onChange={this.handleChange} type="text"/>
      </label>
      <br/>
      <br/>
      <label>
      Write something about this city
      <br/>
      <textarea name = "text"
      value = {this.state.text}
      onChange = {this.handleChange} > </textarea>  
      </label>
      <br/>
      <br/>
      <label>
      Do you love this city
      <br/>
      <input name = "isLoved"
      type = "checkbox"
      checked = {
        this.state.isLoved
      }
      onChange = {
        this.handleChange
      }
      />    
      </label>
      <br/>
      <br/>
      <label>
      How many times have you been in this city
      <br/>
        <select name = "number"
        value = {
          this.state.number
        }
        onChange = {this.handleChange}>
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

const Item = (props) => <li>{`fruit: ${props.content}`}</li>



class ListItems extends React.Component {
  state={
    items: ["apple", "orange","peach"]
  }

  render() {
    return (
      <ul>
        {this.state.items.map(item => < Item key = {item} content = {item}/>)}
      </ul>
       
    )
  }

}

ReactDOM. render(<ListItems/>,document.getElementById('root'))
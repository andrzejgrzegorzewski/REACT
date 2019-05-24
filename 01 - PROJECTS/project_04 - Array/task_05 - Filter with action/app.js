
const data = {
  users: [
    {
      id: 1,
      age: 12,
      name: "Hans",
      sex: "male",
    },
    {
      id: 2,
      age: 23,
      name: "Marry",
      sex: "female",
    },
    {
      id: 3,
      age: 59,
      name: "Adam",
      sex: "male",
    },
    {
      id: 4,
      age: 93,
      name: "Barb",
      sex: "female",
    }, 
    {
      id: 5,
      age: 69,
      name: "Jon",
      sex: "male",
    },
  ],
}

const Item = ({user}) => (
  <div className="userInfo">
    <h1> {user.name}</h1>
    <p>Info about user:</p>
    <p>Age: <strong> {user.age} </strong></p>
    <p>Sex: {user.sex}</p>

  </div>
)

class ListItems extends React.Component {

  state={
    select: "all",
  }

  userList = () => {
    let users = this.props.data.users;

    switch (this.state.select) {
      case "all":
        return users.map(user => <Item user={user} key={user.id}/>)
        
        case "female":
          users = users.filter(user => user.sex === "female")
          return users.map(user => <Item user={user} key={user.id}/>)
          
          
        case "male":
          users = users.filter(user => user.sex === "male")
          return users.map(user => <Item user={user} key={user.id}/>)
      
      default:
        return "choose something from the list"
    }
  }

  handleUserFilter = (option) => {
    this.setState({
      select: option,
    })
  }

  render() {

    let users = this.props.data.users
    
    return (
      <div>
        <button onClick={this.handleUserFilter.bind(this, "all")}>Everyone</button>
        <button onClick={this.handleUserFilter.bind(this, "female")}>Female</button>
        <button onClick={this.handleUserFilter.bind(this, "male")}>Male</button>
        {this.userList()}
      </div>
       
    )
  }
}

ReactDOM. render(<ListItems data={data}/>,document.getElementById('root'))
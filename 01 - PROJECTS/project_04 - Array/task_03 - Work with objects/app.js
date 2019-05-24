
const data = {
  users: [
    {
      id: 1,
      age: 12,
      name: "Hans",
    },
    {
      id: 2,
      age: 23,
      name: "Mary",
    },
    {
      id: 3,
      age: 89,
      name: "Adam",
    }
  ],
}

const Item = (props) => (
  <div>
    <h1>User {props.user.name}</h1>
    <h2>Have {props.user.age}</h2>
  </div>
)

class ListItems extends React.Component {
  render() {

    const users = this.props.data.users
    const Items = users.map(user => < Item key = {user.id} user = {user}/>)

    return (
      <ul>
        {Items}
      </ul>
       
    )
  }

}

ReactDOM. render(<ListItems data={data}/>,document.getElementById('root'))
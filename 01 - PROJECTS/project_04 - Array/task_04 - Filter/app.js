
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
    < p > Age: <strong> {user.age} </strong></p >
    <p>Sex: {user.sex}</p>

  </div>
)

class ListItems extends React.Component {
  render() {

    let users = this.props.data.users
    users = users.filter((user) =>  user.sex ==="female")


    const Items = users.map(user => < Item key = {user.id} user = {user}/>)

    return (
      <ul>
        {Items}
      </ul>
       
    )
  }

}

ReactDOM. render(<ListItems data={data}/>,document.getElementById('root'))
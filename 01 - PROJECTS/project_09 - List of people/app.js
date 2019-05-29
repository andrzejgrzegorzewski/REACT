
const Person = (props) => {
    return(
        <li>
        <button onClick={props.delete}>Delete</button>
        <span> {props.name}</span>
        </li>
    )
}

class App extends React.Component {

    state={
        people: [
            {id: 1, name: "koo kkk"},
            {id: 2, name: "pole dwe"},
            {id: 3, name: "fgtrr jy"},
            {id: 4, name: "xzv dsag"},
        ],
    }

// handleDelete(id){
    
//     const people = [...this.state.people]

//     const index = people.findIndex(person => person.id === id)
// console.log(index);
//     people.splice(index,1)

//     this.setState({
//         people
//     })
// }

handleDelete(name){
    
    let people = Array.from(this.state.people)

    const index = people.findIndex(person => person.id === id)
console.log(index);
    people.splice(index,1)

    this.setState({
        people
    })
}

render() {
    
        // const people = this.state.people.map(person => <Person key={person.id} name={person.name} delete={this.handleDelete.bind(this,person.id)}/>)
        // or

        const people = this.state.people.map(person => <Person key={person.id} name={person.name} delete={this.handleDelete.bind(this,person.name)}/>)

        return (
            <ul>
                {/* {this.state.people.map(person => <li key={person.id}>{person.name}</li>)} */}
                {/* or */}

                {people}
            </ul>
        )
    }

}

ReactDOM.render(<App/>, document.getElementById('root'))
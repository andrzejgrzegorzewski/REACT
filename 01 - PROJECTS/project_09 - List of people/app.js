// 02----------------------------------------------------------------------------------
// const Person = (props) => {
//     return(
//         <li>
//         <button onClick={props.delete}>Delete</button>
//         <span> {props.name}</span>
//         </li>
//     )
// }

// 03----------------------------------------------------------------------------
const Person = (props) => {
    return(
        <li>
        <button onClick={() => props.delete(props.name)}>Delete</button>
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

// 01------------------------------------------------------------------------------
// handleDelete(id){
    
//     const people = [...this.state.people]
//     const index = people.findIndex(person => person.id === id)

//     people.splice(index,1)

//     this.setState({
//         people
//     })
// }

// 02-----------------------------------------------------------------------------------
// handleDelete(name){
    
//     // const people = [...this.state.people]
//     // or
//     // let people = Array.from(this.state.people)
//     // or
//     let people = this.state.people.slice()

//     people = people.filter(person => name !== person.name)

//     this.setState({
//         people
//     })
// }

// 03-----------------------------------------------------------------------------------
handleDelete = name => {
    
    // const people = [...this.state.people]
    // or
    // let people = Array.from(this.state.people)
    // or
    let people = this.state.people.slice()

    people = people.filter(person => name !== person.name)

    this.setState({
        people
    })
}

render() {
    
        // 01-------------------------------------------------------------------------------
        // const people = this.state.people.map(person => <Person key={person.id} name={person.name} delete={this.handleDelete.bind(this,person.id)}/>)
        // or

        // 02-------------------------------------------------------------------------------
        // const people = this.state.people.map(person => <Person key={person.id} name={person.name} delete={this.handleDelete.bind(this,person.name)}/>)
        // or with furnction handleDelete without arguments
        
        // 03-------------------------------------------------------------------------------
        const people = this.state.people.map(person => <Person key={person.id} name={person.name} delete={this.handleDelete}/>)

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
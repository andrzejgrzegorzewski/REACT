import React, { Component } from 'react';
import './App.scss';
import Text from './Text'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

class App extends Component {

  state = {
    active: false,
    underline: false,
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active,
    })
  }
  render() {

    // const btn_off = {
    //   border: '2px solid black',
    //   padding: '10px 20px',
    //   fontFamily: 'arial',
    //   fontSize: 30,
    //   display: 'block',
    //   margin: '20px auto',
    //   backgroundColor: 'white',
    // }

    // const btn_on = {
    //   border: '2px solid black',
    //   padding: '10px 20px',
    //   fontFamily: 'arial',
    //   fontSize: 30,
    //   display: 'block',
    //   margin: '20px auto',
    //   backgroundColor: 'cadetblue',
    //   color: 'white',
    // }
    // with condition - style={this.state.active ? btn_on : btn_off}
    // or

    // const styles = {
    //   btn_off : {
    //     border: '2px solid black',
    //     padding: '10px 20px',
    //     fontFamily: 'arial',
    //     fontSize: 30,
    //     display: 'block',
    //     margin: '20px auto',
    //     backgroundColor: 'white',
    //   }, 
    //   btn_on : {
    //     border: '2px solid black',
    //     padding: '10px 20px',
    //     fontFamily: 'arial',
    //     fontSize: 30,
    //     display: 'block',
    //     margin: '20px auto',
    //     backgroundColor: 'cadetblue',
    //     color: 'white',
    //   }, 
    // }
    // with condition - style={this.state.active ? styles.btn_on : styles.btn_off}
    // or

    let btn = {
        border: '2px solid black',
        padding: '10px 20px',
        fontFamily: 'arial',
        fontSize: 30,
        display: 'block',
        margin: '20px auto',
        backgroundColor: 'white',
    }

    if(this.state.active){
      btn.backgroundColor = 'cadetblue';
      btn.color = 'white';
    }


    // let classes = "";
    // if(this.state.underline)
    // classes+=" line";

    const text = "apple apple big big";
    // if(text.length > 10 )
    // classes+= " big";
    // z wykorzystanie nastepujacego wywolania<h1 className={classes}>{text}</h1>
    // or

    const classes = ['one'];
    if(this.state.underline) classes.push('line');
    if(text.length > 10) classes.push('big');

    return (
      <>
      <div>
        <button style={btn} onClick={this.handleClick}>{this.state.active ? "Turn off ": "Turn on"}</button>
      </div>
      <div className="app" onClick={()=>this.setState({underline:!this.state.underline})}>
        <h1 className={classes.join(" ")}>{text}</h1>
        <Text />
      </div>
      <button className="btn btn-primary">Button</button>
      <Footer />
      </>
    );
  }
}

export default App;

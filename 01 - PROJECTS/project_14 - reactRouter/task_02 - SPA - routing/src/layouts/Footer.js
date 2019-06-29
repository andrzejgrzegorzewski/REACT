import React from 'react';
import {Route} from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {

    return ( 
        <div>
            <h2>Footer</h2>
            <Route path="/" exact render={(props) => {
                return(
                    <p>You are on <span>the main page!</span></p>
                )
            }}/>

            <Route path="/:page"  render={(props) => {
                return(
                    <>
                    {/* <p>You are on <span>the {props.match.params.page} page!</span></p> */}
                    <span>You are on <span>the {props.match.url} page!</span></span>
                    {/* <p>You are on <span>the {props.match.path} page!</span></p> */}
                    </>
                )
            }}/>
           
        </div>
     );
}
 
export default Footer;
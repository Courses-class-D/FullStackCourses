import React, { Component } from 'react';


import Cards from './cards';
import PropTypes from 'prop-types'

 class Home extends Component {
   

    render() {
        return (
            <div className="container">
                {/* <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">Welcom</div>
                </div> */}
                <Cards/>
                {/* <Add/>
                <Show/> */}
               
            </div>
        )
    }
}
export default Home




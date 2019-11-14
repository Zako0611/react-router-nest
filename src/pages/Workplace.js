import React, { Component } from 'react';
import {Route, Link } from 'react-router-dom'

import Money from './workplace/Money'
import Getup from './workplace/Getup'


class Workplace extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <div className="topNav" >
                <ul>
                    <li><Link to="/workplace/Money">Money</Link></li>
                    <li><Link to="/workplace/Getup">Getup</Link></li>
                </ul>
            </div>
            <div className="workplaceContent">
                <div><h3>职场技能</h3></div>
                <Route path="/workplace/Money" component={Money}></Route>
                <Route path="/workplace/Getup" component={Getup}></Route>
                
            </div>
        </div> );
    }
}

export default Workplace 
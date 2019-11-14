import React, { Component } from 'react';
import {Route, Link } from 'react-router-dom'

import ReactPage from './video/ReactPage'
import Vue from './video/Vue'
import Flutter from './video/Flutter'

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <div className="topNav" >
                <ul>
                    <li><Link to="/video/reactpage">ReactPage</Link></li>
                    <li><Link to="/video/vue">Vue</Link></li>
                    <li><Link to="/video/flutter">Flutter</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>视频教程</h3></div>
                <Route path="/video/reactpage" component={ReactPage}></Route>
                <Route path="/video/vue" component={Vue}></Route>
                <Route path="/video/flutter" component={Flutter}></Route>
            </div>
        </div> );
    }
}

export default Video;
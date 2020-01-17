import React, { Component } from 'react'
import HomePage from '../../Pages/HomePage/HomePage.js';
import Projects from '../../Pages/Projects/Projects.js';
import Skills from '../../Pages/Skills/Skills.js';
import { Route } from 'react-router-dom';
import './Body.css'

export default class Body extends Component {
    render() {
        return (
            <div className="BodyMainStyle">
                <Route path="/homePage" exact component={HomePage} />
                <Route path="/projects" component={Projects} />
                <Route path="/workexperience" component={HomePage}/>
                <Route path="/education" component={HomePage}/>
                <Route path="/skills" component={Skills}/>       
            </div>
    
        )
    }
}

// // import React from 'react'

// function Body() {
//     return (
//                 <Route path="/homePage" component={HomePage} />
//         <div>
//                 <div style={{width: '-webkit-fill-available', margin: '0 15% 0 15%', height: '100px', border: 'solid 1px black'}}>
//                 </div>

//         </div>
//     )
// }

// export default Body

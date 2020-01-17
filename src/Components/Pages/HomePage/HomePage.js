import React, { Component } from 'react'
import Projects from '../Projects/Projects.js';
import Skills from '../Skills/Skills.js';
export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Projects></Projects>
                <Skills></Skills>
               <br/>
            </div>
        )
    }
}

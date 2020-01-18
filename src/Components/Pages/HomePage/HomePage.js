import React, { Component } from 'react'
import Projects from '../Projects/Projects.js';
import Skills from '../Skills/Skills.js';
import Education from '../Education/Education.js'
import WorkExperience from '../WorkExperience/WorkExperience.js';
export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Projects></Projects>
                <Skills></Skills>
                <Education></Education>
                <WorkExperience></WorkExperience>
               <br/>
            </div>
        )
    }
}

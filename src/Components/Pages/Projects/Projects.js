import React, { Component } from 'react'
import ImmersiveSoundFX from './Components/ProjectData/ImmersiveSoundFX.js';
import './Projects.css'

export default class Projects extends Component {
    render() {
        return (
            <section>
                <h1 className="sectionHeadingOne" > Projects</h1>
                <ImmersiveSoundFX/>
            </section>
        )
    }
}

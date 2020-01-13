import React, { Component } from 'react'
import ProjectTable from './Components/ProjectTable.js';
import './Projects.css'

let githubLogo= <img className="linkLogoGitHub" src="./ProjectGraphics/icon_github.png" alt="gitHub"/>;
let playStoreLogo= <img className="linkLogoPlaystore" src="./ProjectGraphics/icon_playstore.png" alt="PlayStore"/>;
let ImmersiveSoundFXProjectPreview = <img className="imagePreview" src="./ProjectGraphics/ImmersiveSoundFXPreview.webp"/>
export default class Projects extends Component {
    render() {
        return (
            <section>
                <h1 className="sectionHeadingOne" > Projects</h1>
                <ProjectTable 
                    tableClassName=""

                    name="Immersive Sound FX"

                    hrefSourceCode="https://github.com/"
                    sourceCodeLogo= {githubLogo}

                    hrefBuild="https://play.google.com/store/apps/details?id=com.immersipi.ImmersiveSoundFX&hl=en"
                    buildLogo={playStoreLogo}

                    timeLine="September 2019"

                    fullDescription={
                        "This application was created using the Flutter framework." +
                        "It's the first project I created with flutter or dart"
                    }
                    preview={ImmersiveSoundFXProjectPreview}
                    border="border"
                    />

            </section>
        )
    }
}

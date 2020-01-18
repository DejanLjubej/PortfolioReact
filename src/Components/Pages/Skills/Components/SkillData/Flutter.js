import ItemDisplayTemplate from '../../../Templates/ItemDisplayTemplate/ItemDisplayTemplate.js';
import React, { Component } from 'react'

let githubLogo= <img className="linkLogoGitHub" src="./ProjectGraphics/icon_github.png" alt="gitHub"/>;
let playStoreLogo= <img className="linkLogoPlaystore" src="./ProjectGraphics/icon_playstore.png" alt="PlayStore"/>;


export default function Flutter(props) {
        return (
            <ItemDisplayTemplate
            site="/skills"
            tableClassName=""
                
            name="Flutter (Dart)"
            
            hrefSourceCode="https://github.com/"
            sourceCodeLogo= {githubLogo}
            
            hrefBuild="https://play.google.com/store/apps/details?id=com.immersipi.ImmersiveSoundFX&hl=en"
            buildLogo={playStoreLogo}
            
            timeLine="September 2019"
            
            description={
                "I started using this framework by creating a couple of tutorials. " +
                "After that I decided to create a simple project, now available on " +
                "Google PlayStore. " + "The project is made with sounds that sre so far " +
                "downloaded with the app, and by clicking the buttons in the app, you can "+
                "play the desired sound. " + "It's still however a work in progress and " + 
                "can be developed further."
            }
            technologiesUsed={"Dart, Flutter, VS Code"}
            border="border"
        />
       )
}

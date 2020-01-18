import React from 'react'
import ItemDisplayTemplate from '../../../Templates/ItemDisplayTemplate/ItemDisplayTemplate.js';

let githubLogo= <img className="linkLogoGitHub" src="./ProjectGraphics/icon_github.png" alt="gitHub"/>;
let playStoreLogo= <img className="linkLogoPlaystore" src="./ProjectGraphics/icon_playstore.png" alt="PlayStore"/>;

export default function ImmersiveSoundFX() {
    
    return (
        <ItemDisplayTemplate
            site="/projects" 
            tableClassName=""
            
            name="Immersive Sound FX"
            
            hrefSourceCode="https://github.com/"
            sourceCodeLogo= {githubLogo}
            
            hrefBuild="https://play.google.com/store/apps/details?id=com.immersipi.ImmersiveSoundFX&hl=en"
            buildLogo={playStoreLogo}
            
            timeLine="September 2019"
            
            description={
                "This application was created using the Flutter framework." +
                " It's the first project I created with flutter or dart"
            }
            technologiesUsed={"Dart, Flutter, VS Code"}
            border="border"
        />
    )
}

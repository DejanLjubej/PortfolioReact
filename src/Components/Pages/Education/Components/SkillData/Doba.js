import ItemDisplayTemplate from '../../../Templates/ItemDisplayTemplate/ItemDisplayTemplate.js';
import React, { Component } from 'react'

let githubLogo= <img className="linkLogoGitHub" src="./ProjectGraphics/icon_github.png" alt="gitHub"/>;
let playStoreLogo= <img className="linkLogoPlaystore" src="./ProjectGraphics/icon_playstore.png" alt="PlayStore"/>;


export default function Doba(props) {
    return (
        <ItemDisplayTemplate
            site="/education"
            tableClassName=""
                
            name="Višja Šola Doba"
            
            timeLine="Oktober 2016 - Oktober 2019"
            
            description={
            "IT engineer"
            }
            technologiesUsed={""}
            border="border"
        />
    )
}

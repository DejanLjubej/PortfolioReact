import React from 'react'
import propTypes from 'prop-types';
import TemplateContainer from './Conponents/TemplateContainer';
import PrimaryDescription from './Conponents/PrimaryDescription.js';
import SecondaryDescrition from './Conponents/SecondaryDescription.js';

let domain=window.location.origin;

export default function ItemDisplayTemplate(props) {
    let urlProjects=domain+props.site;
    let urlHome=domain+'/homePage';

    let primaryDescription=<PrimaryDescription 
        border={props.border}
        hrefSourceCode={props.hrefSourceCode}
        name={props.name}
        sourceCodeLogo={props.sourceCodeLogo}
        hrefBuild={props.hrefBuild}
        buildLogo={props.buildLogo}
        timeLine={props.timeLine}
        children={props.children}                
    />;

    let secondaryDescrition= <SecondaryDescrition
        descriptionBoxStyle={props.descriptionBoxStyle}
        description={props.description}
        technologiesUsed={props.technologiesUsed}
    />
 
    if(window.location.href === urlProjects){
        return (
            <TemplateContainer>
                {primaryDescription}
                {secondaryDescrition}
            </TemplateContainer>
        )
    }else if(window.location.href === urlHome){
        return(
            <TemplateContainer>
                {primaryDescription}
            </TemplateContainer>
        )
    }else{
        return null;
    }
}


import React from 'react'
import propTypes from 'prop-types'

let domain=window.location.origin;

export default function ProjectTable(props) {
    let urlProjects=domain+"/projects";
    let urlHome=domain+'/homePage';

    let  projectContainer = (
        <table className={props.tableClassName}>
            <tbody className={props.border}>
                <tr className={props.border}>

                </tr>
            </tbody>
        </table>
    );
    
    let leftDescrition = (
        <th className={props.border}>
            <h2>{props.name}</h2>
            <div className={props.border}>
                <a href={props.hrefSourceCode} 
                target="_blank" rel="noopener noreferrer">
                    {props.sourceCodeLogo}
                </a>
                <a href={props.hrefBuild}
                target="_blank" rel="noopener noreferrer">
                    {props.buildLogo}
                </a>
                <p>{props.children}</p>
            </div>
            <div className={props.border}>
                <p>{props.timeLine}</p>
            </div>
        </th>
    );

    let rightDescription= (
        <td className={props.descriptionBoxStyle}>
            <div>
                <h3>Description</h3>
                {props.description}
            </div>
            <div>
                <h4>Technologies used:</h4>
                {props.technologiesUsed}
            </div>
        </td>
    );

    if(window.location.href === urlProjects){
        return (
            <table className={props.tableClassName}>
                <tbody className={props.border}>
                    <tr className={props.border}>
                        {leftDescrition}
                        {rightDescription}
                    </tr>
                </tbody>
            </table>
        )
    }else if(window.location.href === urlHome){
        return(
            <table className={props.tableClassName}>
                <tbody className={props.border}>
                    <tr className={props.border}>
                        {leftDescrition}    
                    </tr>
                </tbody>
                <p>{props.children}</p>
        </table>
        )
    }else{
        return null;
    }
}

ProjectTable.propTypes ={
    name: propTypes.string,
    tableClassName: propTypes.string,
    href: propTypes.string,
    src: propTypes.string,
    alt: propTypes.string,

}

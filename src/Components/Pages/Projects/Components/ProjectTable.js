import React from 'react'
import propTypes from 'prop-types'


export default function ProjectTable(props) {
    return (
        <table className={props.tableClassName}>
            <thead className={props.border}>
                <tr className={props.border}>
                   
                    {/* <td className={props.border}>
                        <a href={props.hrefSourceCode} 
                        target="_blank" rel="noopener noreferrer">
                            {props.sourceCodeLogo}
                        </a>
                        <a href={props.hrefBuild}
                        target="_blank" rel="noopener noreferrer">
                            {props.buildLogo}
                        </a>
                    </td>
                    <td className={props.border}>
                        <p>{props.timeLine}</p>
                    </td> */}
                </tr>
            </thead>
            <tbody className={props.border}>
                <tr className={props.border}>
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
                    </div>
                    <div className={props.border}>
                    <p>{props.timeLine}</p>
                    </div>
                    </th>
                    <td className={props.descriptionBoxStyle}>
                        <div>
                            <h3>Description</h3>
                            {props.fullDescription}
                        </div>
                        <div>
                            <h4>Technologies used:</h4>
                            {props.technologies}
                        </div>
                    </td>
                    {/* <td className={props.border}>
                        {props.preview}
                    </td> */}
                </tr>
            </tbody>
    </table>
    )

}
        ProjectTable.propTypes ={
            name: propTypes.string,
            tableClassName: propTypes.string,
            href: propTypes.string,
            src: propTypes.string,
            alt: propTypes.string,

        }

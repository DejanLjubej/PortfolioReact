import React from 'react'
import propTypes from 'prop-types';

export default function TemplateContainer(props) {
    return (
        <table className={props.tableClassName}>
            <tbody className={props.border}>
                <tr className={props.border}>
                    {props.children}
                    {/* {props.largeDescription} */}
                </tr>
            </tbody>
        </table>
    )
}

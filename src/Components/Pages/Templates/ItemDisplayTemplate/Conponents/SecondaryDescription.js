import React, { Component } from 'react'

export default class SecondaryDescription extends Component {
    render() {
        return (
            <td className={this.props.descriptionBoxStyle}>
            <div>
                <h3>Description</h3>
                {this.props.description}
            </div>
            <div>
                <h4>Technologies used:</h4>
                {this.props.technologiesUsed}
            </div>
        </td>
        )
    }
}

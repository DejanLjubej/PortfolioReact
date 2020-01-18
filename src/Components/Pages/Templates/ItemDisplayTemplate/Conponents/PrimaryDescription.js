import React, { Component } from 'react'
import propTypes from 'prop-types';

export default class PrimaryDescription extends Component {
    render(){
        return (
            <th className={this.props.border}>
                <h2>{this.props.name}</h2>
                <div className={this.props.border}>
                    <a href={this.props.hrefSourceCode} 
                    target="_blank" rel="noopener noreferrer">
                        {this.props.sourceCodeLogo}
                    </a>
                    <a href={this.props.hrefBuild}
                    target="_blank" rel="noopener noreferrer">
                        {this.props.buildLogo}
                    </a>
                    <p>{this.props.children}</p>
                </div>
                <div className={this.props.border}>
                    <p>{this.props.timeLine}</p>
                </div>
            </th>
        );
    }
}

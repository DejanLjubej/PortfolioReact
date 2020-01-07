import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <section>
                <h1 className="sectionHeadingOne" > Projects</h1>
                <table>
                    <th>
                        <td>
                            <h2>Project I</h2>
                        </td>
                        <td>
                            <a href="https://github.com/" target="_blank">GitHub</a>
                            <a>PlayStore</a>
                        </td>
                        <td>
                            <p>September 2019</p>
                        </td>
                    </th>
                    <tr>
                        <td>This is the field for description</td>
                        <td>Here in lies the picture</td>
                    </tr>
                </table>
            </section>
        )
    }
}

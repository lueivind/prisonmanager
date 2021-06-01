import React, { Component } from 'react'

export default class Prisoner extends Component {

    constructor(props) {
        super(props);

        this.state = { rehabilitated: false };
    }

    render() {
        // desconstruct from props
        const { name, number } = this.props.prisoner

        // Render Prisoner
        return (
            <div className="prison-door">
                <div>
                    <div className="prison-grate">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    {/* Number */}
                    <h4 className="prisoner-number engraved">{number}</h4>
                    {/* Name */}
                    <h2>{name}</h2>
                    {/* Rehabilitation Status */}
                    <label>Rehabilitated:</label>
                    {this.state.rehabilitated ? (<label>True</label>) : (<label>False</label>)}
                </div>
            </div>
        )
    }
}

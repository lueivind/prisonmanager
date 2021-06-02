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
                <div className="prison-door-inner-border">
                    {/* Number */}
                    <h4 className="prisoner-number glow">{number}</h4>
                    {/* <div className="prison-grate">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div> */}
                    {/* Name */}
                    <h2>{name}</h2>
                    {/* Rehabilitation Status */}
                    {/* <label>Rehabilitated:</label>
                    {this.state.rehabilitated ? (<label>True</label>) : (<label>False</label>)} */}
                </div>
            </div>
        )
    }
}

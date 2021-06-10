import React, { Component } from 'react'

export default class PrisonerDetails extends Component {

    render() {

        const { prisoners, selectedPrisoner } = this.props
        const { name, number } = prisoners[selectedPrisoner]

        return (
            <div style={{ background: "#080808", padding: 20 }}>
                <h3>Prisoner Number:</h3>
                <h2>{number}</h2>
                <h3>Prisoner Name:</h3>
                <h2>{name}</h2>
            </div>
        )
    }
}

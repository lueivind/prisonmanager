import React, { Component } from 'react'
import silouette from "../resources/inkscape/silouette.svg"

export default class PrisonerDetails extends Component {

    render() {

        const { prisoners, selectedPrisoner } = this.props
        const { name, number, crimes } = prisoners[selectedPrisoner]

        return (
            <div className="details-container">
                <div className="prison-door-inner-border flex">
                    <div className="left-container">
                        <h3>Number:</h3>
                        <h2>{number}</h2>
                        <h3>Name:</h3>
                        <h2>{name}</h2>
                        <h3>Crimes:</h3>
                        {crimes.map((crime) => (
                            <h4>{crime}</h4>
                        ))}
                    </div>
                    <div className="right-container">
                        <div className="picture-background">
                            <img src={silouette} alt="Silouette" />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

import React, { Component } from 'react'

import Names from "../Names.json"

import Prisoners from "./Prisoners"
import PrisonerDetails from "./PrisonerDetails"

export default class Prison extends Component {
    constructor(props) {
        super(props)

        // Get list of adjectives and nouns
        const adjectives = Names.adjectives;
        const noun = Names.noun;

        // Generate dummy prisoners
        let numberOfPrisoners = 20;
        const dummyPrisoners = [];
        for (let index = 0; index < numberOfPrisoners; index++) {

            // Prisoner first name from adjective
            const first = adjectives[Math.floor(Math.random() * adjectives.length)]

            // Prisoner last name from sustantive
            const last = noun[Math.floor(Math.random() * noun.length)]

            // Randomly generated prisoner number
            const number = Math.floor(Math.random() * 100000)

            // Prisoner key
            const key = dummyPrisoners.length

            // Prisoner
            const prisoner = {
                key: key,
                name: first + " " + last,
                number: number,
            }
            dummyPrisoners.push(prisoner)
        }

        this.state = {
            prisoners: dummyPrisoners,
            selectedPrisoner: 0
        }
    }

    selectionChanged(index) {
        this.setState({ selectedPrisoner: index })
    }

    render() {
        return (
            <div>
                <h1>Prison</h1>
                <Prisoners
                    prisoners={this.state.prisoners}
                    onSelectionChanged={this.selectionChanged.bind(this)}></Prisoners>
                <h1>Prisoner Details</h1>
                <PrisonerDetails
                    prisoners={this.state.prisoners}
                    selectedPrisoner={this.state.selectedPrisoner}
                ></PrisonerDetails>
            </div>
        )
    }
}

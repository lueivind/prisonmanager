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
        const crimeNouns = Names.crimeNoun;
        const verb = Names.verb;
        const tools = Names.toolsDefinitive;

        // Generate dummy prisoners
        let numberOfPrisoners = 20;
        let maxNumberOfCrimes = 3;
        let minNumberOfCrimes = 1;
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

            const crimes = []
            let crimeIndex = Math.floor(Math.random() * (maxNumberOfCrimes + 1))
            if (crimeIndex < minNumberOfCrimes) {
                crimeIndex = minNumberOfCrimes
            }
            for (let index = 0; index < crimeIndex; index++) {
                let crimeVerb = verb[Math.floor(Math.random() * verb.length)]
                crimeVerb = crimeVerb.charAt(0).toUpperCase() + crimeVerb.slice(1)
                const crimeNoun = crimeNouns[Math.floor(Math.random() * crimeNouns.length)].toLowerCase()
                const crimeTool = tools[Math.floor(Math.random() * tools.length)]

                // a-an
                const crime = `${crimeVerb} ${crimeNoun} with ${crimeTool}`
                crimes.push(crime)

            }

            // Prisoner
            const prisoner = {
                key: key,
                name: first + " " + last,
                number: number,
                crimes: crimes
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
                <hr />
                <Prisoners
                    prisoners={this.state.prisoners}
                    onSelectionChanged={this.selectionChanged.bind(this)}></Prisoners>
                <hr />
                <h1>Prisoner Details</h1>
                <PrisonerDetails
                    prisoners={this.state.prisoners}
                    selectedPrisoner={this.state.selectedPrisoner}
                ></PrisonerDetails>
            </div>
        )
    }
}

import React, { Component } from 'react'

import Names from "../Names.json"

import Prisoners from "./Prisoners"
import PrisonerDetails from "./PrisonerDetails"

// routing
import { Link } from "react-router-dom"

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        let numberOfPrisoners = 30;
        let maxNumberOfCrimes = 5;
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
                <div className="heading glow flicker fs-xxl">PRISON.GATE</div>
                <hr className="hr-2" />
                <Prisoners
                    prisoners={this.state.prisoners}
                    onSelectionChanged={this.selectionChanged.bind(this)}></Prisoners>
                <hr className="hr-2" />
                {/* <div>
                    <hr className="marker m1 center"></hr>
                    <hr className="marker m2 center"></hr>
                    <hr className="marker m3 center"></hr>
                    <hr className="marker m4 center"></hr>
                    <hr className="marker m5 center"></hr>
                </div> */}

                <PrisonerDetails
                    prisoners={this.state.prisoners}
                    selectedPrisoner={this.state.selectedPrisoner}
                ></PrisonerDetails>

                <div className="text-center" style={{ margin: "30px 0px" }}>
                    <div className="heading glow fs-m">INTERROGATION</div>
                    <Link to="/testing">
                        <FontAwesomeIcon icon="angle-double-down" className="icon" size="2x" style={{ margin: "20px 0px" }} />
                    </Link>
                </div>






            </div >
        )
    }
}

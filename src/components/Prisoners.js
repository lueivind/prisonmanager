import React, { Component } from 'react'

import Names from "../Names.json"

import Flickity from 'react-flickity-component'
import "./flickity.css"

import Prisoner from "./Prisoner"

const flickityOptions = {
    initialIndex: 0,
    freeScroll: true,
    wrapAround: true
}

export default class Prisoners extends Component {

    constructor(props) {
        super(props)

        const adjectives = Names.adjectives;
        const noun = Names.noun;

        // Generate dummy prisoners
        let numberOfPrisoners = 50;
        const dummyPrisoners = [];
        for (let index = 0; index < numberOfPrisoners; index++) {

            // Prisoner first name from adjective
            const first = adjectives[Math.floor(Math.random() * adjectives.length)]

            // Prisoner last name from sustantive
            const last = noun[Math.floor(Math.random() * noun.length)]

            // Randomly generated prisoner number
            const number = Math.floor(Math.random() * 100000)

            // Prisoner key
            const key = dummyPrisoners.length + 1

            // Prisoner
            const prisoner = {
                key: key,
                name: first + " " + last,
                number: number,
            }
            dummyPrisoners.push(prisoner)
        }

        // Set state
        this.state = {
            prisoners: dummyPrisoners
        }
    }

    render() {
        return (
            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
            >
                {this.state.prisoners.map(prisoner => (
                    <Prisoner prisoner={prisoner} key={prisoner.key}></Prisoner>
                ))}
            </Flickity>

        )
    }
}

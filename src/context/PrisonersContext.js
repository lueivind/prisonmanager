import React, { Component } from 'react'

import Names from "../Names.json"

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        // case "SET_SELECTED":
        //     // console.log("SET_SELECTED Called")
        //     // console.log("From reducer, selected index is: " + action.payload)
        //     return {
        //         ...state, selectedPrisoner: action.payload
        //     }
        default: return state;
    }
}

export default class PrisonersContext extends Component {
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
            selectedPrisoner: 0,
            dispatch: action => {
                this.setState(state => reducer(state, action))
            }
        }


        // state = {
        //     prisoners: [],
        //     selectedPrisoner: 0,
        //     dispatch: action => {
        //         this.setState(state => reducer(state, action))
        //     }
        // }

        // componentDidMount() {
        //     // Get list of adjectives and nouns
        //     const adjectives = Names.adjectives;
        //     const noun = Names.noun;

        //     // Generate dummy prisoners
        //     let numberOfPrisoners = 20;
        //     const dummyPrisoners = [];
        //     for (let index = 0; index < numberOfPrisoners; index++) {

        //         // Prisoner first name from adjective
        //         const first = adjectives[Math.floor(Math.random() * adjectives.length)]

        //         // Prisoner last name from sustantive
        //         const last = noun[Math.floor(Math.random() * noun.length)]

        //         // Randomly generated prisoner number
        //         const number = Math.floor(Math.random() * 100000)

        //         // Prisoner key
        //         const key = dummyPrisoners.length

        //         // Prisoner
        //         const prisoner = {
        //             key: key,
        //             name: first + " " + last,
        //             number: number,
        //         }
        //         dummyPrisoners.push(prisoner)
        //     }



        //     this.setState({
        //         prisoners: dummyPrisoners,
        //         selectedPrisoner: 0
        //     })
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;

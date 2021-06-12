import React, { Component } from 'react'

import Flickity from 'react-flickity-component'
import "./flickity.css"

import Prisoner from "./Prisoner"

const flickityOptions = {
    initialIndex: 0,
    freeScroll: false,
    wrapAround: true,
    pageDots: false
}

export default class Prisoners extends Component {

    componentDidMount() {
        this.flickity.on("change", () => {
            this.onSelectionChanged()
        })
    }

    onSelectionChanged() {
        this.props.onSelectionChanged(this.flickity.selectedIndex)
    }

    clickAlert(key) {
        this.flickity.select(key)
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.prisoners !== this.props.prisoners
    }

    render() {

        let { prisoners } = this.props;
        if (typeof (prisoners) == "undefined") {
            console.log("Prisoners are undefined, empty array applied.")
            prisoners = [];
        }

        return (
            <div style={{ padding: "0 0 1em 0" }}>
                <Flickity flickityRef={(f) => this.flickity = f}
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate // default false
                    static // default false
                >
                    {prisoners.map(prisoner => (
                        <Prisoner prisoner={prisoner} key={prisoner.key} onChildClick={this.clickAlert.bind(this)}></Prisoner>
                    ))}
                </Flickity>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class PrisonerDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter1: 0,
            counter2: 0,
            counter3: 0
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                counter1: Math.floor((Math.random() * 1000)),
                counter2: Math.floor((Math.random() * 100)),
                counter3: Math.floor((Math.random() * 1000))
            })
        }, 250)
    }

    changeCounters() {

    }

    render() {

        const { prisoners, selectedPrisoner } = this.props
        const { name, number, crimes } = prisoners[selectedPrisoner]

        return (
            // <div className="details-container">
            //     <div className="prison-door-inner-border flex">
            //         <div className="left-container">
            //             <h3>Number:</h3>
            //             <h2>{number}</h2>
            //             <h3>Name:</h3>
            //             <h2>{name}</h2>
            //             <h3>Crimes:</h3>
            //             {crimes.map((crime) => (
            //                 <h4>{crime}</h4>
            //             ))}
            //         </div>
            //         <div className="right-container">
            //             <div className="photo"></div>
            //         </div>
            //     </div>

            // </div>
            <div className="details-container" onClick={this.increment}>
                <div className="prison-door-inner-border">



                    <div className="flex" style={{ height: "200px" }}>
                        <div className="left-container">
                            <div className="detail-description">PRISONER</div>
                            <div className="detail">{number}</div>
                            <div className="detail-description">a.k.a.</div>
                            <div className="detail">{name}</div>

                        </div>
                        <div className="right-container">

                            <div className="photo"></div>
                            <div>
                                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                    <div className="numerics fg-blue-faded">{this.state.counter1}</div>
                                    <div className="numerics fg-light-faded">{this.state.counter2}</div>
                                    <div className="numerics fg-blue-faded">{this.state.counter3}</div>
                                </div>

                                <div className="bar-graph">
                                    <div className="bar b1"></div>
                                    <div className="bar b2"></div>
                                    <div className="bar b5"></div>
                                    <div className="bar b3"></div>
                                    <div className="bar b4"></div>
                                </div>
                            </div>


                        </div>
                    </div>



                    <div className="detail-description">CRIMES</div>
                    {crimes.map((crime) => (
                        <div className="detail list">{crime}</div>
                    ))}

                </div>

            </div>
        )
    }
}

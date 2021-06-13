import React, { Component } from 'react'
import silouette from "../resources/inkscape/silouette.svg"

export default class PrisonerDetails extends Component {

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
            <div className="details-container">
                <div className="prison-door-inner-border">



                    <div className="flex">
                        <div className="left-container">
                            <div className="detail-description">PRISONER</div>
                            <div className="detail">{number}</div>
                            <div className="detail-description">a.k.a.</div>
                            <div className="detail">{name}</div>
                        </div>
                        <div className="right-container">
                            <div className="photo"></div>
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

import React, { Component } from 'react'

export default class Prisoner extends Component {

    constructor(props) {
        super(props);

        this.state = { rehabilitated: false };
    }

    onDoorClick = () => {
        this.props.onChildClick(this.props.prisoner.key);
    }

    render() {
        // desconstruct from props
        const { name, number } = this.props.prisoner

        // Render Prisoner
        return (

            // TEST2
            <div className="prison-door">
                <div className="prison-door-inner-border" >
                    <div>
                        <h4 className="prisoner-number glow" onClick={this.onDoorClick}>{number}</h4>
                        <h2 className="prisoner-name">{name}</h2>
                    </div>
                </div>
            </div>





            // TEST1
            // <div style={{ background: "green", height: "200px", width: "150px", textAlign: "center" }}>
            //     <h1>{name}</h1>
            // </div>



            // BEFORE TEST
            // <div className="prison-door">
            //     <div className="prison-door-inner-border" >
            //         <h4 className="prisoner-number glow" onClick={this.onDoorClick}>{number}</h4>
            //         <h2 className="prisoner-name">{name}</h2>
            //     </div>
            // </div>



        )
    }
}

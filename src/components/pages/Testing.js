import React, { Component } from 'react'

// routing
import { Link } from 'react-router-dom'

export default class Testing extends Component {

    state = {
        borderGlow: true,
        doorClassName: "prison-door test-glow",
        numberGlow: true,
        numberClassName: "prisoner-number test-glow"
    }

    // constructor(props) {
    //     super(props)



    // }

    onBorderGlowToggle() {
        if (this.state.borderGlow) {
            this.setState({
                borderGlow: false,
                doorClassName: "prison-door"
            })
        }
        else {
            this.setState({
                borderGlow: true,
                doorClassName: "prison-door test-glow"
            })
        }
    }

    onNumberGlowToggle() {
        if (this.state.numberGlow) {
            this.setState({
                numberGlow: false,
                numberClassName: "prisoner-number"
            })
        }
        else {
            this.setState({
                numberGlow: true,
                numberClassName: "prisoner-number test-glow"
            })
        }
    }




    render() {

        const { numberClassName, doorClassName, borderGlow, numberGlow } = this.state;

        return (
            <div>
                <Link to="/">
                    <h3 className="link" style={{ margin: "2px" }}>Return</h3>
                </Link>
                <h3>Test Panel</h3>

                <button style={{ height: "50px", width: "150px" }} onClick={this.onBorderGlowToggle.bind(this)}>Toggle Border Glow</button>
                <div>{borderGlow ? "On" : "Off"}</div>
                <button style={{ height: "50px", width: "150px" }} onClick={this.onNumberGlowToggle.bind(this)}>Toggle Number Glow</button>
                <div>{numberGlow ? "On" : "Off"}</div>

                <h1>INTERROGATION</h1>
                <div className="test-container">
                    <div className={doorClassName}>
                        <div className="prison-door-inner-border" >
                            <div>
                                <h4 className={numberClassName}>1234523</h4>
                                <h2 className="prisoner-name">Testing Tester</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}





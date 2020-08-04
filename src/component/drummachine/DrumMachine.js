import React, { Component } from 'react'
import DrumDisplay from '../display/DrumDisplay'
import DrumPads from '../drumpads/DrumPads'

class DrumMachine extends Component {
    render() {
        return (
            <div id="drum-machine"
                className="col-12 col-md-10 col-lg-7 d-flex p-4 mx-auto">
                <DrumPads />
                <DrumDisplay />
            </div>
        )
    }
}

export default DrumMachine

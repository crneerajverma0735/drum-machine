import React, { Component } from 'react'
import { DrumConsumer } from '../../context'

export default class DrumDisplay extends Component {
    render() {
        return (
            <DrumConsumer>
                {
                    (value) => {
                        const { handlePower, power, bank, handleBank, displaySoundName, volume, volumeHandle } = value
                        return (<div id="display" className="col-12 col-md-5 col-lg-5 mx-auto">
                            <div className="row mt-5 mx-auto">
                                <div className="col-4 mx-auto">
                                    <h6 className="m-0">Power</h6>
                                    <div className="power" onClick={handlePower}>
                                        <div className={power ? "on" : "off"} />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-10 d-flex justify-content-center align-items-center mx-auto soundName">
                                    {displaySoundName}
                                </div>
                            </div>
                            <div className="row mt-4 ">
                                <div className="col-12 mx-auto slidecontainer">
                                    <input type="range" step="1" min="0" max="100" value={volume} className="slider" onChange={(e) => volumeHandle(e)} />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4 mx-auto">
                                    <h6 className="m-0">Bank</h6>
                                    <div className="bank" onClick={handleBank}>
                                        <div className={bank ? "on" : "off"} />
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }}
            </DrumConsumer>
        )
    }
}

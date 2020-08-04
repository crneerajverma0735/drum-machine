import React, { Component } from 'react'
import { DrumConsumer } from '../../context'

export default class DrumPads extends Component {

    render() {
        return (
            <DrumConsumer>
                {
                    (value) => {
                        const { dialPads, playSound, soundBankOff, soundBankOn, playBankOff, playBankOn, bank } = value
                        return (
                            <div className="col-12 col-md-7 col-lg-7">
                                <div className="row">

                                    {dialPads.map((item, index) => (
                                        <div
                                            className="col-3 d-flex align-items-center justify-content-center drum-pad"
                                            onClick={(e) => { e.preventDefault(); playSound(e) }}
                                            id={bank ? soundBankOff[index] : soundBankOn[index]}
                                            key={index}

                                        >

                                            <audio src={`https://s3.amazonaws.com/freecodecamp/drums/${bank ? playBankOff[index] : playBankOn[index]}.mp3`} className="clip" id={item}>

                                            </audio>
                                            {item}

                                        </div>))}
                                </div>
                            </div>)
                    }
                }
            </DrumConsumer >

        )
    }
}

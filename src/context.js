import React, { Component } from 'react'

const DrumContext = React.createContext();

class DrumProvider extends Component {

    state = {
        dialPads: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'],
        keyCode: ['Q', 'q', 'W', 'w', 'E', 'e', 'A', 'a', 'S', 's', 'D', 'd', 'Z', 'z', 'X', 'x', 'C', 'c'],
        soundBankOff: ['Heater1', 'Heater2', 'Heater3', 'Heater4', 'Clap', 'Open HH', 'Kick n\' Hat', 'Kick', 'Closed HH'],
        soundBankOn: ['Chord 1', 'Chord 2', 'Chord 3', 'Shaker', 'Open HH', 'Punchy Kick', 'Side Stick', 'Snare'],
        playBankOff: ["Heater-1", "Heater-2", "Heater-3", "Heater-4_1", "Heater-6", "Dsc_Oh", "Kick_n_Hat", "RP4_KICK_1", "Cev_H2"],
        playBankOn: ["Chord_1", "Chord_2", "Chord_3", "Give_us_a_light", "Dry_Ohh", "Bld_H1", "punchy_kick_1", "side_stick_1", "Brk_Snr"],
        bank: true,
        power: false,
        displaySoundName: "",
        volume: 30
    }


    componentDidMount = () => {
        document.addEventListener('keydown', this.playSoundByKey);
    }

    handlePower = () => {
        this.setState((prevState) => ({
            power: !prevState.power
        }))
    }

    handleBank = () => {
        if (this.state.power === true) return;
        this.setState((prevState) => ({
            bank: !prevState.bank,
            displaySoundName: this.state.bank ? "Smooth Piano Kit" : "Heater Kit"
        }))
    }

    playSound = (e) => {
        if (this.state.power === true) return;
        this.setState({
            displaySoundName: e.target.id
        })
        const targets = e.target;
        e.target.classList.add("clickOrange");
        e.target.childNodes[0].volume = (this.state.volume / 100).toFixed(1);
        console.log(e.target.childNodes[0].volume)
        e.target.childNodes[0].currentTime = 0;
        e.target.childNodes[0].play();
        setTimeout(() => targets.classList.remove("clickOrange"), 200);

    }


    playSoundByKey = (e) => {
        if (this.state.power === true) return;
        if (this.state.dialPads.includes(e.key.toUpperCase())) {

            const keyValue = document.getElementById(e.key.toUpperCase());
            this.setState({
                displaySoundName: keyValue.parentNode.id
            })

            keyValue.parentNode.classList.add("clickOrange");
            keyValue.volume = (this.state.volume / 100).toFixed(1);
            keyValue.currentTime = 0;
            keyValue.play();
            setTimeout(() => keyValue.parentNode.classList.remove("clickOrange"), 200);
        }
    }

    volumeHandle = (e) => {
        if (this.state.power === true) return;
        this.setState({
            volume: e.target.value,
            displaySoundName: "Volume " + this.state.volume
        })
        setTimeout(() => {
            this.setState({
                displaySoundName: ""
            })
        }, 400)
    }

    render() {
        return (
            <DrumContext.Provider
                value={{
                    ...this.state,
                    handlePower: this.handlePower,
                    handleBank: this.handleBank,
                    playSound: this.playSound,
                    playSoundByKey: this.playSoundByKey,
                    volumeHandle: this.volumeHandle
                }}>
                {this.props.children}
            </DrumContext.Provider>


        )
    }
}


const DrumConsumer = DrumContext.Consumer;

export { DrumConsumer, DrumProvider };












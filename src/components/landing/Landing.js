import React, { Component } from 'react';
import logo from '../../svg/logo.svg';
import LandingMagicText from './LandingMagicText'
const texts = ['tabs.', 'drones.', 'security.','the web.', 'Visual Studio code.', 'blockcain.', 'neural nets.','mobile', 'javascript.', 'react.js and react native.', 'python.', 'AR and VR.', 'can bus.'];

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            magicTextList: texts,
            magicText: texts[0],
            animatedMagicText: '',
            magicTextStyle:''
        };
        this.setNextMagicText = this.setNextMagicText.bind(this);
    }

    setNextMagicText() {
        const currentPosition = this.state.magicTextList.indexOf(this.state.magicText);
        const nextText = this.state.magicTextList[currentPosition + 1];
        let newState = {
            magicText: nextText,
            animatedMagicText: ''
        }
        if (!nextText) {
            newState.magicText = this.state.magicTextList[0]
        }
        this.setState(newState)
        this.animateMagicText()
    }

    animateMagicText() {
        const splitMagicText = this.state.magicText.split('');
        const splitTime = 100;
        const idleTime = 1500;

        splitMagicText.forEach((magicChar, index) => {
            setTimeout(() => {
                this.setState({
                    animatedMagicText: this.state.animatedMagicText + magicChar
                })
            }
                , splitTime * index
            );

        })
        //Highlight text
        setTimeout(() => {
            this.setState({
                magicTextStyle:'selected'
            })
        }
            , splitTime * splitMagicText.length + idleTime
        );
        //Delete Text
        setTimeout(() => {
            this.setState({
                magicTextStyle:''
            })
            this.setNextMagicText()
        }
            , splitTime * splitMagicText.length + idleTime*1.5
        );

    }

    componentDidMount() {
        this.animateMagicText()
    }

    render() {
        return (
            <section id={"landing"}>
                <img src={logo} alt="Logo: arthur" />
                <h1>
                    Arthur Petrie
                </h1>
                <h3>
                    {'I like '}
                    <LandingMagicText
                        magicText={this.state.animatedMagicText}
                        magicTextStyle={this.state.magicTextStyle}
                    />
                </h3>
            </section>
        );
    }
}

export default Landing
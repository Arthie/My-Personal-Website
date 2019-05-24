import React, { Component } from "react";
import logo from "../../svg/ARTHUR.svg";
import LandingMagicText from "./LandingMagicText";
import SocialLinks from "./SocialLinks";
import Background from "./Background";

//Data
const texts = [
  // "the web.",
  // "developing.",
  // "mobile.",
  "full stack.",
  "Javascript.",
  "React.js.",
  "React native.",
  "Typescript.",
  "GraphQL.",
  "AWS."
  // "drones.",
  // "blockcain."
];

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      magicTextList: texts,
      magicText: texts[0],
      animatedMagicText: "",
      magicTextStyle: ""
    };
    this.setNextMagicText = this.setNextMagicText.bind(this);
  }

  setNextMagicText() {
    const currentPosition = this.state.magicTextList.indexOf(
      this.state.magicText
    );
    const nextText = this.state.magicTextList[currentPosition + 1];
    let newState = {
      magicText: nextText,
      animatedMagicText: ""
    };
    if (!nextText) {
      newState.magicText = this.state.magicTextList[0];
    }
    this.setState(newState);
    this.animateMagicText();
  }

  async animateMagicText() {
    const splitMagicText = this.state.magicText.split("");
    const splitTime = 100;
    const idleTime = 1500;

    function animatedTimeout(time) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, time);
      });
    }

    for (let magicChar of splitMagicText) {
      await animatedTimeout(splitTime);
      this.setState({
        animatedMagicText: this.state.animatedMagicText + magicChar
      });
    }
    //Blink Cursor
    this.setState({
      magicTextStyle: " blink"
    });
    //Await blink
    await animatedTimeout(idleTime);
    //Highlight Cursor
    this.setState({
      magicTextStyle: " blink selected"
    });
    //Await blink selected
    await animatedTimeout(idleTime);
    //Delete Text + set next Text
    this.setState({
      magicTextStyle: ""
    });
    this.setNextMagicText();
  }

  componentDidMount() {
    this.animateMagicText();
  }

  render() {
    return (
      <section id="landing">
        <Background />
        <div>
          <img src={logo} alt="Arthur Logo" />
          <h1>Arthur Petrie</h1>
          <h3>Webdeveloper</h3>
          {/*<LandingMagicText
            magicText={this.state.animatedMagicText}
            magicTextStyle={this.state.magicTextStyle}
          />
          <SocialLinks />*/}
        </div>
      </section>
    );
  }
}

export default Landing;

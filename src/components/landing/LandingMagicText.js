import React from "react";

const LandingMagicText = props => {
  return (
    <h3>
      {"I ❤ "}
      <span className={"magicText" + props.magicTextStyle}>
        {props.magicText}
      </span>
    </h3>
  );
};

export default LandingMagicText;

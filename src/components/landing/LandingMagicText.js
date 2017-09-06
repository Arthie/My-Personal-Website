import React from 'react';

const LandingMagicText = (props) => {
    return (
        <span className={'magicText '+props.magicTextStyle}>
            {props.magicText}
        </span>
    );
}

export default LandingMagicText;
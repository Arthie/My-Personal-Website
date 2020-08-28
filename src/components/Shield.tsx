import React from "react";
import { css } from "@emotion/css";
import tw from "@tailwindcssinjs/macro";

const Shield = (props) => {
  return (
    <img {...props} className={css(tw`important:m-0 important:inline`)} />
  )
};

export default Shield;

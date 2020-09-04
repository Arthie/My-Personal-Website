import tw from "@tailwindcssinjs/macro";
import css from "../config/stitches.config";

const Shield = (props) => {
  return (
    <img {...props} className={css(tw`important:my-0 important:inline`)} />
  )
};

export default Shield;

import tw from "@tailwindcssinjs/macro";
import { css, cx } from '@emotion/css'

const Shield = (props) => {
  return (
    <img {...props} className={css(tw`important:my-0 important:inline`)} />
  );
};

export default Shield;

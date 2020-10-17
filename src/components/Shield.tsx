import tw from "@tailwindcssinjs/macro";
import { css } from 'otion'

const Shield = (props) => {
  return (
    <img width="147" height="20" {...props} className={css(tw`important:my-0 important:inline`)} />
  );
};

export default Shield;

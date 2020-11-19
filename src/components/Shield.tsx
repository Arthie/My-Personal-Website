import xw from "xwind";

const Shield = (props) => {
  return (
    <img
      width="147"
      height="20"
      {...props}
      className={xw`important:my-0 important:inline`}
    />
  );
};

export default Shield;

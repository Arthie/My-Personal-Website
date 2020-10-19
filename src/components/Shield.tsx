import tw from "@tailwindcssinjs/css";

const Shield = (props) => {
  return (
    <img width="147" height="20" {...props} className={tw`important:my-0 important:inline`} />
  );
};

export default Shield;

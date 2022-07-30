import ButtonMain from "./style";

const Button = ({ onClick, children }) => {
  return <ButtonMain onClick={onClick}>{children}</ButtonMain>;
};

export default Button;

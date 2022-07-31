import InputMain from "./style";

const Input = ({ type, placeholder, onChange }) => {
  return (
    <InputMain
      type={type}
      placeholder={placeholder}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      onClick={(event) => {
        event.target.value = "";
      }}
    />
  );
};

export default Input;

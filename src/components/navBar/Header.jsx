import { useState } from "react";
import Button from "../Button/Button";
import Input from "./InputSearch/Input";
import ContainerHeader from "./style";

const Header = ({ ArrayProducts, setFilteredArray }) => {
  const [onChange, setOnChange] = useState(" ");

  return (
    <ContainerHeader>
      <img src="/logo.svg" alt="Kenzie Burger" />
      <form>
        <Input
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={setOnChange}
        />
        <Button
          onClick={(event) => {
            event.preventDefault();
            let arrayFilter = ArrayProducts.filter((elem) => {
              return (
                elem.name.toLowerCase().includes(onChange.toLowerCase()) ||
                elem.category.toLowerCase().includes(onChange.toLowerCase())
              );
            });

            setFilteredArray(() => {
              return [...arrayFilter];
            });
          }}
        >
          Pesquisar
        </Button>
      </form>
    </ContainerHeader>
  );
};
export default Header;

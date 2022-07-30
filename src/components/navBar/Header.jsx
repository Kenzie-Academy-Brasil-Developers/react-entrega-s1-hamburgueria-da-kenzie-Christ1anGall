import Button from "../Button/Button";
import Input from "./InputSearch/Input";
import ContainerHeader from "./style";

const Header = () => {
  return (
    <ContainerHeader>
      <img src="/logo.svg" alt="Kenzie Burger" />
      <div>
        <Input type="text" placeholder="Digitar Pesquisa" />
        <Button onClick={() => {}}>Pesquisar</Button>
      </div>
    </ContainerHeader>
  );
};
export default Header;

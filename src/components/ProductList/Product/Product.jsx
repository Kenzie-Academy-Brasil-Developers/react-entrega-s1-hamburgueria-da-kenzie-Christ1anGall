import Button from "../../Button/Button";
import ProductContainer from "./style";

const Card = ({ Product, setCartProduct, setFilteredArray }) => {
  return (
    <ProductContainer>
      <span>
        <img src={Product.img} alt={Product.name} />
      </span>
      <div>
        <h1>{Product.name}</h1>
        <h3>{Product.category}</h3>
        <h5>R$ {Product.price.toFixed(2)}</h5>
        <Button
          onClick={() => {
            setFilteredArray([]);
            setCartProduct((oldArray) => {
              if (
                oldArray.find((elem) => {
                  return elem.id === Product.id;
                })
              ) {
                alert("Produto Já cadastrado");
                return oldArray;
              } else {
                return [...oldArray, Product];
              }
            });
          }}
        >
          Adicionar
        </Button>
      </div>
    </ProductContainer>
  );
};

export default Card;

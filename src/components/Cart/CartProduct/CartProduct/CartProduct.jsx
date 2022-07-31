import CardCart from "./style";

const CartProduct = ({ elem, setCartProduct, cartProduct }) => {
  return (
    <CardCart>
      <div className="InfoCardCart">
        <img src={elem.img} alt={elem.name} />
        <div>
          <h1>{elem.name}</h1>
          <h5>{elem.category}</h5>
        </div>
      </div>
      <button
        onClick={() => {
          let arrayFiltered = cartProduct.filter((element) => {
            return element.id !== elem.id;
          });

          setCartProduct(arrayFiltered);
        }}
      >
        Remover
      </button>
    </CardCart>
  );
};

export default CartProduct;

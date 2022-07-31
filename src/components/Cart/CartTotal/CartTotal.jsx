import CartTotalContainer from "./style";

const CartTotal = ({ cartProduct, setCartProduct }) => {
  return (
    <CartTotalContainer>
      <div className="CartTotalInfo">
        <h1>Total</h1>
        <h2>
          R${" "}
          {cartProduct
            .reduce((acc, value) => {
              return acc + value.price;
            }, 0)
            .toFixed(2)}
        </h2>
      </div>
      <button
        onClick={() => {
          setCartProduct([]);
        }}
      >
        Remover todos
      </button>
    </CartTotalContainer>
  );
};

export default CartTotal;

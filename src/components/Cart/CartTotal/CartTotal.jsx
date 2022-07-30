import CartTotalContainer from "./style";

const CartTotal = () => {
  return (
    <CartTotalContainer>
      <div className="CartTotalInfo">
        <h1>Total</h1>
        <h2>R$ 40,00</h2>
      </div>
      <button>Remover todos</button>
    </CartTotalContainer>
  );
};

export default CartTotal;

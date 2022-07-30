import CartTotal from "../CartTotal/CartTotal";
import CartProduct from "./CartProduct/CartProduct";
import EmptyCart from "./EmptyCart/EmptyCart";
import { Container } from "./style";

const CartProductContainer = () => {
  return (
    <Container>
      <p>Carrinho de Compras</p>
      {/*    <EmptyCart /> */}
      <CartProduct />
      <CartTotal />
    </Container>
  );
};

export default CartProductContainer;

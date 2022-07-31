import CartTotal from "../CartTotal/CartTotal";
import CartProduct from "./CartProduct/CartProduct";
import EmptyCart from "./EmptyCart/EmptyCart";
import { Container } from "./style";

const CartProductContainer = ({ cartProduct, setCartProduct }) => {
  return (
    <Container>
      <p>Carrinho de Compras</p>

      {cartProduct.length > 0 ? (
        <>
          <ul>
            {cartProduct.map((elem) => {
              return (
                <CartProduct
                  key={elem.id}
                  elem={elem}
                  setCartProduct={setCartProduct}
                  cartProduct={cartProduct}
                />
              );
            })}
          </ul>
          <CartTotal
            cartProduct={cartProduct}
            setCartProduct={setCartProduct}
          />
        </>
      ) : (
        <>
          <EmptyCart />
        </>
      )}
    </Container>
  );
};

export default CartProductContainer;

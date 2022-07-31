import { useState } from "react";
import CartProductContainer from "../Cart/CartProduct/CartProductContainer";
import Card from "./Product/Product";

const ProductList = ({ renderProducts, setFilteredArray }) => {
  const [cartProduct, setCartProduct] = useState([]);

  return (
    <div className="ContainerProducts">
      <div className="Products">
        {renderProducts.map((Product) => {
          return (
            <Card
              key={Product.id}
              Product={Product}
              setCartProduct={setCartProduct}
              cartProduct={cartProduct}
              setFilteredArray={setFilteredArray}
            />
          );
        })}
      </div>
      <CartProductContainer
        cartProduct={cartProduct}
        setCartProduct={setCartProduct}
      />
    </div>
  );
};

export default ProductList;

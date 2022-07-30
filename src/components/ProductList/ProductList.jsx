import CartProductContainer from "../Cart/CartProduct/CartProductContainer";
import Card from "./Product/Product";

const ProductList = ({ ArrayProducts }) => {
  return (
    <div className="ContainerProducts">
      <div className="Products">
        {ArrayProducts.map((Product) => {
          return <Card key={Product.id} Product={Product} />;
        })}
      </div>
      <CartProductContainer />
    </div>
  );
};

export default ProductList;

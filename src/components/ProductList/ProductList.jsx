import Card from "./Product/Product";

const ProductList = ({ ArrayProducts }) => {
  return (
    <div className="ContainerProducts">
      {ArrayProducts.map((Product) => {
        return <Card key={Product.id} Product={Product} />;
      })}
    </div>
  );
};

export default ProductList;

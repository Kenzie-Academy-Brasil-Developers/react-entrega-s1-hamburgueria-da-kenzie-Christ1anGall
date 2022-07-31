import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/navBar/Header";
import ProductList from "./components/ProductList/ProductList";
import Global from "./styles/global";

function App() {
  const [ArrayProducts, setArrayProducts] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [renderProducts, setRenderProducts] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((resp) => resp.json())
      .then((resp) => setArrayProducts(resp));

    filteredArray.length === 0
      ? setRenderProducts(ArrayProducts)
      : setRenderProducts(filteredArray);
  }, [ArrayProducts]);

  useEffect(() => {
    filteredArray.length > 0
      ? setRenderProducts(filteredArray)
      : setRenderProducts(ArrayProducts);
  }, [filteredArray]);

  return (
    <div className="App">
      <Global />
      <Header
        ArrayProducts={ArrayProducts}
        setFilteredArray={setFilteredArray}
      />
      <ProductList
        renderProducts={renderProducts}
        setFilteredArray={setFilteredArray}
      />
    </div>
  );
}

export default App;

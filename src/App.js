import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/navBar/Header";
import ProductList from "./components/ProductList/ProductList";
import Global from "./styles/global";

function App() {
  const [ArrayProducts, setArrayProducts] = useState([]);

  useEffect(() => {
    let Products = fetch(
      "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
    )
      .then((resp) => resp.json())
      .then((resp) => setArrayProducts(resp));
  });

  return (
    <div className="App">
      <Global />
      <Header />
      <ProductList ArrayProducts={ArrayProducts} />
    </div>
  );
}

export default App;

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Result from "./components/Result";

function App() {
  return (
    <div>
      {/* header */}
      <Header />

      {/* navbar */}
      <Navbar />

      {/* result & sorting */}
      <Result />

      {/* product list */}
      <ProductList />
    </div>
  );
}

export default App;

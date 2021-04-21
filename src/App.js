import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Result from './components/Result';
import useQuery from './lib/hooks/useQuery';

function App() {
  const products = useQuery();

  console.log(products);
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

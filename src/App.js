import './App.css';
import Layout from './Pages/Layout/layout';
import ProductPage from './Pages/ProductPage/product-page';

function App() {
  return (
    <div className="App">
      <Layout>
        <ProductPage />
      </Layout>
    </div>
  );
}

export default App;

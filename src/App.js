import './App.css';
import { CartProvider } from './context/cartContext';
import Layout from './Pages/Layout/layout';
import ProductPage from './Pages/ProductPage/product-page';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';


function App() {
  
  console.log('app running')

  return (
    <div className="App">
      <CartProvider >
          <Layout>
            <BrowserRouter>
              <Routes>
                <Route path="/products" element={<ProductPage />} ></Route>
                <Route path="*" element={<div>404</div>} ></Route>
              </Routes>
            </BrowserRouter>
          </Layout>
      </CartProvider>
    </div>
  );
}

export default App;

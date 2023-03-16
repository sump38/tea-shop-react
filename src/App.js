import './App.css';
import { CartProvider } from './context/cartContext';
import Layout from './Pages/Layout/layout';
import ProductPage from './Pages/ProductPage/product-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();


function App() {


  return (
    <div className="App">
      <QueryClientProvider client={queryClient} >
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
      </QueryClientProvider>
    </div>
  );
}

export default App;

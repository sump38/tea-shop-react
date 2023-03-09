import Product from "../../Components/Product/product";
import useProducts from "../../Hooks/useProducts";
import { BallTriangle } from 'react-loader-spinner';
import styles from './product-page.module.css';
import Pagination from "../../Components/Pagination/pagination";
import ReactIcon from './logo192.png';

const ProductPage = () => {
  console.log('product page is running!');
  const {data: products, loading, error} = useProducts();

  console.log('rendering page, data is', products);

  if(loading) {
    return (<div className={styles.loader}>
      <BallTriangle/>
    </div>)
  }

  if(error) {
    return <div><img src={ReactIcon} alt="error"></img></div>
  }

  return (
    <>
      <div>
        {
          products.map((product) => {
            return (<Product key={'product_' + product.id} productData={product}/>)
          })
        }
      </div>
      <div className="pagination-container">
        {/* <Pagination /> */}
      </div>
    </>
    )
}

export default ProductPage;
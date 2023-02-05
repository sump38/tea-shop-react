import { useEffect, useState } from "react";
import Product from "../../Components/Product/product";
import useProducts from "../../Hooks/useProducts";

const ProductPage = () => {
  const {data: products, loading, error} = useProducts();
  console.log('rendering page');


  if(loading) {
    return <div>Loading Products...</div>
  }

  if(error) {
    return <div>Error occured!</div>
  }

  return (
    <>
      <div>
        {
          products.map((product) => {
            return (<Product productData={product}/>)
          })
        }
      </div>
    </>
    )
}

export default ProductPage;
import { useCart } from "../../context/cartContext";

const Product = ({productData}) => {
  const {name, price, description} = productData;
  const { amount, addProduct, removeProduct } = useCart();

  return (
    <div className="product-container">
      <h3>{name}</h3>
      <p>
        {description}
      </p>
      <div>
        <span>Price: {price}$</span>
        <pre>Cart amount: {amount}</pre>
      </div>
      <div>
        <button type="button" onClick={()=>{addProduct()}}>Add to cart!</button>
        <button type="button" onClick={()=>{removeProduct()}}>Remove from cart!</button>
        <button type="button" onClick={()=>{alert()}}>Alert!</button>

      </div>
    </div>
  )

}

export default Product;
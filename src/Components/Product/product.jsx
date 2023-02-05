const Product = ({productData}) => {
  const {name, price, description} = productData;

  return (
    <div className="product-container">
      <h3>{name}</h3>
      <p>
        {description}
      </p>
      <div>
        <span>Price: {price}$</span>
      </div>
    </div>
  )

}

export default Product;
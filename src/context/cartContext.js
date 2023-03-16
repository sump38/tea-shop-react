import { createContext, useContext, useEffect, useState } from "react";
import { useMutation } from 'react-query';

const CartContext = createContext();
const cartAPI = process.env.REACT_APP_API + 'cart';

export const CartProvider = ({children}) => {
  const [cartData, setCartData] = useState({
    items: [],
    totalPrice: 0,
  });
  
  return (<CartContext.Provider value={{cartData, setCartData}}>
    {children}
  </CartContext.Provider>)
}

export const useCart = () => {
  const {cartData, setCartData} = useContext(CartContext);
  const {data: cartItems, isLoading, error, mutate} = useMutation('cartData', () => fetch(cartAPI).then(res => res.json()));

  useEffect(() => {
    mutate();
  },[]);

  useEffect(() => {
    if(cartItems) {
      setCartData({
        ...cartData,
        items: cartItems
      });
    }
  },[cartItems])

  const amount = cartData.items.length;

  const addProduct = (productId) => {
    /**@type {} */
    const options = {
      method: 'POST',
      body: JSON.stringify({id: productId}),
      headers: {
        "Content-Type": "application/json"
      }
    }

    fetch(cartAPI, options).then(res => res.json()).then(data => {
      if(data === 'success') {
        mutate();
        console.log('item added');
      };
    });
  }

  const removeProduct = (productId) => {
    //TODO
  }

  return {
    amount,
    addProduct,
    removeProduct
  }

} 
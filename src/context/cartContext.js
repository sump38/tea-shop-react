import { createContext, useCallback, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
  console.log('provider updated!');
  const [amount, setAmount] = useState(4);
  
  return (<CartContext.Provider value={{amount, setAmount}}>
    {children}
  </CartContext.Provider>)
}

export const useCart = () => {
  const {amount, setAmount} = useContext(CartContext);

  const addProduct = () => {
    setAmount(amount + 1);
  }

  const removeProduct = () => {
    if (amount > 0) {
      setAmount(amount -1 );
    }
  }

  return {
    amount,
    addProduct,
    removeProduct
  }

} 
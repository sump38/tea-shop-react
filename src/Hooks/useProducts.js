import { useEffect, useState } from "react";

const useProducts = () => {
  console.log('useProducts is running!');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('use effect is working!')
    fetch('http://localhost:999/api/products', {
    }).then(res => {
      return res.json();
    }).then(data => {
        console.log('setData was called');
        setData(data);
        setLoading(false);
    }).catch(error => {
        console.log('catch was called');
        setLoading(false);
        setError(true);
    });
  },[]);


  return {
    data, loading, error
  }



}

export default useProducts;
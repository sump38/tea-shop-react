import { useEffect, useState } from "react";

const useProducts = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_API + 'products').then(res => {
      return res.json();
    }).then(data => {
        setData(data);
        setLoading(false);
    }).catch(error => {
        setLoading(false);
        setError(true);
    });
  },[]);


  return {
    data, loading, error
  }



}

export default useProducts;
import classes from './minicart.module.css';
import { useCart } from '../../context/cartContext';

const Minicart = () => {
  const { amount } = useCart();


  return (<>
    <div className={classes.cart}>
      &#128722;
      <div className={classes.amount}>
        {amount}
      </div>
    </div>
  </>)
}

export default Minicart;
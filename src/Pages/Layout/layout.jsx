//TODO: replace footer and header with components

import Minicart from "../../Components/minicart/minicart";
import classes from './layout.module.css';


const Layout = ({children}) => {
  return (
  <>
    <div className={classes.layoutContainer}>
      <header className={classes.header} >
        <h1 className={classes.mainTitle}> My Tea Shop</h1>
        <Minicart />
      </header>
      <section>
        {children}
      </section>
      <footer>
        My footer
      </footer>
    </div>
  </>
  );
}

export default Layout;
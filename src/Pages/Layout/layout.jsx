//TODO: replace footer and header with components

const Layout = ({children}) => {
  return (
  <>
    <header>
      <h1> My Tea Shop</h1>
    </header>
    <section>
      {children}
    </section>
    <footer>
      My footer
    </footer>
  </>
  );
}

export default Layout;
import Header from "./header/Header";

function Layout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>{children}</main>

      <footer></footer>
    </>
  );
}

export default Layout;

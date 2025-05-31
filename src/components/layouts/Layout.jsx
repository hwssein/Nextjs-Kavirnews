import Footer from "./footer/page";
import Header from "./header/Header";

function Layout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;

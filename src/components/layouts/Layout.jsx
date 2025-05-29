import Footer from "./footer/page";
import Header from "./header/Header";

function Layout({ children }) {
  return (
    <>
      <header>
        <Header />

        <span className="w-full h-px bg-stroke block my-1"></span>
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;

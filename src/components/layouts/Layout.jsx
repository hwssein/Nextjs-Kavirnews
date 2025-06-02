import getSession from "@/utils/getSession";
import Footer from "./footer/page";
import Header from "./header/Header";

async function Layout({ children }) {
  const session = await getSession();

  return (
    <>
      <header>
        <Header session={session} />
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;

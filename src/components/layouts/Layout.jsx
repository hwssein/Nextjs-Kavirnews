import getSession from "@/utils/getSession";
import Header from "./header/Header";

async function Layout({ children }) {
  const session = await getSession();

  return (
    <>
      <header>
        <Header session={session && session.id ? session : false} />
      </header>

      <main>{children}</main>

      <footer></footer>
    </>
  );
}

export default Layout;

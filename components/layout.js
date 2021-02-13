import Head from "next/head";
import Footer from "./footer";

const Layout = ({ children, home }) => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>UBIcoin</title>
      </Head>
      <header>
        <img src="UBIlogo.png" class="logo" />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

import Head from "next/head";
import Footer from "./footer";
import Link from "next/link";

const Layout = ({ children, home, footerLinks }) => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>UBIcoin</title>
      </Head>
      <header>
        {!home ? (
          <Link href="/">
            <img src="UBIlogo.png" className="logo" />
          </Link>
        ) : (
          <img src="UBIlogo.png" className="logo" />
        )}
      </header>
      <main>
        <div className="content" data-aos="fade-left">
          {children}
        </div>
      </main>
      <Footer links={footerLinks} />
    </div>
  );
};

export default Layout;

import Head from "next/head";
import Footer from "./footer";
import Link from "next/link";

const Layout = ({ children, home, footerLinks }) => {
  const logo = <img src="/UBIlogo.png" className="logo" alt="Ubi logo" />;
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="en"></html>
        <title>UBIcoin</title>
      </Head>
      <header>{!home ? <Link href="/">{logo}</Link> : logo}</header>
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

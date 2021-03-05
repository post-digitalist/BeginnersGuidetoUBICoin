import Head from "next/head";
import Footer from "./footer";
import Link from "next/link";
import Image from "next/image";

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
            <Image src="UBIlogo.png" className="logo" />
          </Link>
        ) : (
          <Image src="UBIlogo.png" className="logo" />
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

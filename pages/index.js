import Head from "next/head";
import { getSortedContentData } from "../lib/data";
import Layout from "../components/layout";
import Arrow from "../components/arrow";
import Splash from "../components/splash";

export default function Home({ slide, slideLinks }) {
  const { id } = slide;
  const showSplash = false;

  return (
    <div>
      {showSplash && <Splash />}
      <Layout home footerLinks={slideLinks}>
        <section className="content wide-content">
          <h1>
            A Beginner's Guide to How $UBI Makes Ethereum Transactions
            Accessible for Everyone
          </h1>
        </section>
        <Arrow href={`/${id}`} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const slides = getSortedContentData();
  return {
    props: {
      nextSlide: { params: { id: slides[0].id } },
      slide: slides[0],
      slideLinks: slides.map(({ title, id }) => ({ id, title })),
    },
  };
}

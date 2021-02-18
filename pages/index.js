import Head from "next/head";
import { getSortedContentData } from "../lib/data";
import Layout from "../components/layout";
import Arrow from "../components/arrow";

export default function Home({ slide, slideLinks }) {
  const { id } = slide;
  return (
    <Layout home footerLinks={slideLinks}>
      <section className="content">
        <h1>
          A Beginner's Guide to How UBIcoin Makes Ethereum Transactions
          Accessible for Everyone
        </h1>
      </section>
      <Arrow href={`/${id}`} />
    </Layout>
  );
}

export async function getStaticProps() {
  const slides = getSortedContentData();
  console.log(slides);
  return {
    props: {
      slide: slides[0],
      slideLinks: slides.map(({ title, id }) => ({ id, title })),
    },
  };
}

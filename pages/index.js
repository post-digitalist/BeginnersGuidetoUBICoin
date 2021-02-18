import Head from "next/head";
import { getSortedContentData } from "../lib/data";
import Layout from "../components/layout";
import Arrow from "../components/arrow";

export default function Home({ slide }) {
  const { id } = slide;
  return (
    <Layout>
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
  const a = getSortedContentData();
  console.log(a);
  return {
    props: {
      slide: a[0],
    },
  };
}

import Head from "next/head";
import { getSortedContentData } from "../lib/data";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <section className="content">
        <h1>
          A Beginner's Guide to How UBIcoin Makes Ethereum Transactions
          Accessible for Everyone
        </h1>
      </section>
      <section className="arrow">
        <img src="arrow.svg" />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const a = getSortedContentData();
  console.log(a);
  return {
    props: {
      h: 1,
    },
  };
}

import Layout from "../components/layout";
import { getContentData, getNextSlide, getAllContentIds } from "../lib/data";
import Head from "next/head";
import Arrow from "../components/arrow";

export default function Slide({ currentId, nextId, slideData }) {
  const {
    params: { id: nextSlideId },
  } = nextId;
  return (
    <Layout>
      <Head>
        <title>{slideData.title} | UBIcoin</title>
      </Head>
      <article className="single-article">
        <div dangerouslySetInnerHTML={{ __html: slideData.contentHtml }}></div>
        {nextSlideId !== currentId && <Arrow href={`/${nextSlideId}`} />}
      </article>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const paths = getAllContentIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params);
  const slideData = await getContentData(params.id);
  const currentId = params.id;
  const nextId = await getNextSlide(params.id);
  return {
    props: {
      currentId,
      slideData,
      nextId,
    },
  };
};

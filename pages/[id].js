import Layout from "../components/layout";
import {
  getContentData,
  getNextSlide,
  getAllContentIds,
  getSortedContentData,
} from "../lib/data";
import Head from "next/head";
import Arrow from "../components/arrow";

export default function Slide({ currentId, nextId, slideData, slideLinks }) {
  const {
    params: { id: nextSlideId },
  } = nextId;
  return (
    <Layout footerLinks={slideLinks}>
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
  const slides = getSortedContentData();
  const slideData = await getContentData(params.id);
  const currentId = params.id;
  const nextId = await getNextSlide(params.id);
  return {
    props: {
      currentId,
      slideData,
      nextId,
      slideLinks: slides.map(({ title, id }) => ({ id, title })),
    },
  };
};

import Layout from "../components/layout";
import {
  getContentData,
  getNextSlide,
  getPrevSlide,
  getAllContentIds,
  getSortedContentData,
} from "../lib/data";
import Head from "next/head";
import Arrow from "../components/arrow";

export default function Slide({ currentId, nextSlide, slideData, slideLinks }) {
  const {
    params: { id: nextSlideId },
  } = nextSlide;
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
  const nextSlide = await getNextSlide(params.id);
  const prevSlide = await getPrevSlide(params.id);

  return {
    props: {
      currentId,
      slideData,
      nextSlide,
      prevSlide,
      slideLinks: slides.map(({ title, id }) => ({ id, title })),
    },
  };
};

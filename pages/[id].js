import Layout from "../components/layout";
import { getAllContentIds, getContentData, getNextSlide } from "../lib/data";
import Head from "next/head";
import Arrow from "../components/arrow";

export default function Slide({ currentId, nextId, slideData }) {
  const {
    params: { id: nextSlideId },
  } = nextId;
  return (
    <Layout>
      <article className="single-article">
        <h1>{slideData.title}</h1>
        {slideData.cover && (
          <img
            src={slideData.cover}
            alt={slideData.coverAlt || "cover image"}
            class="xxl-size-image"
          />
        )}
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

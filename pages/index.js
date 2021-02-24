import Head from "next/head";
import { getSortedContentData } from "../lib/data";
import Layout from "../components/layout";
import Arrow from "../components/arrow";
import Splash from "../components/splash";
import { useTransition, animated } from "react-spring";
import { useState, useEffect } from "react";

export default function Home({ slide, slideLinks }) {
  const { id } = slide;

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowSplash(false), 5000);
  }, []);

  const transitions = useTransition(showSplash, null, {
    from: { positon: "absolute", opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <Splash />
            </animated.div>
          )
      )}
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

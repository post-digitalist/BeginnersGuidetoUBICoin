import { useEffect } from "react";
import "../styles/style.css";
import "../styles/panamera/panamera.css";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    let nextId;
    let prevId;

    nextId = pageProps.nextSlide?.params?.id;
    prevId = pageProps.prevSlide?.params?.id;

    const keyboardInteraction = (event) => {
      switch (event.code) {
        case "ArrowLeft":
          if (prevId != undefined) {
            window.location.href = `/${prevId}`;
          }
          break;
        case "ArrowRight":
          if (nextId && pageProps.currentId !== nextId) {
            window.location.href = `/${nextId}`;
          }
          break;

        default:
      }
    };
    window.addEventListener("keydown", keyboardInteraction);
    return () => {
      window.removeEventListener("keydown", keyboardInteraction);
    };
  });

  return <Component {...pageProps} />;
}

export default MyApp;

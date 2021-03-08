import Link from "next/link";

const Arrow = ({ href }) => {
  const arrow = <img src="/arrow.png" alt="Arrow next slide" />;
  return (
    <section className="arrow">
      {href ? <Link href={href}>{arrow}</Link> : { arrow }}
    </section>
  );
};

export default Arrow;

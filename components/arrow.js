import Link from "next/link";

const Arrow = ({ href }) => {
  return (
    <section className="arrow">
      {href ? (
        <Link href={href}>
          <img src="arrow.png" />
        </Link>
      ) : (
        <img src="arrow.png" />
      )}
    </section>
  );
};

export default Arrow;

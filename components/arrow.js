import Link from "next/link";
import Image from "next/image";

const Arrow = ({ href }) => {
  return (
    <section className="arrow">
      {href ? (
        <Link href={href}>
          <Image src="arrow.png" />
        </Link>
      ) : (
        <Image src="arrow.png" />
      )}
    </section>
  );
};

export default Arrow;

const Arrow = ({ href }) => {
  return (
    <section className="arrow">
      {href ? (
        <a href={href}>
          <img src="arrow.svg" />
        </a>
      ) : (
        <img src="arrow.svg" />
      )}
    </section>
  );
};

export default Arrow;

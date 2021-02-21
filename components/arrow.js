const Arrow = ({ href }) => {
  return (
    <section className="arrow">
      {href ? (
        <a href={href}>
          <img src="arrow.png" />
        </a>
      ) : (
        <img src="arrow.png" />
      )}
    </section>
  );
};

export default Arrow;

const Topic = ({ icon, title, text }) => {
  return (
    <article className="flex flex-col items-start gap-2">
      <section className="flex gap-1">
        <span className="w-5 lmd:w-[1.875rem]">{icon}</span>
        <h2>{title}</h2>
      </section>
      <p>{text}</p>
    </article>
  );
};

export default Topic;

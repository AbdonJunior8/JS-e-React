// Exportação nomeada: os dois componentes podem ser importados do mesmo arquivo.
export function MainContent({ title, children }) {
  return (
    <main className="main-content">
      <h1>{title}</h1>
      <div>{children}</div>
    </main>
  );
}

export function Card({ title, description, author, children }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <p className="card-description">{description}</p>

      <div className="card-children">
        {children}

      </div>

      {author && <small className="card-author">Por: {author}</small>}
    </article>
  );
}
import type { Project } from "./project-data";

export function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <div className={`gallery-card-visual tone-${project.tone}`}>
        {project.image ? (
          <img
            className={project.imageFit === "contain" ? "is-contained" : ""}
            src={project.image}
            alt={`Hình ảnh dự án ${project.title}`}
          />
        ) : (
          <div className="gallery-card-poster" aria-label={`Ảnh đại diện đang được cập nhật cho ${project.title}`}>
            <span>{project.number}</span>
            <strong>{project.title}</strong>
            <i>{project.category}</i>
          </div>
        )}
        <span className="gallery-card-number">{project.number}</span>
        {project.href && <span className="gallery-card-open">XEM CASE STUDY ↗</span>}
      </div>
      <div className="gallery-card-meta">
        <div>
          <h3>{project.title}</h3>
          <p>{project.type}</p>
        </div>
        <small>{project.category}</small>
      </div>
    </>
  );

  if (project.href) {
    const isExternal = project.href.startsWith("http");
    return (
      <a
        aria-label={`Mở case study ${project.title}`}
        className="gallery-card is-linked"
        data-cursor="MỞ"
        href={project.href}
        rel={isExternal ? "noreferrer" : undefined}
        target={isExternal ? "_blank" : undefined}
      >
        {content}
      </a>
    );
  }

  return <article className="gallery-card">{content}</article>;
}

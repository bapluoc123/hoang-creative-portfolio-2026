import type { Project } from "./project-data";

const archiveCoverTitles = new Set([
  "ELIHIGH KIDS",
  "CHARACTER WORLDS & FANTASY",
  "ILLUSTRATION / MANGA",
  "KID SONG & GAME UI",
  "STORYBOARD & BOOK ILLUSTRATION",
]);

const archiveDisplayTitles: Record<string, string> = {
  "CHARACTER WORLDS & FANTASY": "CHARACTER WORLDS & FANTASY",
  "ILLUSTRATION / MANGA": "ILLUSTRATION / MANGA",
  "KID SONG & GAME UI": "KID SONG & GAME UI",
  "STORYBOARD & BOOK ILLUSTRATION": "STORYBOARD & BOOK ILLUSTRATION",
};

function ArchiveProjectCover({ title }: { title: string }) {
  if (title === "ELIHIGH KIDS") {
    return (
      <div className="archive-cover archive-cover-elihigh" aria-label="ELIHIGH KIDS project cover">
        <img
          className="archive-cover-elihigh-image"
          src="/projects/drive-curated/elihigh-kids/behance-cover.jpg"
          alt=""
        />
      </div>
    );
  }
  const coverByTitle: Record<string, string> = {
    "CHARACTER WORLDS & FANTASY": "/projects/covers/character-worlds-fantasy.png",
    "ILLUSTRATION / MANGA": "/projects/covers/illustration-manga-studies.png",
    "KID SONG & GAME UI": "/projects/covers/kids-game-art-ui.png",
    "STORYBOARD & BOOK ILLUSTRATION": "/projects/covers/visual-storytelling-publishing.png",
  };
  return (
    <div
      className="archive-cover provided-cover"
      aria-label={`${title} project cover`}
      style={{ height: "100%", width: "100%" }}
    >
      <img src={coverByTitle[title]} alt="" style={{ objectFit: "contain" }} />
    </div>
  );
}

export function MoodCardCover() {
  return (
    <div className="provided-cover" aria-label="Mood — Better Daily mental wellness app">
      <img src="/projects/covers/mood.png" alt="" />
    </div>
  );
}

export function AuroradotCardCover() {
  return (
    <div className="provided-cover" aria-label="AURORADOT emotional learning product screens">
      <img src="/projects/covers/auroradot.png" alt="" />
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const isArchiveCover = archiveCoverTitles.has(project.title);
  const displayTitle = archiveDisplayTitles[project.title] ?? project.title;
  const content = (
    <>
      <div
        className={`gallery-card-visual tone-${project.tone}${isArchiveCover ? " is-archive-cover" : ""}`}
        style={{ aspectRatio: "1600 / 830" }}
      >
        {project.title === "ABEECI" ? (
          <div className="abeeci-card-cover is-showcase-cover" aria-label="Nhận diện thương hiệu ứng dụng học tập ABEECI">
            <img
              aria-hidden="true"
              className="abeeci-card-cover-bg"
              src="/projects/abeeci/abeeci-cover-final-v7.png"
              alt=""
            />
            <div className="abeeci-card-cover-copy">
              <div className="abeeci-cover-brand">
                <i aria-hidden="true">A</i>
                <b>ABEECI</b>
              </div>
              <small className="abeeci-cover-subtitle">LEARNING APP · UX/UI &amp; ILLUSTRATION</small>
              <strong>Learn.<br />Play.<br /><em>Grow.</em></strong>
            </div>
          </div>
        ) : project.title === "MOOD" ? (
          <MoodCardCover />
        ) : project.title === "AURORADOT" ? (
          <AuroradotCardCover />
        ) : archiveCoverTitles.has(project.title) ? (
          <ArchiveProjectCover title={project.title} />
        ) : project.image ? (
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
      </div>
      <div className="gallery-card-meta is-title-only">
        <h3>{displayTitle}</h3>
      </div>
    </>
  );

  if (project.href) {
    const isExternal = project.href.startsWith("http");
    return (
      <a
        aria-label={`Mở project ${project.title}`}
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

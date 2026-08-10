import type { Project } from "./project-data";

const archiveCoverTitles = new Set([
  "ELIHIGH KIDS",
  "CHARACTER WORLDS & FANTASY",
  "ILLUSTRATION & MANGA STUDIES",
  "KIDS GAME ART & UI",
  "VISUAL STORYTELLING & PUBLISHING",
]);

function ArchiveProjectCover({ title }: { title: string }) {
  if (title === "ELIHIGH KIDS") {
    return (
      <div className="archive-cover archive-cover-elihigh" aria-label="ELIHIGH KIDS project cover">
        <img
          className="archive-cover-elihigh-image"
          src="/projects/drive-curated/elihigh-kids/archive-cover.png"
          alt=""
        />
      </div>
    );
  }

  if (title === "CHARACTER WORLDS & FANTASY") {
    return (
      <div className="archive-cover archive-cover-character" aria-label="Character Worlds and Fantasy project cover">
        <img
          className="archive-cover-character-image"
          src="/projects/drive-curated/god-of-heaven/layout-chung.webp"
          alt=""
        />
      </div>
    );
  }

  if (title === "ILLUSTRATION & MANGA STUDIES") {
    return (
      <div className="archive-cover archive-cover-illustration" aria-label="Illustration and Manga Studies project cover">
        <img className="archive-cover-bg" src="/projects/drive-curated/editorial-illustration/01.webp" alt="" />
        <div className="archive-cover-ink" aria-hidden="true" />
        <img className="archive-cover-art archive-cover-art-a" src="/projects/drive-curated/editorial-illustration/02.webp" alt="" />
        <img className="archive-cover-art archive-cover-art-b" src="/projects/drive-curated/manga-color-studies/08.webp" alt="" />
        <img className="archive-cover-art archive-cover-art-c" src="/projects/drive-curated/portrait-fan-art/01.webp" alt="" />
      </div>
    );
  }

  if (title === "KIDS GAME ART & UI") {
    return (
      <div className="archive-cover archive-cover-kids-game" aria-label="Kids Game Art and UI project cover">
        <img className="archive-cover-bg" src="/projects/drive-curated/kid-song-worlds/03.webp" alt="" />
        <span className="archive-cover-word">LEVEL UP!</span>
        <img className="archive-cover-prop" src="/projects/drive-curated/kid-song-worlds/01.webp" alt="" />
        <img className="archive-cover-game archive-cover-game-a" src="/projects/drive-curated/cake-puzzle-ui/01.webp" alt="" />
        <img className="archive-cover-game archive-cover-game-b" src="/projects/drive-curated/mobile-game-ui/01.webp" alt="" />
      </div>
    );
  }

  return (
    <div className="archive-cover archive-cover-story" aria-label="Visual Storytelling and Publishing project cover">
      <span className="archive-cover-word">STORY / FRAME / PAGE</span>
      <img className="archive-cover-storyboard archive-cover-storyboard-a" src="/projects/drive-curated/storyboard-frames/01.webp" alt="" />
      <img className="archive-cover-storyboard archive-cover-storyboard-b" src="/projects/drive-curated/storyboard-frames/05.webp" alt="" />
      <img className="archive-cover-book archive-cover-book-a" src="/projects/drive-curated/book-cover-illustration/01.webp" alt="" />
      <img className="archive-cover-book archive-cover-book-b" src="/projects/drive-curated/book-cover-illustration/03.webp" alt="" />
    </div>
  );
}

export function MoodCardCover() {
  return (
    <div className="mood-product-cover" aria-label="Mood — Better Daily mental wellness app">
      <span className="mood-product-label">MENTAL WELLNESS · MOBILE APP</span>
      <div className="mood-product-logo" style={{ mixBlendMode: "multiply" }}>
        <img
          src="/projects/mood/logo-system.png"
          alt="Mood — Better Daily"
          style={{ mixBlendMode: "multiply", width: "220%" }}
        />
      </div>
      <div className="mood-product-phones" aria-hidden="true">
        <img className="mood-product-phone mood-product-phone-left" src="/projects/mood/emotion.png" alt="" />
        <img className="mood-product-phone mood-product-phone-center" src="/projects/mood/home.png" alt="" />
        <img className="mood-product-phone mood-product-phone-right" src="/projects/mood/recommend.png" alt="" />
      </div>
    </div>
  );
}

export function AuroradotCardCover() {
  return (
    <div className="auroradot-card-cover" aria-label="AURORADOT emotional learning product screens">
      <div className="auroradot-card-devices" aria-hidden="true">
        <div className="auroradot-device auroradot-device-left">
          <img src="/projects/auroradot/ui-10-choose-mode.png" alt="" />
        </div>
        <div className="auroradot-device auroradot-device-center">
          <img src="/projects/auroradot/figma-parent-home.png" alt="" />
        </div>
        <div className="auroradot-device auroradot-device-right">
          <img src="/projects/auroradot/ui-18-moment-feel.png" alt="" />
        </div>
        <div className="auroradot-device auroradot-device-top">
          <img src="/projects/auroradot/ui-20-class-observe.png" alt="" />
        </div>
        <div className="auroradot-device auroradot-device-bottom">
          <img src="/projects/auroradot/ui-09-welcome.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <div className={`gallery-card-visual tone-${project.tone}`}>
        {project.title === "ABEECI" ? (
          <div className="abeeci-card-cover" aria-label="Nhận diện thương hiệu ứng dụng học tập ABEECI">
            <img
              aria-hidden="true"
              className="abeeci-card-cover-bg"
              src="/projects/abeeci/art-bg-barry.png"
              alt=""
            />
            <div className="abeeci-card-cover-copy">
              <span>ABEECI / LEARNING APP</span>
              <strong>Learn.<br />Play.<br /><em>Grow.</em></strong>
            </div>
            <img
              aria-hidden="true"
              className="abeeci-card-cover-mark"
              src="/projects/abeeci/art-element-home.png"
              alt=""
            />
            <img
              aria-hidden="true"
              className="abeeci-card-cover-character"
              src="/projects/abeeci/art-character-barry.png"
              alt=""
            />
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

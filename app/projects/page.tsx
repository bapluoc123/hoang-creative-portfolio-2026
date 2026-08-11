"use client";

import { useMemo, useState } from "react";
import { CustomCursor } from "../custom-cursor";
import { ProjectCard } from "../project-card";
import { allProjects, projectFilters } from "../project-data";
import { BrandLogo } from "../brand-logo";

const PROJECT_BATCH = 12;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof projectFilters)[number]>("TẤT CẢ");
  const [visibleCount, setVisibleCount] = useState(PROJECT_BATCH);

  const filteredProjects = useMemo(
    () => activeFilter === "TẤT CẢ"
      ? allProjects
      : allProjects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const remaining = Math.max(filteredProjects.length - visibleCount, 0);

  const changeFilter = (filter: (typeof projectFilters)[number]) => {
    setActiveFilter(filter);
    setVisibleCount(PROJECT_BATCH);
  };

  return (
    <main className="projects-page paper-noise">
      <CustomCursor />
      <header className="projects-page-nav">
        <a className="projects-brand" data-cursor="VỀ NHÀ" href="/" aria-label="Về trang chủ"><BrandLogo compact /></a>
        <a className="projects-back" data-cursor="QUAY LẠI" href="/#work">← TRANG CHỦ</a>
      </header>

      <section className="projects-page-hero">
        <div>
          <span>PROJECT ARCHIVE / 2026</span>
          <h1>All<br /><em>Projects.</em></h1>
        </div>
        <div className="projects-page-summary">
          <strong>{String(allProjects.length).padStart(2, "0")}</strong>
          <p>
            Tổng hợp các dự án khác nhau về UX/UI, 2D Game Art, Illustration, ...
          </p>
        </div>
      </section>

      <div className="projects-filter-bar" aria-label="Lọc dự án theo lĩnh vực">
        {projectFilters.map((filter) => {
          const count = filter === "TẤT CẢ"
            ? allProjects.length
            : allProjects.filter((project) => project.category === filter).length;
          return (
            <button
              aria-pressed={activeFilter === filter}
              className={activeFilter === filter ? "is-active" : ""}
              data-cursor="LỌC"
              key={filter}
              onClick={() => changeFilter(filter)}
              type="button"
            >
              {filter}<sup>{String(count).padStart(2, "0")}</sup>
            </button>
          );
        })}
      </div>

      <section className="projects-grid-wrap" aria-live="polite">
        <div className="project-gallery-grid projects-gallery-grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>

        {remaining > 0 && (
          <button
            className="projects-load-more"
            data-cursor="XEM THÊM"
            onClick={() => setVisibleCount((count) => count + PROJECT_BATCH)}
            type="button"
          >
            <span>Xem thêm {Math.min(PROJECT_BATCH, remaining)} dự án</span>
            <b>{String(remaining).padStart(2, "0")} CÒN LẠI&nbsp;&nbsp;＋</b>
          </button>
        )}
      </section>

      <footer className="projects-page-footer">
        <span>HUY HOÀNG © 2026</span>
        <a data-cursor="LIÊN HỆ" href="/#contact">LIÊN HỆ&nbsp;&nbsp;↗</a>
      </footer>
    </main>
  );
}

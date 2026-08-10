"use client";

import { useEffect, useState } from "react";
import { AuroradotCardCover, MoodCardCover, ProjectCard } from "./project-card";
import { allProjects, featuredProjects } from "./project-data";

const archiveProjects = allProjects.filter((project) => !project.featured);

const experiences = [
  ["2025 — NAY", "COQNIT PTE. LTD.", "2D Artist / UI Designer", "Singapore"],
  ["2023 — NAY", "ALGORZ", "2D Artist / UI Designer", "Singapore"],
  ["2022 — 2023", "AIARA CORP.", "2D Game Artist", "Hàn Quốc"],
  ["2017 — NAY", "FREELANCE", "2D Artist & Designer", "Quốc tế"],
];

const education = [
  ["2026 — NAY", "KEYFRAME MULTIMEDIA SCHOOL", "Advanced UI/UX Product Design & Web Application"],
  ["2023 — 2024", "UART STUDIO", "Character Design & Fantasy Art"],
  ["2020 — 2021", "EZIPEN", "Digital Illustration"],
  ["2017 — 2022", "FPT UNIVERSITY", "Bachelor of Graphic Design"],
  ["2017 — 2019", "PIGWORKSHOP", "Concept Art & Sketching"],
];

const services: Array<[string, string, string, string[]]> = [
  ["01", "UI/UX Design", "User flow, wireframe, prototype và giao diện mobile/web rõ ràng, dễ sử dụng.", ["USER FLOW", "WIREFRAME", "PROTOTYPE", "MOBILE / WEB UI"]],
  ["02", "Design System", "Xây dựng foundation, component và quy tắc giúp sản phẩm mở rộng nhất quán.", ["DESIGN TOKEN", "COMPONENT", "VARIANT & STATE", "DOCUMENTATION"]],
  ["03", "2D Game Art", "Nhân vật, bối cảnh, game UI, icon và visual asset cho sản phẩm số.", ["CHARACTER DESIGN", "ENVIRONMENT ART", "GAME UI", "ICON & ASSET"]],
  ["04", "Illustration", "Minh họa và visual development mang cá tính riêng cho thương hiệu và sản phẩm.", ["VISUAL DEVELOPMENT", "DIGITAL PAINTING", "KEY VISUAL", "EDITORIAL ART"]],
];

function CreatorFigure({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "creator-figure is-compact" : "creator-figure"}>
      <span className="figure-aura" />
      <div className="figure-photo-frame">
        <img
          className="figure-photo"
          src="/hoang-character-transparent-v5.png"
          alt={compact ? "Nhân vật minh họa của Huy Hoàng" : "Huy Hoàng, nhà thiết kế UI/UX và họa sĩ 2D"}
        />
      </div>
      <span className="figure-photo-note">NHÂN VẬT 01 / 2026</span>
      <span className="figure-photo-cross" aria-hidden="true">+</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const cursor = document.querySelector<HTMLElement>(".cursor");
    const cursorLabel = document.querySelector<HTMLElement>(".cursor-label");
    const progress = document.querySelector<HTMLElement>(".scroll-progress");
    const hero = document.querySelector<HTMLElement>(".hero");
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let cursorX = pointerX;
    let cursorY = pointerY;
    let cursorFrame = 0;
    let scrollFrame = 0;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (cursor) cursor.style.opacity = "1";
      const hovered = (event.target as Element | null)?.closest<HTMLElement>(
        "a, button, .work-card[data-cursor], .service-row",
      );
      cursor?.classList.toggle("is-active", Boolean(hovered));
      if (cursorLabel) cursorLabel.textContent = hovered?.dataset.cursor ?? (hovered ? "↗" : "");

      if (hero) {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;
        hero.style.setProperty("--mx", `${x}`);
        hero.style.setProperty("--my", `${y}`);
      }
    };

    const renderCursor = () => {
      cursorX += (pointerX - cursorX) * 0.18;
      cursorY += (pointerY - cursorY) * 0.18;
      cursor?.style.setProperty(
        "transform",
        `translate3d(${cursorX}px, ${cursorY}px, 0)`,
      );
      cursorFrame = window.requestAnimationFrame(renderCursor);
    };

    const renderScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      const value = available > 0 ? window.scrollY / available : 0;
      progress?.style.setProperty("transform", `scaleX(${value})`);
      hero?.style.setProperty(
        "--scroll",
        `${Math.min(1, window.scrollY / Math.max(window.innerHeight, 1))}`,
      );
      setScrolled(window.scrollY > 560);
      scrollFrame = 0;
    };

    const onScroll = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(renderScroll);
    };

    const hoverTargets = document.querySelectorAll<HTMLElement>(
      "a, button, .work-card[data-cursor], .service-row",
    );
    const magneticTargets = document.querySelectorAll<HTMLElement>(
      ".pill-link, .menu-toggle",
    );
    const onEnter = (event: Event) => {
      cursor?.classList.add("is-active");
      const label = (event.currentTarget as HTMLElement).dataset.cursor;
      if (cursorLabel) cursorLabel.textContent = label ?? "↗";
    };
    const onLeave = () => {
      cursor?.classList.remove("is-active");
      if (cursorLabel) cursorLabel.textContent = "";
    };
    const onMagneticMove = (event: PointerEvent) => {
      if (!hasFinePointer) return;
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      target.classList.add("is-hovered");
      target.style.setProperty(
        "--magnet-x",
        `${(event.clientX - rect.left - rect.width / 2) * 0.16}px`,
      );
      target.style.setProperty(
        "--magnet-y",
        `${(event.clientY - rect.top - rect.height / 2) * 0.2}px`,
      );
    };
    const resetMagnetic = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      target.classList.remove("is-hovered");
      target.style.setProperty("--magnet-x", "0px");
      target.style.setProperty("--magnet-y", "0px");
    };
    const onPointerDown = () => cursor?.classList.add("is-pressed");
    const onPointerUp = () => cursor?.classList.remove("is-pressed");
    hoverTargets.forEach((element) => {
      element.addEventListener("pointerenter", onEnter);
      element.addEventListener("pointerleave", onLeave);
    });
    magneticTargets.forEach((element) => {
      element.addEventListener("pointermove", onMagneticMove);
      element.addEventListener("pointerleave", resetMagnetic);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    if (hasFinePointer) cursorFrame = window.requestAnimationFrame(renderCursor);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    renderScroll();

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
      if (cursorFrame) window.cancelAnimationFrame(cursorFrame);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      hoverTargets.forEach((element) => {
        element.removeEventListener("pointerenter", onEnter);
        element.removeEventListener("pointerleave", onLeave);
      });
      magneticTargets.forEach((element) => {
        element.removeEventListener("pointermove", onMagneticMove);
        element.removeEventListener("pointerleave", resetMagnetic);
      });
      observer.disconnect();
      root.style.removeProperty("--pointer-x");
      root.style.removeProperty("--pointer-y");
      cursor?.style.removeProperty("opacity");
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="intro" aria-hidden="true">
        <div className="intro-mark">H<span>+</span></div>
        <p>MAKING IDEAS MOVE</p>
      </div>
      <div className="cursor" style={{ opacity: 1 }} aria-hidden="true"><span className="cursor-label" /></div>
      <div className="scroll-progress" aria-hidden="true" />

      <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
        <a className="brand" href="#top" aria-label="Hoang — về đầu trang" onClick={closeMenu}>
          <span className="brand-mark">H+</span>
          <span className="brand-copy">HUY HOÀNG<br /><small>UI/UX DESIGNER · 2D ARTIST</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Điều hướng chính">
          <a href="#top">Trang chủ</a>
          <a href="#about">Giới thiệu</a>
          <a href="#work">Dự án</a>
          <a href="#education">Học vấn</a>
          <a href="#contact">Liên hệ</a>
        </nav>

        <button
          className={menuOpen ? "menu-toggle is-open" : "menu-toggle"}
          type="button"
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span>{menuOpen ? "Đóng" : "Danh mục"}</span>
          <b>+</b>
        </button>
      </header>

      <div className={menuOpen ? "menu-panel is-open" : "menu-panel"} aria-hidden={!menuOpen}>
        <p>Điều hướng</p>
        <nav>
          <a href="#top" onClick={closeMenu}><span>01</span>Trang chủ</a>
          <a href="#about" onClick={closeMenu}><span>02</span>Giới thiệu</a>
          <a href="#work" onClick={closeMenu}><span>03</span>Dự án</a>
          <a href="#education" onClick={closeMenu}><span>04</span>Học vấn</a>
          <a href="#contact" onClick={closeMenu}><span>05</span>Liên hệ</a>
        </nav>
      </div>

      <section className="hero paper-noise" id="top">
        <div className="hero-ghost" aria-hidden="true">HOÀNG×SÁNGTẠO</div>
        <div className="hero-meta">UI/UX DESIGNER · 2D ARTIST<br />BASED IN VIETNAM</div>
        <div className="hero-kicker">Where Design Meets Illustration</div>

        <div className="hero-figure-wrap">
          <CreatorFigure />
          <span className="figure-caption">VISUAL<br />DESIGN</span>
        </div>

        <h1 className="hero-title" aria-label="Ý tưởng thành hình">
          <span className="hero-word hero-word-one">Ý TƯỞNG</span>
          <span className="hero-word hero-word-two">THÀNH</span>
          <span className="hero-word hero-word-three">HÌNH<span>.</span></span>
        </h1>

        <p className="hero-statement">
          <span>Tôi thiết kế những trải nghiệm số trực quan,</span> kết hợp tư duy UX/UI với khả năng kể chuyện bằng hình ảnh.<br />
          <span>Tạo ra những sản phẩm không chỉ dễ sử dụng,</span> mà còn có cá tính và dấu ấn thị giác riêng.
        </p>

        <span className="hero-spark spark-yellow" aria-hidden="true">✦</span>
        <span className="hero-spark spark-pink" aria-hidden="true">●</span>
        <span className="hero-spark spark-cyan" aria-hidden="true">+</span>

        <div className="scroll-cue" aria-hidden="true"><span>Cuộn xuống</span><i /></div>
      </section>

      <section className="about paper-noise" id="about">
        <div className="slant-top" aria-hidden="true" />
        <div className="section-heading reveal">
          <span className="heading-star">✦</span>
          <div>
            <h2>Tôi là ai?</h2>
            <p>Huy Hoàng là ai?</p>
          </div>
        </div>

        <div className="sketch-wall" aria-hidden="true">
          {["/about-process-1.webp", "/about-process-2.webp", "/about-process-3.webp"].map((src, item) => (
            <div className={`sketch-person sketch-person-${item + 1}`} key={src}>
              <img src={src} alt="" />
            </div>
          ))}
        </div>

        <div className="about-copy reveal">
          <p className="about-lead">
            Tôi là một<br />
            <mark>UI/UX DESIGNER & 2D ARTIST.</mark><br />
            <span className="about-lead-support">
              Tôi thiết kế trải nghiệm số bằng tư duy UX/UI và ngôn ngữ hình ảnh.
            </span>
          </p>
          <div className="about-details">
            <p>
              Tôi có hơn 4 năm kinh nghiệm thiết kế giao diện, minh họa và game asset
              cho mobile game, ứng dụng giáo dục và các sản phẩm số.
            </p>
            <p>
              Kinh nghiệm làm việc với các đội ngũ tại Singapore và Hàn Quốc giúp tôi kết hợp tư duy
              sản phẩm với thế mạnh về hình ảnh, tạo nên những thiết kế vừa có mục đích vừa có cá tính.
            </p>
          </div>
          <div className="profile-facts">
            <div><strong>4+</strong><span>Năm kinh nghiệm</span></div>
            <div><strong>VI / EN</strong><span>Tiếng Việt · English</span></div>
            <div><strong>UI/UX</strong><span>Sản phẩm & hệ thống</span></div>
            <div><strong>2D</strong><span>Mỹ thuật game & minh họa</span></div>
          </div>
        </div>

        <a className="pill-link reveal" href="#work" data-cursor="XEM">
          <span>Dự án nổi bật<small>Xem các dự án</small></span><b>›</b>
        </a>
      </section>

      <section className="mission" id="mission">
        <div className="mission-head reveal">
          <div>
            <h2>Sứ mệnh</h2>
          </div>
          <p>MAKE THE EVERYDAY<br /><em>FEEL LESS ORDINARY.</em></p>
        </div>

        <div className="mission-body">
          <div className="mission-figure mission-figure-original reveal">
            <div className="mission-character-rig" role="img" aria-label="Nhân vật kiếm sĩ do Huy Hoàng minh họa">
              <img className="mission-rig-base" src="/mission-character-rig-base.png" alt="" />
              {(["left-hand", "sword-arm", "left-leg", "right-leg"] as const).map((part) => (
                <span className={`mission-rig-part mission-rig-part-${part}`} key={part}>
                  <img className="mission-rig-cover" src={`/mission-rig-${part}-cover.png`} alt="" />
                  <img className="mission-rig-moving" src={`/mission-rig-${part}.png`} alt="" />
                </span>
              ))}
            </div>
            <span className="mission-character-label">NHÂN VẬT 01 / 2026</span>
          </div>
          <div className="mission-copy reveal">
            <p>
              Tôi tin rằng một sản phẩm số tốt phải dễ hiểu, hữu ích và có đủ cá tính
              để người dùng muốn quay lại.
            </p>
            <p>
              Nền tảng 2D Art giúp tôi tạo ra giao diện không chỉ dễ sử dụng mà còn có
              thế giới hình ảnh nhất quán, giàu cảm xúc và dễ ghi nhớ.
            </p>
          </div>
        </div>

        <span className="mission-shape mission-shape-one" aria-hidden="true" />
        <span className="mission-shape mission-shape-two" aria-hidden="true" />
        <span className="mission-shape mission-shape-three" aria-hidden="true" />
      </section>

      <section className="work paper-noise" id="work">
        <div className="section-heading section-heading-dark reveal">
          <span className="heading-star">✦</span>
          <div>
            <h2>Selected Projects</h2>
            <p>Những sản phẩm tiêu biểu</p>
          </div>
        </div>

        <p className="work-intro reveal">
          SELECTED PROJECTS.<br /><mark>CREATED WITH PURPOSE.</mark>
        </p>

        <div className="work-list">
          {featuredProjects.map((project) => {
            const visual = project.title === "MOOD" ? (
              <div className="work-visual mood-work-visual">
                <MoodCardCover />
                <span className="work-index">{project.number}</span>
                <span className="work-stamp">{project.stamp}</span>
              </div>
            ) : project.title === "AURORADOT" ? (
              <div className="work-visual auroradot-work-visual">
                <AuroradotCardCover />
                <span className="work-index">{project.number}</span>
                <span className="work-stamp">{project.stamp}</span>
              </div>
            ) : project.title === "ELIHIGH KIDS" ? (
              <div className="work-visual elihigh-work-visual">
                <img
                  className="elihigh-work-cover"
                  src="/projects/drive-curated/elihigh-kids/behance-cover.jpg"
                  alt="Ảnh đại diện dự án ELIHIGH KIDS"
                />
                <span className="work-index">{project.number}</span>
              </div>
            ) : (
              <div className="work-visual" style={{ backgroundImage: `url("${project.image}")` }}>
                <div className="work-visual-grid" />
                <span className="work-index">{project.number}</span>
                <span className="work-stamp">{project.stamp}</span>
                <span className="work-letter">{project.title.charAt(0)}</span>
                <span className="work-orbit" />
                <span className="work-dot" />
              </div>
            );

            return (
            <article
              className="work-card reveal"
              key={project.title}
            >
              {project.href ? (
                <a
                  aria-label={`Mở dự án ${project.title}`}
                  className="work-visual-link"
                  data-cursor="XEM DỰ ÁN"
                  href={project.href}
                  rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                >
                  {visual}
                </a>
              ) : visual}
              <div className="work-info">
                <span>{project.number}</span>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.type}</p>
                </div>
                <p>{project.description}</p>
                <b>
                  {project.href ? (
                    <a
                      aria-label={`Mở dự án ${project.title}`}
                      href={project.href}
                      rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                      target={project.href.startsWith("http") ? "_blank" : undefined}
                    >
                      ↗
                    </a>
                  ) : "•"}
                </b>
              </div>
            </article>
            );
          })}
        </div>

        <div className="home-project-gallery reveal">
          <div className="home-project-gallery-heading">
            <div>
              <span>MORE WORK / {String(archiveProjects.length).padStart(2, "0")}</span>
              <h3>Browse the<br /><em>visual archive.</em></h3>
            </div>
            <p>
              Xem nhanh dự án ngay trên homepage. Chỉ những dự án có case study hoàn chỉnh mới dẫn
              sang nội dung chuyên sâu.
            </p>
          </div>

          <div className="project-gallery-grid">
            {archiveProjects.slice(0, 6).map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>

          <a className="home-project-more" data-cursor="XEM THÊM" href="/projects">
            <span>
              Xem toàn bộ dự án
              <small>Kho lưu trữ được thiết kế để mở rộng lên 100+ dự án</small>
            </span>
            <b>{String(allProjects.length).padStart(2, "0")} PROJECTS&nbsp;&nbsp;→</b>
          </a>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="experience-intro reveal">
          <div>
            <span>04 / EXPERIENCE</span>
            <h2>Experience through<br /><em>products & worlds.</em></h2>
          </div>
          <p>Hành trình thiết kế giao diện, minh họa và mỹ thuật game 2D cùng các đội ngũ quốc tế.</p>
        </div>
        <div className="experience-list">
          {experiences.map(([period, company, role, location]) => (
            <div className="experience-row reveal" key={company}>
              <span>{period}</span>
              <h3>{company}</h3>
              <p>{role}</p>
              <small>{location}</small>
            </div>
          ))}
        </div>
        <div className="skill-strip reveal" aria-label="Kỹ năng và công cụ">
          <div className="skill-track" style={{ animationDuration: "112s" }}>
            {Array.from({ length: 8 }, (_, group) => (
              <div className="skill-group" aria-hidden={group !== 0} key={group}>
                {["FIGMA", "PHOTOSHOP", "ILLUSTRATOR", "PROCREATE", "AFTER EFFECTS", "DESIGN SYSTEM"].map((skill) => (
                  <span key={`${group}-${skill}`}>{skill}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="education" id="education">
        <div className="education-intro reveal">
          <span>05 / EDUCATION & TRAINING</span>
          <h2>Learning to<br /><em>keep moving forward.</em></h2>
          <p>Từ thiết kế đồ họa, ký họa và minh họa số đến thiết kế sản phẩm UI/UX chuyên sâu.</p>
        </div>
        <div className="education-grid">
          {education.map(([period, school, major], index) => (
            <article className="education-card reveal" key={school}>
              <span>{String(index + 1).padStart(2, "0")} / {period}</span>
              <h3>{school}</h3>
              <p>{major}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-intro reveal">
          <h2>Four ways to<br />shape an experience.</h2>
          <p>
            Kết hợp tư duy sản phẩm và nghệ thuật thị giác để xây dựng trải nghiệm
            rõ ràng, nhất quán và giàu cá tính.
          </p>
        </div>

        <div className="service-list">
          {services.map(([number, title, copy, skills]) => (
            <div className="service-row reveal" data-cursor="SKILL" key={number}>
              <div className="service-layers" aria-hidden="true">
                <span /><span /><span /><span />
              </div>
              <div className="service-content">
                <span>{number}</span>
                <div className="service-title">
                  <h3>{title}</h3>
                  <ul className="service-skills" aria-label={`Kỹ năng ${title}`}>
                    {skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </div>
                <p>{copy}</p>
                <b>+</b>
              </div>
            </div>
          ))}
        </div>

        <a className="pill-link service-contact reveal" href="#contact" data-cursor="CHÀO">
          <span>Start a project<small>Cùng nhau trò chuyện</small></span><b>›</b>
        </a>
      </section>

      <section className="contact paper-noise" id="contact">
        <div className="contact-shape contact-shape-one" aria-hidden="true" />
        <div className="contact-shape contact-shape-two" aria-hidden="true" />
        <div className="contact-main reveal">
          <p>Have something in mind?</p>
          <h2>LET&apos;S CREATE<br /><span>SOMETHING</span><br />MEMORABLE.</h2>
          <a className="pill-link contact-link" href="mailto:hoangbh511999@gmail.com" data-cursor="GỬI">
            <span>Start a conversation<small>Gửi lời chào</small></span><b>↗</b>
          </a>
          <div className="social-links">
            <a href="https://www.behance.net/bapluoclol34a6" target="_blank" rel="noreferrer">Behance ↗</a>
            <a href="https://www.artstation.com/kidon" target="_blank" rel="noreferrer">ArtStation ↗</a>
            <a href="mailto:hoangbh511999@gmail.com">Email ↗</a>
          </div>
        </div>
        <footer>
          <a href="#top">Về đầu trang ↑</a>
          <span>Huy Hoàng © 2026</span>
          <span>UI/UX Designer · 2D Artist · Vietnam</span>
        </footer>
      </section>

    </main>
  );
}

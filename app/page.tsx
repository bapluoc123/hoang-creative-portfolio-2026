"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "PULSE",
    type: "Digital product · 2026",
    description:
      "Product strategy, interface and motion for a calmer way to understand money.",
    className: "project-pulse",
    stamp: "PRODUCT",
  },
  {
    number: "02",
    title: "ROOM 02",
    type: "Culture platform · 2025",
    description:
      "An editorial identity and digital home built for independent artists.",
    className: "project-room",
    stamp: "CULTURE",
  },
  {
    number: "03",
    title: "HATO",
    type: "Brand identity · 2025",
    description:
      "A bold, joyful identity for a small coffee roaster with a big point of view.",
    className: "project-hato",
    stamp: "IDENTITY",
  },
];

const services = [
  ["01", "Creative direction", "Ý tưởng, định hướng hình ảnh và một hệ thống đủ khác biệt."],
  ["02", "Web design", "Website giàu cá tính, rõ ràng và luôn đặt trải nghiệm lên trước."],
  ["03", "Creative development", "Chuyển thiết kế thành trải nghiệm mượt mà trên mọi màn hình."],
  ["04", "Brand identity", "Nhận diện linh hoạt, nhất quán và có khả năng được ghi nhớ."],
];

function CreatorFigure({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "creator-figure is-compact" : "creator-figure"}>
      <span className="figure-aura" />
      <div className="figure-photo-frame">
        <img
          className="figure-photo"
          src="/hoang-character-transparent-v5.png"
          alt={compact ? "Illustrated character of Hoang in motion" : "Hoang, independent creative developer, illustrated as a character in motion"}
        />
      </div>
      <span className="figure-photo-note">CHARACTER 01 / 2026</span>
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

    const onPointerMove = (event: PointerEvent) => {
      cursor?.style.setProperty(
        "transform",
        `translate3d(${event.clientX}px, ${event.clientY}px, 0)`,
      );

      if (hero) {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;
        hero.style.setProperty("--mx", `${x}`);
        hero.style.setProperty("--my", `${y}`);
      }
    };

    const onScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      const value = available > 0 ? window.scrollY / available : 0;
      progress?.style.setProperty("transform", `scaleX(${value})`);
      setScrolled(window.scrollY > 560);
    };

    const hoverTargets = document.querySelectorAll<HTMLElement>(
      "a, button, .work-card, .service-row",
    );
    const onEnter = (event: Event) => {
      cursor?.classList.add("is-active");
      const label = (event.currentTarget as HTMLElement).dataset.cursor;
      if (cursorLabel) cursorLabel.textContent = label ?? "";
    };
    const onLeave = () => {
      cursor?.classList.remove("is-active");
      if (cursorLabel) cursorLabel.textContent = "";
    };
    hoverTargets.forEach((element) => {
      element.addEventListener("pointerenter", onEnter);
      element.addEventListener("pointerleave", onLeave);
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

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    onScroll();

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
      hoverTargets.forEach((element) => {
        element.removeEventListener("pointerenter", onEnter);
        element.removeEventListener("pointerleave", onLeave);
      });
      observer.disconnect();
      root.style.removeProperty("--pointer-x");
      root.style.removeProperty("--pointer-y");
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="intro" aria-hidden="true">
        <div className="intro-mark">H<span>+</span></div>
        <p>MAKING IDEAS MOVE</p>
      </div>
      <div className="cursor" aria-hidden="true"><span className="cursor-label" /></div>
      <div className="scroll-progress" aria-hidden="true" />

      <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
        <a className="brand" href="#top" aria-label="Hoang — về đầu trang" onClick={closeMenu}>
          <span className="brand-mark">H+</span>
          <span className="brand-copy">HOANG<br /><small>CREATIVE DEVELOPER</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Điều hướng chính">
          <a href="#top">Home<small>Trang chủ</small></a>
          <a href="#about">About<small>Giới thiệu</small></a>
          <a href="#work">Work<small>Dự án</small></a>
          <a href="#services">Services<small>Dịch vụ</small></a>
          <a href="#contact">Contact<small>Liên hệ</small></a>
        </nav>

        <button
          className={menuOpen ? "menu-toggle is-open" : "menu-toggle"}
          type="button"
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <b>+</b>
        </button>
      </header>

      <div className={menuOpen ? "menu-panel is-open" : "menu-panel"} aria-hidden={!menuOpen}>
        <p>Navigation / Điều hướng</p>
        <nav>
          <a href="#top" onClick={closeMenu}><span>01</span>Home</a>
          <a href="#about" onClick={closeMenu}><span>02</span>About</a>
          <a href="#work" onClick={closeMenu}><span>03</span>Work</a>
          <a href="#services" onClick={closeMenu}><span>04</span>Services</a>
          <a href="#contact" onClick={closeMenu}><span>05</span>Contact</a>
        </nav>
      </div>

      <section className="hero paper-noise" id="top">
        <div className="hero-ghost" aria-hidden="true">HOANG×PORTFOLIO</div>
        <div className="hero-meta">CREATIVE DEVELOPER<br />BASED IN VIETNAM</div>
        <div className="hero-kicker">Turning ideas into character.</div>

        <div className="hero-figure-wrap">
          <CreatorFigure />
          <span className="figure-caption">DIGITAL<br />MAKER</span>
        </div>

        <h1 className="hero-title" aria-label="Ideas built to move">
          <span className="hero-word hero-word-one">IDEAS</span>
          <span className="hero-word hero-word-two">BUILT</span>
          <span className="hero-word hero-word-three">TO MOVE<span>.</span></span>
        </h1>

        <p className="hero-statement">
          <span>I design</span> and build expressive digital experiences<br />
          <span>for people</span> who want to be remembered.
        </p>

        <span className="hero-spark spark-yellow" aria-hidden="true">✦</span>
        <span className="hero-spark spark-pink" aria-hidden="true">●</span>
        <span className="hero-spark spark-cyan" aria-hidden="true">+</span>

        <div className="scroll-cue" aria-hidden="true"><span>Scroll</span><i /></div>
      </section>

      <section className="about paper-noise" id="about">
        <div className="slant-top" aria-hidden="true" />
        <div className="section-heading reveal">
          <span className="heading-star">✦</span>
          <div>
            <h2>Who am I?</h2>
            <p>Hoang là ai?</p>
          </div>
        </div>

        <div className="sketch-wall" aria-hidden="true">
          {[0, 1, 2].map((item) => (
            <div className={`sketch-person sketch-person-${item + 1}`} key={item}>
              <span /><i /><b />
            </div>
          ))}
        </div>

        <div className="about-copy reveal">
          <p className="about-lead">
            Hoang is an <mark>INDEPENDENT CREATIVE DEVELOPER</mark> working where
            <mark> DESIGN MEETS CODE.</mark>
          </p>
          <div className="about-details">
            <p>
              Mình biến những ý tưởng phức tạp thành trải nghiệm số rõ ràng, giàu cá tính
              và có khả năng tạo cảm xúc ngay từ lần chạm đầu tiên.
            </p>
            <p>
              Từ concept, visual direction đến animation và development — mỗi chi tiết
              đều được xây dựng để phục vụ một câu chuyện chung.
            </p>
          </div>
        </div>

        <a className="pill-link reveal" href="#work" data-cursor="VIEW">
          <span>Selected work<small>Xem dự án</small></span><b>›</b>
        </a>
      </section>

      <section className="mission" id="mission">
        <div className="mission-head reveal">
          <div>
            <h2>Mission</h2>
            <span>Sứ mệnh cá nhân</span>
          </div>
          <p>MAKE THE EVERYDAY<br /><em>FEEL LESS ORDINARY.</em></p>
        </div>

        <div className="mission-body">
          <div className="mission-figure reveal">
            <CreatorFigure compact />
          </div>
          <div className="mission-copy reveal">
            <p>
              Tôi tin rằng một website tốt không chỉ truyền đạt thông tin. Nó cần có
              nhịp điệu, thái độ và một “nhân vật” mà người xem có thể nhớ lại.
            </p>
            <p>
              Vì vậy, tôi kết hợp thiết kế, chuyển động và công nghệ để tạo ra những
              trải nghiệm vừa hữu ích, vừa có cảm xúc.
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
            <h2>Selected work</h2>
            <p>Một vài dự án tiêu biểu</p>
          </div>
        </div>

        <p className="work-intro reveal">
          THREE PROJECTS.<br /><mark>THREE DISTINCT WORLDS.</mark>
        </p>

        <div className="work-list">
          {projects.map((project) => (
            <article className="work-card reveal" data-cursor="OPEN" key={project.title}>
              <div className={`work-visual ${project.className}`}>
                <div className="work-visual-grid" />
                <span className="work-index">{project.number}</span>
                <span className="work-stamp">{project.stamp}</span>
                <span className="work-letter">{project.title.charAt(0)}</span>
                <span className="work-orbit" />
                <span className="work-dot" />
              </div>
              <div className="work-info">
                <span>{project.number}</span>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.type}</p>
                </div>
                <p>{project.description}</p>
                <b>↗</b>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-intro reveal">
          <h2>Four ways to<br />make ideas real.</h2>
          <p>
            Không dừng ở ý tưởng — mình đưa dự án đi từ định hướng đầu tiên đến trải
            nghiệm hoàn chỉnh.
          </p>
        </div>

        <div className="service-list">
          {services.map(([number, title, copy]) => (
            <div className="service-row reveal" data-cursor="MORE" key={number}>
              <div className="service-layers" aria-hidden="true">
                <span /><span /><span /><span />
              </div>
              <div className="service-content">
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <b>+</b>
              </div>
            </div>
          ))}
        </div>

        <a className="pill-link service-contact reveal" href="#contact" data-cursor="HELLO">
          <span>Start a project<small>Bắt đầu dự án</small></span><b>›</b>
        </a>
      </section>

      <section className="contact paper-noise" id="contact">
        <div className="contact-shape contact-shape-one" aria-hidden="true" />
        <div className="contact-shape contact-shape-two" aria-hidden="true" />
        <div className="contact-main reveal">
          <p>Have something in mind?</p>
          <h2>LET’S CREATE<br /><span>YOUR NEXT</span><br />CHARACTER.</h2>
          <a className="pill-link contact-link" href="mailto:hello@yourdomain.com" data-cursor="SEND">
            <span>Start a conversation<small>Gửi lời chào</small></span><b>↗</b>
          </a>
        </div>
        <footer>
          <a href="#top">Back to top ↑</a>
          <span>Hoang © 2026</span>
          <span>Creative developer · Vietnam</span>
        </footer>
      </section>
    </main>
  );
}

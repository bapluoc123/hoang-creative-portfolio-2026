import type { Metadata } from "next";
import Image from "../../unoptimized-image";
import Link from "next/link";
import { CustomCursor } from "../../custom-cursor";

export const metadata: Metadata = {
  title: "AURORADOT — Huy Hoàng",
  description:
    "AURORADOT là hệ sinh thái chăm sóc cảm xúc kết nối trẻ em, phụ huynh và giáo viên.",
};

const uiIllustrationElements = [
  {
    src: "/projects/auroradot/ui-element-emotional-identity.png",
    label: "EMOTIONAL IDENTITY",
  },
  {
    src: "/projects/auroradot/ui-element-resilience.png",
    label: "CONFIDENCE & RESILIENCE",
  },
  {
    src: "/projects/auroradot/ui-element-social-comfort.png",
    label: "SOCIAL COMFORT",
  },
  {
    src: "/projects/auroradot/ui-element-sensory-patterns.png",
    label: "SENSORY PATTERNS",
  },
  {
    src: "/projects/auroradot/ui-element-emotional-triggers.png",
    label: "EMOTIONAL TRIGGERS",
  },
  {
    src: "/projects/auroradot/ui-element-growth.png",
    label: "GROWTH OVER TIME",
  },
  {
    src: "/projects/auroradot/ui-element-07-cloud.png",
    label: "CALM CLOUD",
  },
  {
    src: "/projects/auroradot/ui-element-08-tornado.png",
    label: "RESTLESS ENERGY",
  },
  {
    src: "/projects/auroradot/ui-element-09-sun.png",
    label: "FRUSTRATED SUN",
  },
  {
    src: "/projects/auroradot/ui-element-10-star.png",
    label: "LOW-ENERGY STAR",
  },
  {
    src: "/projects/auroradot/ui-element-11-moon.png",
    label: "SAD MOON",
  },
  {
    src: "/projects/auroradot/ui-element-12-flower-face.png",
    label: "JOYFUL FLOWER",
  },
  {
    src: "/projects/auroradot/ui-element-13-bud.png",
    label: "EMERGING BUD",
  },
  {
    src: "/projects/auroradot/ui-element-14-golden-moon.png",
    label: "QUIET NIGHT",
  },
  {
    src: "/projects/auroradot/ui-element-15-daisy.png",
    label: "OPENNESS",
  },
  {
    src: "/projects/auroradot/ui-element-16-home.svg",
    label: "SAFE HOME",
  },
  {
    src: "/projects/auroradot/ui-element-17-qr.svg",
    label: "CONNECTED CARE",
  },
  {
    src: "/projects/auroradot/ui-element-18-child.svg",
    label: "CHILD PROFILE",
  },
  {
    src: "/projects/auroradot/ui-element-19-bell.svg",
    label: "GENTLE REMINDER",
  },
  {
    src: "/projects/auroradot/ui-element-20-edit.svg",
    label: "MOMENT NOTE",
  },
];

const uxGalleryScreens = [
  { src: "/projects/auroradot/figma-parent-home.png", label: "Parent home", group: "PARENT" },
  { src: "/projects/auroradot/figma-parent-understanding.png", label: "Understanding Aurora", group: "PARENT" },
  { src: "/projects/auroradot/figma-teacher-home.png", label: "Teacher home", group: "TEACHER" },
  { src: "/projects/auroradot/figma-kid-my-children.png", label: "Child’s Mode", group: "KID" },
  { src: "/projects/auroradot/figma-kid-activity-entry.png", label: "Activity insight", group: "KID" },
  { src: "/projects/auroradot/figma-kid-get-to-know.png", label: "Get to know your child", group: "KID" },
  { src: "/projects/auroradot/figma-kid-discover.png", label: "What you’ll discover", group: "KID" },
  { src: "/projects/auroradot/ui-08-launch.png", label: "App launch", group: "ONBOARDING" },
  { src: "/projects/auroradot/ui-09-welcome.png", label: "Welcome to Auroradot", group: "ONBOARDING" },
  { src: "/projects/auroradot/ui-10-choose-mode.png", label: "Choose your mode", group: "ONBOARDING" },
  { src: "/projects/auroradot/ui-11-create-account.png", label: "Create account", group: "ONBOARDING" },
  { src: "/projects/auroradot/ui-12-parent-profile.png", label: "Parent profile", group: "PARENT" },
  { src: "/projects/auroradot/ui-13-teacher-profile.png", label: "Teacher profile", group: "TEACHER" },
  { src: "/projects/auroradot/ui-14-natural-moments.png", label: "Natural moments", group: "DISCOVERY" },
  { src: "/projects/auroradot/ui-15-privacy.png", label: "Privacy promise", group: "DISCOVERY" },
  { src: "/projects/auroradot/ui-16-emotion-discovery.png", label: "Begin discovery", group: "DISCOVERY" },
  { src: "/projects/auroradot/ui-17-discovery-progress.png", label: "Discovery progress", group: "DISCOVERY" },
  { src: "/projects/auroradot/ui-18-moment-feel.png", label: "How did it feel?", group: "MOMENT LOG" },
  { src: "/projects/auroradot/ui-19-moment-context.png", label: "What was happening?", group: "MOMENT LOG" },
  { src: "/projects/auroradot/ui-20-class-observe.png", label: "Class observation", group: "TEACHER" },
];

export default function AuroradotPage() {
  return (
    <main className="aurora-case">
      <CustomCursor />

      <header className="fix-case-nav aurora-nav">
        <Link className="fix-case-brand" href="/" aria-label="Về trang chủ">
          H+
        </Link>
        <span>03 / PRODUCT CASE STUDY</span>
        <Link href="/projects">← TẤT CẢ DỰ ÁN</Link>
      </header>

      <section className="aurora-hero">
        <div className="aurora-hero-copy">
          <span>EDTECH · UX/UI DESIGN · ILLUSTRATION · 2026</span>
          <h1>
            AURORA
            <em>DOT.</em>
          </h1>
          <p>
            Một hệ sinh thái chăm sóc cảm xúc giúp gia đình và nhà trường nhìn thấy
            những thay đổi nhỏ, hiểu chúng đúng hơn và cùng trẻ phản hồi bằng sự dịu dàng.
          </p>
        </div>

        <div className="aurora-hero-meta">
          <div><small>VAI TRÒ</small><strong>UX/UI · Illustration</strong></div>
          <div><small>PHẠM VI</small><strong>Product · Design system</strong></div>
          <div><small>HỆ SINH THÁI</small><strong>Parent · Teacher · Kid</strong></div>
        </div>

        <div className="aurora-hero-stage" aria-label="Các màn hình nổi bật của AURORADOT">
          <span className="aurora-orbit aurora-orbit-one" />
          <span className="aurora-orbit aurora-orbit-two" />
          <div className="aurora-stage-word" aria-hidden="true">GROW</div>
          <figure className="aurora-stage-phone aurora-stage-phone-left">
            <Image
              alt="Trang chủ dành cho phụ huynh trong AURORADOT"
              fill
              priority
              sizes="(max-width: 760px) 48vw, 23vw"
              src="/projects/auroradot/figma-parent-home.png"
            />
          </figure>
          <figure className="aurora-stage-phone aurora-stage-phone-center">
            <Image
              alt="Trang chủ dành cho giáo viên trong AURORADOT"
              fill
              priority
              sizes="(max-width: 760px) 52vw, 24vw"
              src="/projects/auroradot/figma-teacher-home.png"
            />
          </figure>
          <figure className="aurora-stage-phone aurora-stage-phone-right">
            <Image
              alt="Màn hình Understanding Aurora dành cho phụ huynh"
              fill
              priority
              sizes="(max-width: 760px) 48vw, 23vw"
              src="/projects/auroradot/figma-parent-understanding.png"
            />
          </figure>
          <div className="aurora-stage-caption">
            <span>ONE SHARED LANGUAGE</span>
            <span>THREE CONNECTED EXPERIENCES</span>
          </div>
        </div>
      </section>

      <section className="aurora-manifesto">
        <span>01 / THE IDEA</span>
        <p>
          Chăm sóc cảm xúc không bắt đầu từ dữ liệu lớn.
          <strong> Nó bắt đầu từ việc nhận ra một tín hiệu nhỏ đúng lúc.</strong>
        </p>
      </section>

      <section className="aurora-overview">
        <div className="aurora-section-heading">
          <span>02 / PRODUCT OVERVIEW</span>
          <h2>One emotional language.<br /><em>Three points of care.</em></h2>
        </div>
        <div className="aurora-audiences">
          <article>
            <span>01</span>
            <h3>PARENT</h3>
            <p>Nhìn thấy xu hướng, điều đang giúp trẻ và những gợi ý có thể thử tại nhà.</p>
          </article>
          <article>
            <span>02</span>
            <h3>TEACHER</h3>
            <p>Ghi nhận quan sát, hiểu nhịp lớp và hỗ trợ từng học sinh đúng thời điểm.</p>
          </article>
          <article>
            <span>03</span>
            <h3>KID</h3>
            <p>Một chế độ riêng để trẻ tham gia hoạt động cảm xúc trong không gian an toàn và dễ hiểu.</p>
          </article>
        </div>
      </section>

      <section className="aurora-chapter aurora-chapter-ux">
        <div>
          <span>CHAPTER 01</span>
          <p>PRODUCT EXPERIENCE</p>
        </div>
        <h2>UX<span>/</span>UI</h2>
        <p>Ba vai trò, ba mức thông tin — cùng hướng về một ngôn ngữ chăm sóc nhất quán.</p>
      </section>

      <section className="aurora-flow aurora-flow-parent">
        <div className="aurora-flow-copy">
          <span>UX / 01 — PARENT EXPERIENCE</span>
          <h2>From moments<br /><em>to understanding.</em></h2>
          <p>
            Trang chủ gom những hành động quan trọng vào một nhịp đọc yên tĩnh.
            Thay vì gắn nhãn cảm xúc, “Understanding Aurora” diễn giải điều đang được
            quan sát, điều có vẻ hữu ích và một bước nhỏ phụ huynh có thể thử.
          </p>
          <div className="aurora-keywords">
            <span>SHARED MOMENTS</span>
            <span>GENTLE INSIGHTS</span>
            <span>ACTIONABLE CARE</span>
          </div>
        </div>
        <div className="aurora-phone-pair aurora-parent-pair">
          <figure>
            <Image
              alt="Trang chủ dành cho phụ huynh"
              fill
              sizes="(max-width: 760px) 44vw, 28vw"
              src="/projects/auroradot/figma-parent-home.png"
            />
            <figcaption><span>01 / PARENT HOME</span><strong>Mọi điểm chạm trong một nơi</strong></figcaption>
          </figure>
          <figure>
            <Image
              alt="Màn hình Understanding Aurora"
              fill
              sizes="(max-width: 760px) 44vw, 28vw"
              src="/projects/auroradot/figma-parent-understanding.png"
            />
            <figcaption><span>02 / UNDERSTANDING</span><strong>Insight không biến thành phán xét</strong></figcaption>
          </figure>
        </div>
      </section>

      <section className="aurora-flow aurora-flow-teacher">
        <div className="aurora-teacher-showcase">
          <figure>
            <Image
              alt="Trang tổng quan dành cho giáo viên trong AURORADOT"
              fill
              sizes="(max-width: 760px) 76vw, 34vw"
              src="/projects/auroradot/figma-teacher-home.png"
            />
          </figure>
          <span>LIVE CLASS RHYTHM · OBSERVATION · SUPPORT</span>
        </div>
        <div className="aurora-flow-copy">
          <span>UX / 02 — TEACHER EXPERIENCE</span>
          <h2>See the class.<br /><em>Notice the child.</em></h2>
          <p>
            Giáo viên có thể xem nhanh insight của lớp, ghi nhận một quan sát,
            mở hồ sơ học sinh và theo dõi “Class Rhythm” mà không bị kéo vào một
            dashboard nặng dữ liệu.
          </p>
          <div className="aurora-keywords">
            <span>TEACHER INSIGHTS</span>
            <span>OBSERVE A CHILD</span>
            <span>CLASS RHYTHM</span>
          </div>
        </div>
      </section>

      <section className="aurora-kid">
        <div className="aurora-kid-heading">
          <span>UX / 03 — KID EXPERIENCE</span>
          <h2>A small world<br /><em>made for them.</em></h2>
          <p>
            Kid Experience bắt đầu từ hồ sơ “Child’s Mode”, giúp phụ huynh thiết lập
            bối cảnh của trẻ và mở hoạt động phù hợp. Hình ảnh mềm, thao tác đơn giản
            và dữ liệu hoạt động được chuyển lại thành insight dễ hiểu.
          </p>
        </div>

        <div className="aurora-kid-gallery">
          <figure className="aurora-kid-card aurora-kid-card-primary">
            <Image
              alt="Màn hình Child’s Mode trong file AURORADOT mới"
              fill
              sizes="(max-width: 760px) 78vw, 30vw"
              src="/projects/auroradot/figma-kid-my-children.png"
            />
            <figcaption><span>01 / CHILD’S MODE</span><strong>Chọn đúng hồ sơ và bối cảnh của trẻ</strong></figcaption>
          </figure>
          <figure className="aurora-kid-card">
            <Image
              alt="Màn hình Get To Know Your Child"
              fill
              sizes="(max-width: 760px) 78vw, 24vw"
              src="/projects/auroradot/figma-kid-get-to-know.png"
            />
            <figcaption><span>02 / SETUP</span><strong>Một bước bắt đầu thật nhẹ</strong></figcaption>
          </figure>
          <figure className="aurora-kid-card">
            <Image
              alt="Màn hình Understand Your Child’s Emotional World"
              fill
              sizes="(max-width: 760px) 78vw, 24vw"
              src="/projects/auroradot/figma-kid-discover.png"
            />
            <figcaption><span>03 / DISCOVERY</span><strong>Giải thích giá trị trước khi thu thập dữ liệu</strong></figcaption>
          </figure>
          <figure className="aurora-kid-card aurora-kid-card-primary">
            <Image
              alt="Bảng Child Mode Activity trong trang phụ huynh"
              fill
              sizes="(max-width: 760px) 78vw, 30vw"
              src="/projects/auroradot/figma-kid-activity-entry.png"
            />
            <figcaption><span>04 / ACTIVITY INSIGHT</span><strong>Biến hoạt động thành tín hiệu có thể hiểu</strong></figcaption>
          </figure>
        </div>
      </section>

      <section className="aurora-ux-atlas">
        <div className="aurora-atlas-heading">
          <div>
            <span>UX / 04 — SCREEN ATLAS</span>
            <strong>20</strong>
          </div>
          <h2>A complete journey,<br /><em>screen by screen.</em></h2>
          <p>
            Hai mươi màn hình được chọn trực tiếp từ sản phẩm, trải từ onboarding đến
            những khoảnh khắc quan sát dành cho phụ huynh, giáo viên và trẻ em.
          </p>
        </div>
        <div className="aurora-screen-grid">
          {uxGalleryScreens.map((screen, index) => (
            <figure className="aurora-screen-card" key={screen.src}>
              <div>
                <Image
                  alt={`${screen.label} — màn hình ${index + 1} của AURORADOT`}
                  fill
                  sizes="(max-width: 760px) 48vw, 18vw"
                  src={screen.src}
                />
              </div>
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")} / {screen.group}</span>
                <strong>{screen.label}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="aurora-chapter aurora-chapter-illustration">
        <div>
          <span>CHAPTER 02</span>
          <p>VISUAL STORYTELLING</p>
        </div>
        <h2>ILLUSTRATION</h2>
        <p>Những element màu nước sống ngay trong UI, dẫn nhịp nội dung mà không biến giao diện thành một poster trang trí.</p>
      </section>

      <section className="aurora-system">
        <div className="aurora-section-heading">
          <span>ILL / 01 — VISUAL SYSTEM</span>
          <h2>Soft enough to feel safe.<br /><em>Clear enough to act.</em></h2>
        </div>
        <div className="aurora-system-grid">
          <article className="aurora-palette">
            <span>COLOR LANGUAGE</span>
            <div>
              <i style={{ background: "#fffdf5" }} />
              <i style={{ background: "#543b34" }} />
              <i style={{ background: "#699057" }} />
              <i style={{ background: "#e8d8cd" }} />
              <i style={{ background: "#e7b849" }} />
            </div>
            <p>Nền kem tạo sự tĩnh; nâu giữ độ ấm; xanh lá và màu hoa làm dấu hiệu cho tiến trình, hành động và hy vọng.</p>
          </article>
          <article>
            <span>ILLUSTRATION</span>
            <strong className="aurora-serif">Quiet nature</strong>
            <strong className="aurora-sans">CLEAR INTERFACE</strong>
            <p>Hoa, lá và nét vẽ tay làm mềm thông tin mà không tranh chấp sự chú ý với nội dung chính.</p>
          </article>
          <article>
            <span>INTERACTION</span>
            <strong>44 px</strong>
            <p>Kích thước chạm ổn định, nhãn dễ đọc và mỗi màn hình chỉ ưu tiên một quyết định chính.</p>
          </article>
        </div>
      </section>

      <section className="aurora-illustration-showcase">
        <div className="aurora-illustration-intro">
          <span>ILL / 02 — UI ELEMENTS</span>
          <h2>Drawn for the<br /><em>interface.</em></h2>
          <p>
            Mỗi hình vẽ gắn với một ý nghĩa cụ thể trong hành trình cảm xúc.
            Cùng nét cọ và độ trong suốt được giữ xuyên suốt để illustration hỗ trợ
            việc đọc, thay vì cạnh tranh với thông tin.
          </p>
        </div>

        <div className="aurora-ui-art-stage">
          <div className="aurora-ui-art-word" aria-hidden="true">GENTLE</div>
          {uiIllustrationElements.slice(0, 6).map((element, index) => (
            <figure className={`aurora-ui-art-piece aurora-ui-art-piece-${index + 1}`} key={element.src}>
              <Image
                alt={`${element.label} — element minh họa đang dùng trong UI AURORADOT`}
                fill
                sizes="(max-width: 760px) 46vw, 22vw"
                src={element.src}
              />
              <figcaption>{element.label}</figcaption>
            </figure>
          ))}
          <figure className="aurora-ui-source-screen">
            <Image
              alt="Màn hình nguồn cho hệ illustration AURORADOT"
              fill
              sizes="(max-width: 760px) 70vw, 25vw"
              src="/projects/auroradot/figma-kid-discover.png"
            />
            <figcaption>ELEMENTS IN CONTEXT · FIGMA UI</figcaption>
          </figure>
        </div>

        <div className="aurora-element-atlas">
          <div className="aurora-element-atlas-heading">
            <span>ILL / 03 — ELEMENT ATLAS</span>
            <strong>20 ELEMENTS FROM THE UI</strong>
          </div>
          <div className="aurora-element-grid">
            {uiIllustrationElements.map((element, index) => (
              <figure key={`atlas-${element.src}`}>
                <div>
                  <Image
                    alt={`${element.label} — illustration element ${index + 1}`}
                    fill
                    sizes="(max-width: 760px) 44vw, 16vw"
                    src={element.src}
                  />
                </div>
                <figcaption>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{element.label}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="aurora-outcome">
        <span>07 / OUTCOME</span>
        <h2>Care becomes visible<br /><em>without becoming clinical.</em></h2>
        <div>
          <p>
            AURORADOT kết nối ba trải nghiệm bằng cùng một ngôn ngữ cảm xúc,
            nhưng điều chỉnh lượng thông tin và giọng điệu cho đúng vai trò:
            trẻ có không gian tham gia, phụ huynh nhìn thấy bức tranh phát triển,
            còn giáo viên có thể ghi nhận và hành động.
          </p>
          <span className="aurora-outcome-note">FIGMA SOURCE · AURORADOT COPY</span>
        </div>
      </section>

      <section className="collection-next aurora-next">
        <span>PROJECT TIẾP THEO</span>
        <Link href="/projects/elihigh-kids">ELIHIGH KIDS<b>↗</b></Link>
      </section>

      <footer className="collection-footer aurora-footer">
        <span>HUY HOÀNG © 2026</span>
        <Link href="/projects">PROJECT ARCHIVE</Link>
      </footer>
    </main>
  );
}

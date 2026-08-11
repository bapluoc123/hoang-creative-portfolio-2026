import type { Metadata } from "next";
import Image from "../../unoptimized-image";
import Link from "next/link";
import { CustomCursor } from "../../custom-cursor";
import { BrandLogo } from "../../brand-logo";

export const metadata: Metadata = {
  title: "Mood — Better Daily — Huy Hoàng",
  description:
    "Case study ứng dụng chăm sóc sức khỏe tinh thần Mood — Better Daily, từ check-in cảm xúc đến bài tập điều hòa và nhật ký cá nhân.",
};

const journeyScreens = [
  {
    src: "/projects/mood/emotion.png",
    step: "01",
    label: "CHECK-IN",
    title: "Gọi tên cảm xúc",
    alt: "Màn hình chọn trạng thái vui vẻ trong ứng dụng Mood",
  },
  {
    src: "/projects/mood/survey.png",
    step: "02",
    label: "REFLECT",
    title: "Hiểu điều đang xảy ra",
    alt: "Màn hình khảo sát cảm xúc trong ứng dụng Mood",
  },
  {
    src: "/projects/mood/recommend.png",
    step: "03",
    label: "REGULATE",
    title: "Nhận gợi ý phù hợp",
    alt: "Màn hình đề xuất bài tập điều hòa cảm xúc trong ứng dụng Mood",
  },
  {
    src: "/projects/mood/calendar.png",
    step: "04",
    label: "RECORD",
    title: "Nhìn lại hành trình",
    alt: "Màn hình nhật ký và lịch theo dõi cảm xúc trong ứng dụng Mood",
  },
];

const featureScreens = [
  {
    src: "/projects/mood/home.png",
    eyebrow: "HOME / DAILY SUPPORT",
    title: "Một điểm bắt đầu nhẹ nhàng mỗi ngày",
    copy:
      "Trang chủ ưu tiên câu hỏi quan trọng nhất, mục tiêu trong tuần và các bài tập yêu thích. Người dùng không phải tìm kiếm quá nhiều trước khi nhận được hỗ trợ.",
    alt: "Trang chủ ứng dụng Mood với check-in cảm xúc và bài tập gợi ý",
  },
  {
    src: "/projects/mood/tools.png",
    eyebrow: "TOOLKIT / PERSONALIZED",
    title: "Công cụ thay đổi theo tâm trạng",
    copy:
      "Bài tập được nhóm theo nhu cầu như vận động, hít thở, kích hoạt giác quan và xử lý cảm xúc. Thời lượng ngắn giúp người dùng dễ bắt đầu ngay trong thời điểm khó khăn.",
    alt: "Thư viện công cụ điều hòa cảm xúc trong ứng dụng Mood",
  },
  {
    src: "/projects/mood/exercise.png",
    eyebrow: "EXERCISE / GUIDED",
    title: "Hướng dẫn từng bước, không gây áp lực",
    copy:
      "Nội dung được chia thành các bước nhỏ, dùng mascot để tạo cảm giác đồng hành. Khoảng trắng lớn và một hành động chính giúp người dùng tập trung vào hiện tại.",
    alt: "Bài tập Trọn vẹn cảm xúc trong ứng dụng Mood",
  },
];

export default function MoodPage() {
  return (
    <main className="mood-case">
      <CustomCursor />

      <header className="fix-case-nav mood-nav">
        <Link className="fix-case-brand" href="/" aria-label="Về trang chủ">
          <BrandLogo compact />
        </Link>
        <span>03 / PRODUCT CASE STUDY</span>
        <Link href="/projects">← TẤT CẢ DỰ ÁN</Link>
      </header>

      <section className="mood-hero">
        <div className="mood-hero-copy">
          <span>MENTAL WELLNESS · MOBILE PRODUCT · 2026</span>
          <h1>
            <span className="mood-better-word" aria-label="BETTER">
              {"BETTER".split("").map((letter, index) => (
                <span aria-hidden="true" key={`${letter}-${index}`}>{letter}</span>
              ))}
            </span>
            <em>MOOD.</em>
          </h1>
          <p>
            Một ứng dụng tự chăm sóc sức khỏe tinh thần giúp người dùng nhận diện cảm xúc,
            hiểu nguyên nhân và chọn một hành động nhỏ để cảm thấy tốt hơn.
          </p>
        </div>

        <div className="mood-hero-meta">
          <div><small>VAI TRÒ</small><strong>UX/UI Designer</strong></div>
          <div><small>PHẠM VI</small><strong>UX Flow · UI · Design System</strong></div>
          <div><small>NỀN TẢNG</small><strong>Mobile · iOS</strong></div>
        </div>

        <div className="mood-hero-stage project-new-hero-cover" aria-label="Ảnh bìa ứng dụng Mood">
          <Image alt="Mood — Better Daily mental wellness app" fill priority sizes="100vw" src="/projects/covers/mood.png" />
        </div>
      </section>

      <section className="mood-premise">
        <span>01 / THE PREMISE</span>
        <p>
          Chăm sóc tinh thần không nhất thiết bắt đầu bằng một bài đánh giá dài.
          <strong> Nó có thể bắt đầu bằng câu hỏi: “Hôm nay bạn cảm thấy thế nào?”</strong>
        </p>
      </section>

      <section className="mood-strategy">
        <div className="mood-section-heading">
          <span>02 / PRODUCT STRATEGY</span>
          <h2>From emotion<br /><em>to a small action.</em></h2>
        </div>

        <div className="mood-strategy-grid">
          <article>
            <span>01 / BÀI TOÁN</span>
            <h3>Quá nhiều công cụ mang giọng điệu lâm sàng.</h3>
            <p>
              Khi đang căng thẳng, người dùng cần được dẫn dắt nhẹ nhàng thay vì phải đọc
              nhiều thông tin hoặc tự quyết định từ một danh sách dài.
            </p>
          </article>
          <article>
            <span>02 / INSIGHT</span>
            <h3>Một lựa chọn nhỏ giúp giảm áp lực bắt đầu.</h3>
            <p>
              Mood dùng trạng thái, màu sắc và biểu cảm để biến check-in thành một thao tác
              trực quan, sau đó mới mở rộng sang câu hỏi và bài tập.
            </p>
          </article>
          <article>
            <span>03 / HƯỚNG GIẢI QUYẾT</span>
            <h3>Phản hồi đúng ngữ cảnh, vừa đủ để hành động.</h3>
            <p>
              Hệ thống kết nối cảm xúc hiện tại với survey ngắn, thư viện công cụ và nhật ký,
              tạo nên một vòng lặp chăm sóc có thể lặp lại mỗi ngày.
            </p>
          </article>
        </div>
      </section>

      <section className="mood-journey">
        <div className="mood-section-heading mood-section-heading-light">
          <span>03 / CORE JOURNEY</span>
          <h2>A calmer path,<br /><em>one step at a time.</em></h2>
          <p>
            Luồng chính không yêu cầu người dùng giải thích mọi thứ ngay lập tức. Mỗi bước chỉ
            đặt một câu hỏi, cung cấp một lựa chọn và giữ lại cảm giác tiến bộ rõ ràng.
          </p>
        </div>

        <div className="mood-journey-line" aria-hidden="true">
          <span>CHECK-IN</span><i>→</i><span>REFLECT</span><i>→</i><span>REGULATE</span><i>→</i><span>RECORD</span>
        </div>

        <div className="mood-journey-screens">
          {journeyScreens.map((screen) => (
            <figure key={screen.src}>
              <div>
                <Image alt={screen.alt} fill sizes="(max-width: 760px) 76vw, 23vw" src={screen.src} />
              </div>
              <figcaption>
                <span>{screen.step} / {screen.label}</span>
                <strong>{screen.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mood-features">
        <div className="mood-section-heading">
          <span>04 / KEY EXPERIENCES</span>
          <h2>Support that meets<br /><em>you where you are.</em></h2>
        </div>

        <div className="mood-feature-list">
          {featureScreens.map((screen, index) => (
            <article key={screen.src}>
              <div className="mood-feature-copy">
                <span>{String(index + 1).padStart(2, "0")} / {screen.eyebrow}</span>
                <h3>{screen.title}</h3>
                <p>{screen.copy}</p>
              </div>
              <figure>
                <Image alt={screen.alt} fill sizes="(max-width: 760px) 82vw, 32vw" src={screen.src} />
              </figure>
            </article>
          ))}
        </div>
      </section>

      <section className="mood-language">
        <div className="mood-section-heading mood-section-heading-light">
          <span>05 / VISUAL LANGUAGE</span>
          <h2>Emotion becomes<br /><em>a visual language.</em></h2>
        </div>

        <div className="mood-language-grid">
          <article className="mood-palette">
            <span>MOOD MAPPING</span>
            <div>
              <i style={{ background: "#ff9da3" }}><b>ANGER</b></i>
              <i style={{ background: "#ffd7aa" }}><b>ENERGY</b></i>
              <i style={{ background: "#ffe43b" }}><b>JOY</b></i>
              <i style={{ background: "#b8e5fb" }}><b>SADNESS</b></i>
              <i style={{ background: "#d8e0ea" }}><b>NEUTRAL</b></i>
            </div>
          </article>
          <article>
            <span>BRAND COLOR</span>
            <strong>#4086B7</strong>
            <p>Màu xanh tạo nhịp ổn định cho hành động chính và giữ hệ minh họa nhiều màu luôn cân bằng.</p>
          </article>
          <article>
            <span>VOICE & TYPE</span>
            <strong>Roboto</strong>
            <p>Ngôn ngữ trực tiếp, câu ngắn và phân cấp rõ giúp nội dung hỗ trợ luôn dễ đọc trong trạng thái căng thẳng.</p>
          </article>
        </div>

        <div className="mood-brand-lockup">
          <Image alt="Hệ thống logo Mood Better Daily" fill sizes="100vw" src="/projects/mood/logo-system.png" />
        </div>
      </section>

      <section className="mood-onboarding">
        <div>
          <span>06 / BRAND EXPERIENCE</span>
          <h2>Friendly,<br /><em>not childish.</em></h2>
          <p>
            Mascot và hình khối hữu cơ biến những chủ đề nhạy cảm thành một cuộc trò chuyện
            dễ tiếp cận. Minh họa tạo cảm giác đồng hành nhưng không cạnh tranh với nội dung chính.
          </p>
        </div>
        <div className="mood-onboarding-screens">
          <figure>
            <Image alt="Màn hình giới thiệu tâm trí thư thái" fill sizes="40vw" src="/projects/mood/onboarding.png" />
          </figure>
          <figure>
            <Image alt="Màn hình chào mừng Mood Better Daily" fill sizes="40vw" src="/projects/mood/welcome.png" />
          </figure>
        </div>
      </section>

      <section className="mood-outcome">
        <span>07 / OUTCOME</span>
        <h2>A complete loop for<br /><em>everyday emotional care.</em></h2>
        <div>
          <p>
            Kết quả là một prototype mobile end-to-end, kết nối onboarding, tài khoản,
            check-in cảm xúc, khảo sát, bài tập, thư viện công cụ, nhật ký và hỗ trợ người dùng
            trong cùng một hệ thống trực quan nhất quán.
          </p>
          <div className="mood-outcome-stats">
            <strong>70+</strong><span>MÀN HÌNH & TRẠNG THÁI</span>
            <strong>05</strong><span>NHÓM CẢM XÚC CỐT LÕI</span>
          </div>
        </div>
      </section>

      <section className="collection-next mood-next">
        <span>PROJECT TIẾP THEO</span>
        <Link href="/projects/auroradot">AURORADOT<b>↗</b></Link>
      </section>

      <footer className="collection-footer mood-footer">
        <span>HUY HOÀNG © 2026</span>
        <Link href="/projects">PROJECT ARCHIVE</Link>
      </footer>
    </main>
  );
}

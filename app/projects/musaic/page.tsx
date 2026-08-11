import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "../../unoptimized-image";
import { BrandLogo } from "../../brand-logo";

export const metadata: Metadata = {
  title: "Musaic — AI Music App — Huy Hoàng",
  description:
    "Case study ứng dụng Musaic, sản phẩm AI tạo nhạc từ hình ảnh, cảm xúc và lựa chọn âm nhạc của người dùng.",
};

const experienceSections = [
  {
    number: "03",
    label: "ONBOARDING",
    title: "Bắt đầu nhanh với một tài khoản đơn giản.",
    copy:
      "Luồng onboarding giới thiệu ngắn gọn giá trị của sản phẩm, hỗ trợ đăng nhập mạng xã hội và đưa người dùng mới đến bước đặt tên tài khoản.",
    image: "/projects/musaic/onboarding.png",
    alt: "Luồng onboarding và tạo tài khoản của ứng dụng Musaic",
    galleryClass: "is-four",
    frames: [
      { label: "Onboarding", x: 49, y: 99, width: 385, height: 860 },
      { label: "Create new account", x: 489, y: 99, width: 386, height: 860 },
      { label: "Account details", x: 928, y: 99, width: 387, height: 860 },
      { label: "Choose username", x: 1366, y: 99, width: 385, height: 860 },
    ],
  },
  {
    number: "04",
    label: "CREATE MUSIC",
    title: "Tạo bài hát từ những lựa chọn cá nhân.",
    copy:
      "Người dùng kết hợp ảnh, cảm xúc, thể loại, giọng hát hoặc nhạc cụ và thời lượng. Các lựa chọn được gom lại thành một màn hình xác nhận trước khi tạo nhạc.",
    image: "/projects/musaic/create-music.png",
    alt: "Màn hình chọn cảm xúc, thể loại, giọng hát và thời lượng trong Musaic",
    galleryClass: "is-two",
    frames: [
      { label: "Choose music options", x: 292, y: 98, width: 385, height: 860 },
      { label: "Completed music options", x: 1389, y: 98, width: 386, height: 860 },
    ],
  },
  {
    number: "05",
    label: "SONG OUTPUT",
    title: "Nghe thử, lưu, tải xuống hoặc chia sẻ.",
    copy:
      "Kết quả được trình bày như một bản nhạc hoàn chỉnh với thumbnail, thanh thời lượng và các thao tác tải xuống hoặc chia sẻ cùng trạng thái thành công và thất bại.",
    image: "/projects/musaic/song-output.png",
    alt: "Màn hình nghe thử, tải xuống và chia sẻ bài hát trong Musaic",
    galleryClass: "is-three",
    frames: [
      { label: "Song demo", x: 43, y: 98, width: 386, height: 859 },
      { label: "Download song", x: 536, y: 98, width: 386, height: 859 },
      { label: "Share song", x: 1171, y: 98, width: 385, height: 859 },
    ],
  },
];

type FrameCrop = (typeof experienceSections)[number]["frames"][number];

function frameCropStyle(
  frame: FrameCrop,
  sourceWidth = 1800,
  sourceHeight = 1013,
): CSSProperties {
  return {
    "--crop-left": `${(-frame.x / frame.width) * 100}%`,
    "--crop-top": `${(-frame.y / frame.height) * 100}%`,
    "--crop-width": `${(sourceWidth / frame.width) * 100}%`,
    "--crop-height": `${(sourceHeight / frame.height) * 100}%`,
    aspectRatio: `${frame.width} / ${frame.height}`,
  } as CSSProperties;
}

export default function MusaicPage() {
  return (
    <main className="musaic-case">
      <header className="musaic-nav">
        <Link className="musaic-brand" href="/" aria-label="Về trang chủ"><BrandLogo compact /></Link>
        <span>06 / PRODUCT CASE STUDY</span>
        <Link href="/projects">← TẤT CẢ DỰ ÁN</Link>
      </header>

      <section className="musaic-hero">
        <div className="musaic-hero-copy">
          <span>AI MUSIC · MOBILE PRODUCT · 2026</span>
          <h1>MUSAIC<em>.</em></h1>
          <p>
            Ứng dụng AI tạo nhạc từ hình ảnh, cảm xúc và lựa chọn âm nhạc của người dùng.
          </p>
        </div>

        <div className="musaic-hero-meta">
          <div><small>VAI TRÒ</small><strong>UX/UI Designer</strong></div>
          <div><small>PHẠM VI</small><strong>Product Flow · UI · Design System</strong></div>
          <div><small>NỀN TẢNG</small><strong>Mobile App</strong></div>
        </div>

        <figure className="musaic-cover">
          <Image
            alt="Musaic — ứng dụng AI tạo nhạc từ những khoảnh khắc đời sống"
            fill
            priority
            sizes="100vw"
            src="/projects/musaic/musaic-cover-generated-v2.png"
          />
        </figure>
      </section>

      <section className="musaic-overview">
        <div>
          <span>01 / OVERVIEW</span>
          <h2>Your photos.<br />Your mood.<br /><em>Your song.</em></h2>
        </div>
        <div>
          <p>
            Musaic biến dữ liệu cá nhân thành điểm bắt đầu cho quá trình tạo nhạc. Người dùng có thể tải từ một đến mười hình ảnh, chọn cảm xúc và định hướng âm nhạc trước khi AI tạo ra bài hát.
          </p>
          <p>
            Sản phẩm tập trung vào một luồng ngắn, giúp người dùng không cần kiến thức chuyên môn về âm nhạc vẫn có thể tạo, nghe và chia sẻ một bản nhạc mang dấu ấn cá nhân.
          </p>
        </div>
      </section>

      <section className="musaic-flow">
        <div className="musaic-section-heading">
          <span>02 / PRODUCT FLOW</span>
          <h2>Một luồng chính,<br /><em>từ ảnh đến bài hát.</em></h2>
          <p>
            Cấu trúc sản phẩm kết nối tài khoản, tạo nhạc và khu vực cá nhân. Phần tạo nhạc được chia thành các bước nhập ảnh, chọn phong cách, tạo kết quả và lưu hoặc chia sẻ.
          </p>
        </div>
        <figure>
          <Image alt="Sitemap của ứng dụng AI Music App Musaic" fill sizes="100vw" src="/projects/musaic/sitemap.png" />
        </figure>
      </section>

      <section className="musaic-experience">
        <div className="musaic-section-heading is-light">
          <span>03—05 / CORE EXPERIENCE</span>
          <h2>Choose.<br /><em>Create. Listen.</em></h2>
        </div>

        <div className="musaic-experience-list">
          {experienceSections.map((section) => (
            <article key={section.number}>
              <div className="musaic-experience-copy">
                <span>{section.number} / {section.label}</span>
                <h3>{section.title}</h3>
                <p>{section.copy}</p>
              </div>
              <div className={`musaic-screen-gallery ${section.galleryClass}`}>
                {section.frames.map((frame) => (
                  <figure
                    aria-label={`${section.alt} — ${frame.label}`}
                    className="musaic-screen-crop"
                    key={frame.label}
                    role="img"
                    style={frameCropStyle(frame)}
                  >
                    <Image
                      alt=""
                      className="musaic-cropped-source"
                      fill
                      sizes="(max-width: 760px) 82vw, 24vw"
                      src={section.image}
                    />
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="musaic-system">
        <div className="musaic-section-heading">
          <span>06 / VISUAL SYSTEM</span>
          <h2>A visual language<br /><em>built from rhythm.</em></h2>
          <p>
            Hệ thống sử dụng hình kim cương làm yếu tố nhận diện chính, kết hợp tím đậm, lavender, cyan và vàng chanh. Plus Jakarta Sans giữ phần nội dung rõ ràng trên các mảng màu mạnh.
          </p>
        </div>
        <figure>
          <Image alt="Bảng màu, typography và trạng thái button của Musaic" fill sizes="100vw" src="/projects/musaic/design-system.png" />
        </figure>
      </section>

      <section className="musaic-share">
        <div className="musaic-share-copy">
          <span>07 / SHAREABLE MOMENTS</span>
          <h2>The song becomes<br /><em>a memory.</em></h2>
          <p>
            Bài hát có thể được đặt vào một template dọc cùng hình ảnh và thông tin thời lượng, tạo nội dung sẵn sàng để lưu hoặc chia sẻ trên mạng xã hội.
          </p>
          <strong>PHOTO · MOOD · MUSIC</strong>
        </div>
        <figure
          aria-label="Template chia sẻ khoảnh khắc cùng bài hát được tạo bởi Musaic"
          className="musaic-share-frame"
          role="img"
          style={frameCropStyle(
            { label: "Share template", x: 306, y: 290, width: 475, height: 844 },
            1102,
            1400,
          )}
        >
          <Image
            alt=""
            className="musaic-cropped-source"
            fill
            sizes="(max-width: 760px) 88vw, 38vw"
            src="/projects/musaic/share-template.png"
          />
        </figure>
      </section>

      <section className="musaic-outcome">
        <span>08 / OUTCOME</span>
        <h2>Một hệ thống hoàn chỉnh cho hành trình tạo và chia sẻ nhạc cá nhân.</h2>
        <p>
          Dự án bao gồm sitemap, luồng đăng nhập và onboarding, màn hình tạo nhạc, thư viện, hệ credit, trạng thái kết quả, design system, logo và các định dạng nội dung chia sẻ.
        </p>
      </section>

      <section className="collection-next musaic-next">
        <span>DỰ ÁN TIẾP THEO</span>
        <Link href="/projects/character-worlds-fantasy">CHARACTER WORLDS &amp; FANTASY<b>↗</b></Link>
      </section>

      <footer className="collection-footer musaic-footer">
        <span>HUY HOÀNG © 2026</span>
        <Link href="/projects">PROJECT ARCHIVE</Link>
      </footer>
    </main>
  );
}

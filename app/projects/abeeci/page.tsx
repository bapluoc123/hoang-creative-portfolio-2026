import { CustomCursor } from "../../custom-cursor";

const uiScreens = [
  {
    src: "/projects/abeeci/ui-onboarding.png",
    label: "01 / ONBOARDING",
    title: "Bắt đầu nhẹ nhàng",
    alt: "Màn hình onboarding của ABEECI",
  },
  {
    src: "/projects/abeeci/ui-home.png",
    label: "02 / HOME",
    title: "Chọn môn học",
    alt: "Màn hình chính chọn môn học của ABEECI",
  },
  {
    src: "/projects/abeeci/ui-lessons.png",
    label: "03 / COURSES",
    title: "Các khóa học",
    alt: "Màn hình danh sách khóa học và bài học của ABEECI",
  },
  {
    src: "/projects/abeeci/ui-register.png",
    label: "04 / REGISTER",
    title: "Tạo tài khoản",
    alt: "Màn hình đăng ký tài khoản ABEECI",
  },
  {
    src: "/projects/abeeci/ui-profile.png",
    label: "05 / CHILD PROFILE",
    title: "Hồ sơ trẻ em",
    alt: "Màn hình hồ sơ trẻ em của ABEECI",
  },
  {
    src: "/projects/abeeci/ui-parent.png",
    label: "06 / PARENT",
    title: "Quản lý phụ huynh",
    alt: "Màn hình quản lý dành cho phụ huynh của ABEECI",
  },
  {
    src: "/projects/abeeci/ui-lock.png",
    label: "07 / APP LOCK",
    title: "Điều kiện mở khóa",
    alt: "Màn hình khóa ứng dụng của ABEECI",
  },
  {
    src: "/projects/abeeci/ui-homepage-full.png",
    label: "08 / HOMEPAGE",
    title: "Thế giới học tập",
    alt: "Màn hình homepage dài của ABEECI",
  },
  {
    src: "/projects/abeeci/ui-learning.png",
    label: "09 / LEARNING",
    title: "Trong buổi học",
    alt: "Màn hình làm bài trong buổi học của ABEECI",
  },
  {
    src: "/projects/abeeci/ui-complete.png",
    label: "10 / COMPLETE",
    title: "Hoàn thành bài học",
    alt: "Màn hình chúc mừng khi hoàn thành bài học của ABEECI",
  },
];

const artBackgrounds = [
  {
    src: "/projects/abeeci/art-bg-barry.png",
    label: "01 / BARRY",
    alt: "Background chủ đề Barry của ABEECI",
  },
  {
    src: "/projects/abeeci/art-bg-dixie.png",
    label: "02 / DIXIE",
    alt: "Background chủ đề Dixie của ABEECI",
  },
  {
    src: "/projects/abeeci/art-bg-colin.png",
    label: "03 / COLIN",
    alt: "Background chủ đề Colin của ABEECI",
  },
  {
    src: "/projects/abeeci/art-bg-andie.png",
    label: "04 / ANDIE",
    alt: "Background chủ đề Andie của ABEECI",
  },
];

const artCharacters = [
  {
    src: "/projects/abeeci/art-character-barry.png",
    name: "BARRY",
    detail: "BẢN NHỎ",
    version: "child",
    alt: "Nhân vật Barry phiên bản nhỏ của ABEECI",
  },
  {
    src: "/projects/abeeci/art-character-barry-teen.png",
    name: "BARRY",
    detail: "BẢN LỚN",
    version: "teen",
    alt: "Nhân vật Barry phiên bản lớn của ABEECI",
  },
  {
    src: "/projects/abeeci/art-character-dixie.png",
    name: "DIXIE",
    detail: "BẢN NHỎ",
    version: "child",
    alt: "Nhân vật Dixie phiên bản nhỏ của ABEECI",
  },
  {
    src: "/projects/abeeci/art-character-dixie-teen.png",
    name: "DIXIE",
    detail: "BẢN LỚN",
    version: "teen",
    alt: "Nhân vật Dixie phiên bản lớn của ABEECI",
  },
  {
    src: "/projects/abeeci/art-character-collin.png",
    name: "COLIN",
    detail: "BẢN NHỎ",
    version: "child",
    alt: "Nhân vật Colin phiên bản nhỏ của ABEECI",
  },
  {
    src: "/projects/abeeci/art-character-colin-teen.png",
    name: "COLIN",
    detail: "BẢN LỚN",
    version: "teen",
    alt: "Nhân vật Colin phiên bản lớn của ABEECI",
  },
  {
    src: "/projects/abeeci/art-character-andie.png",
    name: "ANDIE",
    detail: "BẢN NHỎ",
    version: "child",
    alt: "Nhân vật Andie phiên bản nhỏ của ABEECI",
  },
  {
    src: "/projects/abeeci/art-character-andie-teen.png",
    name: "ANDIE",
    detail: "BẢN LỚN",
    version: "teen",
    alt: "Nhân vật Andie phiên bản lớn của ABEECI",
  },
];

export default function AbeeciCaseStudy() {
  return (
    <main className="abeeci-case">
      <CustomCursor />

      <header className="fix-case-nav">
        <a className="fix-case-brand" data-cursor="VỀ NHÀ" href="/">H+</a>
        <span>02 / EDUCATION PRODUCT CASE STUDY</span>
        <a data-cursor="DỰ ÁN" href="/projects">← TẤT CẢ DỰ ÁN</a>
      </header>

      <section className="abeeci-hero paper-noise">
        <div className="abeeci-hero-copy">
          <span>EDUCATION APP · UX/UI & ILLUSTRATION</span>
          <h1>ABee<em>Ci.</em></h1>
          <p>
            Một trải nghiệm học tập biến thời gian sử dụng thiết bị thành động lực hoàn thành bài học,
            đồng thời trao cho phụ huynh công cụ kiểm soát rõ ràng.
          </p>
        </div>

        <div className="abeeci-hero-meta">
          <div>
            <small>VAI TRÒ</small>
            <strong>UX/UI Designer<br />Illustrator Artist</strong>
          </div>
          <div>
            <small>PHẠM VI</small>
            <strong>Product UI<br />Visual Assets</strong>
          </div>
          <div>
            <small>NỀN TẢNG</small>
            <strong>Mobile App</strong>
          </div>
        </div>

        <figure className="abeeci-hero-visual">
          <img
            className="abeeci-hero-cover-bg"
            src="/projects/abeeci/art-bg-barry.png"
            alt=""
            aria-hidden="true"
          />
          <div className="abeeci-hero-cover-copy">
            <span>ABEECI / LEARNING APP</span>
            <strong>Learn.<br />Play.<br /><em>Grow.</em></strong>
          </div>
          <img
            className="abeeci-hero-cover-mark"
            src="/projects/abeeci/art-element-home.png"
            alt="Biểu tượng ngôi nhà tổ ong của ứng dụng ABEECI"
          />
          <img
            className="abeeci-hero-cover-character"
            src="/projects/abeeci/art-character-barry.png"
            alt=""
            aria-hidden="true"
          />
          <figcaption>ABEECI · LEARN · PLAY · GROW</figcaption>
        </figure>
      </section>

      <section className="abeeci-split-intro">
        <span>ONE PRODUCT / TWO CRAFTS</span>
        <h2>Một sản phẩm.<br /><em>Hai vai trò sáng tạo.</em></h2>
        <div className="abeeci-split-grid">
          <a data-cursor="UX/UI" href="#abeeci-ux">
            <small>CHƯƠNG 01</small>
            <strong>UX/UI<br />DESIGN</strong>
            <p>Luồng sử dụng, cấu trúc nội dung và hệ thống giao diện.</p>
            <b>↓</b>
          </a>
          <a data-cursor="ART" href="#abeeci-art">
            <small>CHƯƠNG 02</small>
            <strong>ILLUSTRATION<br />ART</strong>
            <p>Nhân vật, key visual và ngôn ngữ hình ảnh giáo dục.</p>
            <b>↓</b>
          </a>
        </div>
      </section>

      <section className="abeeci-ux paper-noise" id="abeeci-ux">
        <div className="abeeci-section-kicker">
          <span>01 / UX/UI DESIGN</span>
          <p>STRUCTURE BEFORE DECORATION</p>
        </div>
        <div className="abeeci-section-heading">
          <h2>Learning should feel<br /><em>easy to enter.</em></h2>
          <p>
            Phần UX/UI được xây dựng quanh hai nhóm người dùng: trẻ em cần một hành trình đơn giản,
            nhiều phản hồi trực quan; phụ huynh cần quyền kiểm soát, tiến độ và điều kiện mở khóa minh bạch.
          </p>
        </div>

        <div className="abeeci-principles">
          <article>
            <span>01</span>
            <strong>CHILD FIRST</strong>
            <p>Điều hướng bằng môn học, màu sắc và hình khối dễ nhận biết.</p>
          </article>
          <article>
            <span>02</span>
            <strong>VISIBLE PROGRESS</strong>
            <p>Module, điểm số và trạng thái học tập luôn được thể hiện rõ.</p>
          </article>
          <article>
            <span>03</span>
            <strong>PARENT CONTROL</strong>
            <p>Ứng dụng chỉ được mở khi mục tiêu học tập đã hoàn thành.</p>
          </article>
        </div>

        <div className="abeeci-ui-stage">
          {uiScreens.map((screen, index) => (
            <figure className={`abeeci-phone is-${index + 1}`} key={screen.src}>
              <figcaption>
                <span>{screen.label}</span>
                <strong>{screen.title}</strong>
              </figcaption>
              <div>
                <img src={screen.src} alt={screen.alt} loading="lazy" />
              </div>
            </figure>
          ))}
        </div>

        <div className="abeeci-components">
          <div className="abeeci-components-heading">
            <span>COMPONENT SYSTEM</span>
            <h3>Navigation, states<br />& reusable parts.</h3>
            <p>
              Các màn hình được hỗ trợ bởi hệ component dùng lại: navigation có trạng thái active,
              hệ icon, màu trạng thái và những thành phần giúp mở rộng nhiều môn học.
            </p>
          </div>
          <div className="abeeci-components-grid">
            <figure className="abeeci-navbar-study">
              <img
                src="/projects/abeeci/ui-navbar-primary.png"
                alt="Các trạng thái active của navigation bar ABEECI"
                loading="lazy"
              />
              <figcaption>NAVIGATION / ACTIVE STATES</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="abeeci-ux-outcome">
        <span>UX OUTCOME</span>
        <blockquote>
          Trẻ em nhìn thấy <mark>việc cần làm</mark>.<br />
          Phụ huynh nhìn thấy <mark>quyền kiểm soát</mark>.
        </blockquote>
      </section>

      <section className="abeeci-art" id="abeeci-art">
        <div className="abeeci-section-kicker is-light">
          <span>02 / ILLUSTRATION ART</span>
          <p>CHARACTER · ICON · KEY VISUAL</p>
        </div>
        <div className="abeeci-art-heading">
          <h2>A world built<br />from <em>honey.</em></h2>
          <div>
            <p>
              Phần này chỉ trình bày tài sản hình ảnh độc lập: background, nhân vật và element.
              Không trộn màn hình sản phẩm hay layout quảng cáo vào gallery minh họa.
            </p>
            <ul>
              <li>Background tạo bối cảnh cho từng chủ đề học.</li>
              <li>Nhân vật mang biểu cảm và cá tính riêng.</li>
              <li>Element được tách rời để tái sử dụng trong UI.</li>
            </ul>
          </div>
        </div>

        <div className="abeeci-asset-gallery">
          <div className="abeeci-backgrounds-block">
            <div className="abeeci-art-collection-heading">
              <span>01 / BACKGROUNDS</span>
              <strong>04 WORLDS</strong>
            </div>
            <div className="abeeci-background-grid">
              {artBackgrounds.map((background) => (
                <figure className="abeeci-background-card" key={background.src}>
                  <img src={background.src} alt={background.alt} loading="lazy" />
                  <figcaption>{background.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="abeeci-characters-block">
            <div className="abeeci-art-collection-heading">
              <span>02 / CHARACTERS</span>
              <strong>04 CHARACTERS / 02 AGES</strong>
            </div>
            <div className="abeeci-character-grid">
              {artCharacters.map((character, index) => (
                <figure
                  className={`abeeci-character-card is-${index + 1} is-${character.version}`}
                  key={`${character.name}-${character.version}`}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <img src={character.src} alt={character.alt} loading="lazy" />
                  <figcaption>
                    <strong>{character.name}</strong>
                    <small>{character.detail}</small>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="abeeci-elements-art">
            <div className="abeeci-elements-copy">
              <span>03 / ELEMENTS</span>
              <h3>Small assets,<br />clear meanings.</h3>
              <p>
                Icon và vật phẩm được vẽ như những asset độc lập, giữ silhouette rõ ở kích thước nhỏ
                và có thể kết hợp linh hoạt trong nhiều trạng thái giao diện.
              </p>
            </div>
            <figure className="abeeci-element-sheet">
              <img
                src="/projects/abeeci/ui-navbar-states.png"
                alt="Bộ element và icon minh họa ABEECI"
                loading="lazy"
              />
            </figure>
            <figure className="abeeci-element-single is-lock">
              <img
                src="/projects/abeeci/art-element-lock.png"
                alt="Element khóa ứng dụng ABEECI"
                loading="lazy"
              />
              <figcaption>APP LOCK</figcaption>
            </figure>
            <figure className="abeeci-element-single is-home">
              <img
                src="/projects/abeeci/art-element-home.png"
                alt="Element màn hình chính ABEECI"
                loading="lazy"
              />
              <figcaption>HOME</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="abeeci-bridge paper-noise">
        <span>THE BRIDGE</span>
        <h2>UI provides the path.<br /><em>Art gives it a personality.</em></h2>
        <p>
          Hai vai trò không tách rời nhau: hệ thống giao diện tạo ra cấu trúc sử dụng,
          còn illustration giúp mỗi trạng thái trở nên dễ hiểu và đáng nhớ hơn với trẻ em.
        </p>
      </section>

      <section className="abeeci-outcome">
        <div>
          <span>OUTCOME / 03</span>
          <h2>Education<br />with <em>character.</em></h2>
        </div>
        <div>
          <p>
            ABEECI trở thành một hệ sinh thái học tập có cá tính thống nhất từ màn hình sản phẩm
            đến nội dung truyền thông. Case study này thể hiện đồng thời tư duy sản phẩm và năng lực
            xây dựng thế giới hình ảnh của mình.
          </p>
          <ul>
            <li>Luồng học tập và kiểm soát phụ huynh có cấu trúc rõ ràng.</li>
            <li>Visual system dùng được xuyên suốt nhiều môn học và module.</li>
            <li>UX/UI và illustration cùng phục vụ một mục tiêu giáo dục.</li>
          </ul>
        </div>
      </section>

      <footer className="fix-case-footer abeeci-footer">
        <a data-cursor="DỰ ÁN" href="/projects">← TẤT CẢ DỰ ÁN</a>
        <span>ABEECI · UX/UI & ILLUSTRATION</span>
        <a data-cursor="TIẾP THEO" href="/projects">DỰ ÁN KHÁC →</a>
      </footer>
    </main>
  );
}

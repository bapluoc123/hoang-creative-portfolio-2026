import { CustomCursor } from "../../custom-cursor";
import { BrandLogo } from "../../brand-logo";

const problems = [
  ["01", "Không biết mô tả lỗi", "Người dùng nhìn thấy hiện tượng, nhưng không có đủ kiến thức để gọi đúng tên sự cố."],
  ["02", "Không biết tin ai", "Thông tin về kinh nghiệm, chứng chỉ và đánh giá của thợ thường thiếu minh bạch."],
  ["03", "Không biết giá nào hợp lý", "Chi phí sửa chữa và linh kiện chỉ xuất hiện sau khi người dùng đã khó quay lại."],
];

const insights = [
  ["73%", "ưu tiên một báo giá rõ ràng hơn là mức giá rẻ nhất."],
  ["82%", "muốn thấy khoảng giá trước khi xác nhận đặt thợ."],
  ["85%", "cần lưu hóa đơn và thời hạn bảo hành trong ứng dụng."],
];

function Slide({ name, alt, className = "" }: { name: string; alt: string; className?: string }) {
  return (
    <figure className={`fix-case-slide ${className}`}>
      <img src={`/projects/fix-now/${name}`} alt={alt} />
    </figure>
  );
}

function Screen({ name, alt, label, className = "" }: { name: string; alt: string; label: string; className?: string }) {
  return (
    <figure className={`fix-phone ${className}`}>
      <span>{label}</span>
      <div><img src={`/projects/fix-now/figma/${name}`} alt={alt} /></div>
    </figure>
  );
}

export default function FixNowCaseStudy() {
  return (
    <main className="fix-case">
      <CustomCursor />

      <header className="fix-case-nav">
        <a className="fix-case-brand" data-cursor="VỀ NHÀ" href="/" aria-label="Về trang chủ"><BrandLogo compact /></a>
        <span>01 / PRODUCT DESIGN CASE STUDY</span>
        <a data-cursor="QUAY LẠI" href="/projects">← TẤT CẢ DỰ ÁN</a>
      </header>

      <section className="fix-case-hero paper-noise">
        <div className="fix-case-hero-copy">
          <span>UX/UI DESIGN · 2026</span>
          <h1>FIX<br /><em>NOW.</em></h1>
          <p>Một trải nghiệm giúp việc tìm thợ, hiểu sự cố và kiểm soát chi phí trở nên rõ ràng hơn.</p>
        </div>
        <div className="fix-case-hero-meta">
          <div><small>VAI TRÒ</small><strong>Team Lead<br />UX/UI Designer</strong></div>
          <div><small>ĐỘI NGŨ</small><strong>03 thành viên</strong></div>
          <div><small>THỜI GIAN</small><strong>2026</strong></div>
        </div>
        <div className="fix-case-hero-visual">
          <img src="/projects/fixnow-cover.png" alt="Tổng quan ứng dụng FIX NOW" />
          <span>TRUST · TRANSPARENCY · SPEED</span>
        </div>
      </section>

      <section className="fix-case-manifesto">
        <span>THE CHALLENGE / 01</span>
        <p>
          Sửa chữa tại nhà không nên là một canh bạc. Người dùng cần
          {" "}<mark>hiểu điều gì đang xảy ra</mark> trước khi quyết định ai sẽ xử lý nó.
        </p>
      </section>

      <section className="fix-case-overview paper-noise">
        <div className="fix-case-section-title">
          <span>PROJECT OVERVIEW / 02</span>
          <h2>Confidence,<br /><em>before the repair.</em></h2>
        </div>
        <div className="fix-case-overview-copy">
          <p>
            FIX NOW kết nối hộ gia đình với thợ đã xác minh, hỗ trợ chẩn đoán sự cố bằng AI,
            đưa ra khoảng giá tham khảo và lưu lại toàn bộ hành trình bảo hành.
          </p>
          <dl>
            <div><dt>ĐỐI TƯỢNG</dt><dd>Người đi làm bận rộn và hộ gia đình tại các đô thị lớn.</dd></div>
            <div><dt>ĐÓNG GÓP</dt><dd>Dẫn dắt UX, xây dựng cấu trúc sản phẩm và trực tiếp thiết kế giao diện.</dd></div>
          </dl>
        </div>
      </section>

      <section className="fix-product-stage">
        <div className="fix-product-stage-copy">
          <span>THE PRODUCT / FIGMA</span>
          <h2>Home services,<br /><em>made understandable.</em></h2>
          <p>
            Trang chủ ưu tiên tám nhóm dịch vụ quen thuộc, CTA rõ ràng và thông tin giá đủ sớm
            để người dùng không phải “đoán” bước tiếp theo.
          </p>
        </div>
        <div className="fix-product-stage-screens">
          <Screen name="home.png" alt="Màn hình trang chủ FIX NOW từ Figma" label="01 / HOME" className="is-home" />
          <Screen name="activities.png" alt="Màn hình quản lý hoạt động FIX NOW từ Figma" label="02 / ACTIVITY" className="is-activity" />
        </div>
      </section>

      <section className="fix-case-problem">
        <div className="fix-case-section-title is-dark">
          <span>PROBLEM SPACE / 03</span>
          <h2>Three gaps.<br /><em>One trust problem.</em></h2>
        </div>
        <div className="fix-case-problem-grid">
          {problems.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fix-case-research paper-noise">
        <div className="fix-case-section-title">
          <span>RESEARCH / 04</span>
          <h2>People want<br /><em>proof, not promises.</em></h2>
        </div>
        <p className="fix-case-research-lead">
          Phỏng vấn 11 người dùng cho thấy niềm tin không đến từ lời quảng cáo “giá rẻ”, mà từ
          khả năng nhìn thấy chi phí, năng lực thợ và trách nhiệm sau sửa chữa.
        </p>
        <div className="fix-case-insights">
          {insights.map(([stat, copy]) => (
            <div key={stat}><strong>{stat}</strong><p>{copy}</p></div>
          ))}
        </div>
        <div className="fix-research-focus">
          <div>
            <span>PRIMARY PERSONA</span>
            <blockquote>
              “Tôi không cần người sửa rẻ nhất. Tôi chỉ muốn biết người đó có đáng tin và mức giá
              đưa ra có hợp lý hay không.”
            </blockquote>
            <p>Nguyễn Minh Anh · 26 tuổi · Nhân viên Marketing</p>
          </div>
          <Slide name="fixnow-persona.png" alt="Persona nghiên cứu của FIX NOW" />
        </div>
      </section>

      <section className="fix-ai-story">
        <div className="fix-case-section-title is-dark">
          <span>KEY EXPERIENCE / 05</span>
          <h2>From a symptom<br /><em>to a clear next step.</em></h2>
        </div>
        <p className="fix-ai-story-lead">
          Thay vì yêu cầu người dùng tự xác định lỗi, luồng AI thu thập dấu hiệu, phân tích dữ liệu
          và trả về nguyên nhân có thể xảy ra cùng khoảng chi phí.
        </p>
        <div className="fix-ai-steps">
          <Screen name="issue-detail.png" alt="Màn hình mô tả sự cố từ Figma" label="01 / DESCRIBE" />
          <Screen name="ai-analysis.png" alt="Màn hình AI phân tích từ Figma" label="02 / ANALYZE" />
          <Screen name="ai-result.png" alt="Màn hình kết quả AI từ Figma" label="03 / DECIDE" />
        </div>
        <div className="fix-ai-notes">
          <div><strong>01</strong><p>Ngôn ngữ đời thường và chip triệu chứng giúp mô tả vấn đề nhanh hơn.</p></div>
          <div><strong>02</strong><p>Progress feedback cho biết AI đang đọc và đối chiếu dữ liệu nào.</p></div>
          <div><strong>03</strong><p>Kết quả luôn đi kèm độ tin cậy, khoảng giá và hành động tiếp theo.</p></div>
        </div>
      </section>

      <section className="fix-case-flow paper-noise">
        <div className="fix-case-section-title">
          <span>UX STRUCTURE / 06</span>
          <h2>One main flow,<br /><em>four clear decisions.</em></h2>
        </div>
        <p className="fix-case-research-lead">
          Trong phần quy trình, mình chỉ giữ lại sơ đồ cần thiết nhất từ presentation: luồng chính
          từ việc phát hiện sự cố đến đặt thợ và lưu bảo hành.
        </p>
        <Slide name="fixnow-userflow.png" alt="Luồng người dùng chính của FIX NOW" className="is-framed" />
      </section>

      <section className="fix-case-wireframe paper-noise">
        <div className="fix-case-section-title">
          <span>WIREFRAME / 07</span>
          <h2>Structure first.<br /><em>Then character.</em></h2>
        </div>
        <p className="fix-case-research-lead">
          Wireframe được dùng để kiểm tra thứ tự thông tin, độ ngắn của luồng đặt lịch và khả năng
          truy cập các tác vụ cốt lõi trong tối đa hai lần chạm.
        </p>
        <Slide name="fixnow-wireframe.png" alt="Wireframe được tuyển chọn của FIX NOW" className="is-framed" />
      </section>

      <section className="fix-case-system">
        <div className="fix-case-section-title is-dark">
          <span>DESIGN SYSTEM / 08</span>
          <h2>Urgency in orange.<br /><em>Trust in teal.</em></h2>
        </div>
        <div className="fix-token-story">
          <div className="fix-color-token is-orange"><span>PRIMARY</span><strong>#F97316</strong><small>Hành động và nhận diện</small></div>
          <div className="fix-color-token is-teal"><span>TRUST</span><strong>#16AFAB</strong><small>Xác minh và bảo hành</small></div>
          <div className="fix-type-token"><span>TYPE SYSTEM</span><strong>Be Vietnam Pro</strong><small>Rõ ràng ở kích thước giao diện nhỏ</small></div>
        </div>
        <Slide name="fixnow-components.png" alt="Các component cốt lõi của FIX NOW" className="is-dark-framed" />
      </section>

      <section className="fix-final-composition">
        <div className="fix-final-copy">
          <span>FINAL EXPERIENCE / 09</span>
          <h2>Designed to feel<br /><em>already familiar.</em></h2>
        </div>
        <Screen name="home.png" alt="Màn hình hoàn thiện trang chủ FIX NOW" label="PRODUCT UI / HOME" className="is-final-home" />
        <Screen name="ai-result.png" alt="Màn hình hoàn thiện kết quả AI FIX NOW" label="PRODUCT UI / AI RESULT" className="is-final-result" />
        <Screen name="activities.png" alt="Màn hình hoàn thiện quản lý hoạt động FIX NOW" label="PRODUCT UI / ACTIVITY" className="is-final-activity" />
      </section>

      <section className="fix-case-outcome">
        <div>
          <span>OUTCOME / 10</span>
          <h2>Clarity builds<br /><em>confidence.</em></h2>
        </div>
        <div>
          <p>
            Kết quả là một prototype hoàn chỉnh cho trải nghiệm khách hàng, tập trung vào ba điểm:
            hiểu vấn đề, biết trước chi phí và theo dõi trách nhiệm sau sửa chữa.
          </p>
          <ul>
            <li>AI Diagnostics giảm rào cản kiến thức kỹ thuật.</li>
            <li>Khoảng giá và hồ sơ thợ tạo niềm tin trước khi đặt lịch.</li>
            <li>Lịch sử đơn hàng trở thành hồ sơ bảo trì của gia đình.</li>
          </ul>
        </div>
      </section>

      <footer className="fix-case-footer">
        <a data-cursor="DỰ ÁN" href="/projects">← TẤT CẢ DỰ ÁN</a>
        <span>FIX NOW · UX/UI DESIGN · 2026</span>
        <a data-cursor="XEM THÊM" href="/projects">DỰ ÁN KHÁC →</a>
      </footer>
    </main>
  );
}

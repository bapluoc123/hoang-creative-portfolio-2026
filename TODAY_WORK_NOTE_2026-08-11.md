# Ghi chú công việc — 11/08/2026

## Trạng thái

Đã khôi phục deployment Cloudflare Pages của `hoang-creative-portfolio-2026`, sửa và kiểm tra local tại `http://localhost:3000/`. Các thay đổi duy trì được đã được đưa trở lại source trên nhánh `recovery/cloudflare-pages-2026-08-11`.

Kết quả QA cuối trên bản local: **72/72 lượt đạt** (12 route × 6 viewport).

## Nhánh nguồn

- Recovery branch được tạo từ `agent/portfolio-visual-content-updates`, vì nhánh này có source mới hơn và đã có Musaic.
- `main` hiện vẫn ở `232d7733968f5b806b3133d456d08623ca104d13` và cũ hơn deployment Cloudflare.
- Không merge recovery branch vào `main` trước khi build và review diff.

## Việc đã hoàn thành

1. Khôi phục deployment Cloudflare Pages thành bản local chạy được.
2. Giữ hệ font tự host có đủ glyph tiếng Việt; bản artifact local cũng đã được sửa toàn bộ URL font bị trỏ về máy build cũ.
3. Xóa section **Sứ mệnh** khỏi trang chủ.
4. Sửa cover Mood và Auroradot khi màn hình rộng hơn ảnh gốc; không còn lộ nền.
5. Căn giữa cụm tiêu đề hero trên màn hình lớn mà không làm lệch nhân vật.
6. Sửa Elihigh Kids:
   - ảnh dọc hiển thị đủ, không bị crop;
   - giữ tỷ lệ gốc 1240×1754;
   - caption nằm ngoài artwork;
   - 2 cột desktop, 1 cột mobile.
7. Giới hạn selector cover đúng khu vực để không làm hỏng Visual Archive.
8. Xóa **PHẠM VI** trên toàn bộ 10 project.
9. Xóa block **TYPE / FIELD** trên 5 collection project.
10. Giữ đúng một mục **VAI TRÒ** trên mỗi project và hiển thị lại trên mobile cho Fix Now cùng các collection project.
11. Thêm `public/image-audit.html` để rà soát responsive toàn site.

## Phạm vi QA

Các route:

- `/`
- `/projects`
- `/projects/fix-now`
- `/projects/mood`
- `/projects/abeeci`
- `/projects/auroradot`
- `/projects/elihigh-kids`
- `/projects/musaic`
- `/projects/character-worlds-fantasy`
- `/projects/illustration-manga-studies`
- `/projects/kids-game-art-ui`
- `/projects/visual-storytelling-publishing`

Viewport: `390×844`, `768×1024`, `1180×820`, `1440×900`, `1920×1080`, `2560×1440`.

Kiểm tra gồm: ảnh lỗi, tràn ngang, cover/card, gallery Elihigh, hero màn hình rộng và metadata project.

## File source chính đã cập nhật

- `app/projects/abeeci/page.tsx`
- `app/projects/auroradot/page.tsx`
- `app/projects/fix-now/page.tsx`
- `app/projects/mood/page.tsx`
- `app/projects/musaic/page.tsx`
- `app/projects/[slug]/page.tsx`
- `app/responsive-system.css`
- `public/image-audit.html`
- `recovery/2026-08-11-cloudflare-pages/tools/` (script patch artifact và manifest tải xuống)

## Giới hạn và bản recovery local

Cloudflare Pages chỉ cung cấp artifact đã biên dịch, không cung cấp source React/TypeScript gốc qua Dashboard. Bản artifact đầy đủ khoảng 155 MB vẫn được giữ local làm mốc đối chiếu; không đưa bản build trùng lặp đó vào Git history vì source và asset tương ứng đã có trong repository.

## Bước tiếp theo

1. Checkout nhánh `recovery/cloudflare-pages-2026-08-11`.
2. Chạy type-check/build.
3. Mở `/image-audit.html` và rà soát lại 72 trường hợp.
4. Review diff rồi mới tạo PR hoặc merge vào `main`.

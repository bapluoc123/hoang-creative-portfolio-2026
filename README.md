# Huy Hoàng — Creative Portfolio 2026

Portfolio cá nhân kết hợp UX/UI Design và Illustration, xây dựng bằng Next.js và triển khai trên Cloudflare Workers.

## Ghi chú nhanh

| Nội dung | Thông tin |
| --- | --- |
| Chạy local | `npm install` rồi `npm run dev` |
| Địa chỉ local | `http://localhost:3000` |
| Kiểm tra trước khi đăng | `npm run build` |
| Nội dung trang chủ | `app/page.tsx` |
| Dữ liệu dự án | `app/project-data.ts` và `app/collection-data.ts` |
| CSS toàn website | `app/globals.css` |
| Ảnh dự án | `public/projects/` |
| Website Cloudflare | `https://hoang-creative-portfolio.bapluoc511999.workers.dev` |

## Các dự án chính

| Dự án | Lĩnh vực | Năm | Đường dẫn |
| --- | --- | --- | --- |
| FIX NOW | UX/UI Design | 2026 | `/projects/fix-now` |
| ABEECI | UX/UI Design · Illustration | 2025 | `/projects/abeeci` |
| MOOD | UX/UI Design | 2026 | `/projects/mood` |
| AURORADOT | UX/UI Design · Illustration | 2026 | `/projects/auroradot` |
| ELIHIGH KIDS | UI Design · Illustration | 2023 | `/projects/elihigh-kids` |

## Cách sửa nội dung

1. Mở `app/page.tsx` để sửa phần giới thiệu, kinh nghiệm, học vấn và liên hệ.
2. Mở file trong `app/projects/` để sửa nội dung case study tương ứng.
3. Thay ảnh trong `public/projects/` và giữ nguyên tên file nếu muốn cập nhật mà không sửa code.
4. Chạy `npm run build` sau mỗi thay đổi lớn.

## Ảnh và triển khai

- Ảnh Next.js đang dùng chế độ `unoptimized` để hoạt động ổn định trên Cloudflare Workers.
- Không xóa `app/unoptimized-image.tsx` hoặc cấu hình `images.unoptimized` trong `next.config.ts`.
- Quy trình Cloudflare chi tiết nằm trong `DEPLOYMENT_NOTE.md`.
- Ghi chú phát triển đầy đủ nằm trong `CONTINUE_NEXT_WEEK.md`.

## Trạng thái gần nhất

- Đã sửa lỗi ảnh khi deploy Cloudflare.
- Đã chuẩn hóa nội dung và metadata của các dự án chính.
- Đã cập nhật cover Elihigh Kids và cover ABEECI.
- Đã cân lại spacing, typography và bố cục trang FIX NOW.
- Luôn chạy `npm run build` trước khi commit hoặc deploy.

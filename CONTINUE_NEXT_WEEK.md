# GHI CHÚ TIẾP TỤC PORTFOLIO

> Cập nhật lần cuối: 29/07/2026  
> Đây là handoff chính thức cho toàn bộ website. Hãy đọc hết file này trước khi chỉnh sửa.

## 1. Thông tin nhanh

- Thư mục dự án:
  `C:\Users\hoang\Documents\Codex\2026-07-24\https-basica-co-jp`
- Website local:
  `http://localhost:3210`
- Lệnh chạy:

```powershell
npm.cmd run dev -- -p 3210
```

- Kiểm tra TypeScript:

```powershell
npm.cmd exec tsc -- --noEmit
```

- Build production:

```powershell
npm.cmd run build
```

Website local hiện tại là nguồn tham chiếu chính. Không tự ý đưa giao diện quay lại các phiên bản cũ chỉ vì asset hoặc code cũ vẫn còn trong thư mục.

## 2. Nguyên tắc bắt buộc khi tiếp tục

1. Đọc file này trước khi làm.
2. Chạy `git status --short` và giữ nguyên toàn bộ worktree đang dở.
3. Không dùng `git reset --hard`, `git checkout --`, `git clean` hoặc xóa hàng loạt.
4. Không thay hình thật của dự án bằng hình stock/generic nếu chưa được yêu cầu.
5. Giữ nguyên dấu tiếng Việt và kiểm tra kỹ line-height, word-break, overflow.
6. Sau mỗi thay đổi giao diện lớn, kiểm tra cả desktop và mobile bằng browser.
7. Chỉ commit, push hoặc deploy khi người dùng yêu cầu rõ ràng.
8. Không lưu token, mật khẩu hoặc thông tin đăng nhập trong repository.

## 3. Trạng thái tổng quan

Website đã hoàn thiện khoảng 60% theo đánh giá của người dùng. Phần khung, phong cách và phần lớn case study đã có, nhưng vẫn cần tiếp tục kiểm tra typography, bố cục responsive, chất lượng ảnh và chiều sâu nội dung từng dự án.

Các hạng mục lớn đã làm:

- Homepage và header đã được chỉnh lại nhiều vòng.
- Nhân vật ở phần giới thiệu đã đổi sang hình người dùng tự vẽ.
- Marquee kỹ năng đã chạy lặp liên tục, không còn khoảng trống đứt đoạn.
- Đã tạo cover cho các project trong archive.
- Đã bỏ project card Auroradot bị lặp.
- Đã xóa `UI SYSTEM STUDY` khỏi archive.
- Đã tạo các collection page cho nhóm dự án.
- Mood đã có cover riêng theo hướng app showcase.
- Auroradot đã được làm lại từ file Figma mới.
- Elihigh Kids đã được bổ sung thông tin và hệ 6 mascot 2D.
- Đã có một lượt audit font và thêm hệ thống typography chung.

## 4. Typography và lỗi chữ

Đây vẫn là khu vực cần ưu tiên kiểm tra kỹ nhất.

Các file liên quan:

- `app/font-system.css`
- `app/typography-fixes.css`
- `app/header-layout.css`
- `app/layout.tsx`
- `app/globals.css`

Font hiện dùng qua `next/font/google`:

- Be Vietnam Pro
- Noto Serif
- Roboto Mono

Các lỗi đã xử lý:

- Chữ tiếng Việt dính nhau do line-height quá thấp.
- Heading serif quá lớn bị nhảy dòng bất thường.
- Đoạn văn bị ép thành cột rất hẹp.
- Text chồng lên ảnh hoặc tràn sang section kế tiếp.
- Header che mất dòng mô tả ở phía trên.
- Một số breakpoint mobile làm chữ “siêu dị”.

Quy tắc khi sửa tiếp:

- Không đặt line-height tuyệt đối quá sát cho heading tiếng Việt.
- Hạn chế `word-break: break-all`.
- Không dùng chiều rộng cố định quá nhỏ cho paragraph.
- Với title lớn, kiểm tra ít nhất ở 1440 px, 1180 px, 768 px và 390 px.
- Giữ `font-system.css` và `typography-fixes.css` ở cuối chuỗi import để các bản vá có hiệu lực.

Kiểm tra TypeScript gần nhất đã pass:

```powershell
npm.cmd exec tsc -- --noEmit
```

Lưu ý: lần build gần nhất trong môi trường hạn chế mạng bị lỗi vì không tải được Google Fonts, không phải lỗi TypeScript hay component. Khi có Internet, chạy lại `npm.cmd run build`.

## 5. Homepage

### Header

- Đã sửa text phía trên bị menu che.
- CSS chính: `app/header-layout.css`.
- Vẫn cần kiểm tra các breakpoint hẹp để logo, mô tả nghề nghiệp và menu không va nhau.

### Hero

- Bố cục dùng phong cách editorial/experimental.
- Các chữ chính đã được chỉnh nhiều vòng vì từng bị hòa vào nhân vật và đè nhau.
- Khi tiếp tục, ưu tiên độ đọc rõ trước hiệu ứng stroke.

### Nhân vật phần giới thiệu

Người dùng yêu cầu dùng nguyên hình tự vẽ, không AI-redraw:

`C:\Users\hoang\Desktop\TEST\1 copy.png`

Đã tích hợp nhân vật này và thêm chuyển động nhẹ. Có thử tách rig đơn giản để tay/chân chuyển động tinh tế.

File liên quan:

- `app/mission-character.css`
- các asset `public/mission-character-*`

Không thay nhân vật này bằng nhân vật cũ hoặc ảnh tạo mới nếu người dùng chưa yêu cầu.

### Marquee kỹ năng

- Nội dung đã được nhân bản để chạy liên tục.
- Không được để xuất hiện khoảng trống trắng hoặc điểm giật khi loop.

### Project archive

Các cover đã được thiết kế lại:

- `app/project-covers.css`
- `app/project-card.tsx`
- `app/project-data.ts`

Đã xóa:

- card Auroradot bị lặp ở phần dưới.
- `UI SYSTEM STUDY`.

## 6. Các collection page

Dữ liệu chính:

- `app/collection-data.ts`
- `app/projects/[slug]/page.tsx`

Các collection hiện có:

1. Elihigh Kids
2. Character Worlds & Fantasy
3. Illustration & Manga Studies
4. Kids Game Art & UI
5. Visual Storytelling & Publishing

Route đang được xem ở thời điểm tạo note:

`http://localhost:3210/projects/character-worlds-fantasy`

Đây là nơi hợp lý để bắt đầu phiên tiếp theo: kiểm tra bố cục, font, chất lượng asset và độ đầy của nội dung cho Character Worlds & Fantasy, sau đó đi lần lượt các collection còn lại.

## 7. Auroradot

Route:

`http://localhost:3210/projects/auroradot`

File chính:

- `app/projects/auroradot/page.tsx`
- `app/auroradot-cover.css`
- `public/projects/auroradot/`

Figma nguồn đang dùng:

[Auroradot Copy](https://www.figma.com/design/djnuw1KW7lTkRc3GsJNYAd/Auroradot--Copy-?node-id=189-161&t=SfzoelI8grwHsPkV-1)

Quyết định đã chốt:

- Không dùng lại màn Child Mode cũ nếu không có trong file Figma mới.
- Case study chia thành hai mảng rõ ràng:
  - UX/UI
  - Illustration
- Illustration phải lấy các element thật trong UI, không dùng hình trang trí tự chế kém liên quan.
- Người dùng muốn nhiều hình: mục tiêu khoảng 20 màn UI và 20 illustration/element nếu source có đủ.
- Cover cần theo tinh thần showcase app: nhiều mobile screen, bố cục nghiêng/cắt khung, nền màu và chiều sâu tương tự reference “Kids Learning Mobile App”.

Phần này đã được mở rộng đáng kể nhưng vẫn nên kiểm tra lại:

- ảnh nào đang lặp;
- ảnh nào quá nhỏ hoặc mờ;
- tỷ lệ giữa UI và illustration;
- responsive mobile;
- tính chính xác so với file Figma nguồn.

## 8. Elihigh Kids

Route:

`http://localhost:3210/projects/elihigh-kids`

File chính:

- `app/projects/[slug]/page.tsx`
- `app/collection-data.ts`
- `app/elihigh-mascots.css`
- `public/projects/drive-curated/elihigh-kids/`

Nguồn nội dung và hình ảnh:

[Elihigh Kids Character Design trên Behance](https://www.behance.net/gallery/198442251/Elihigh-Kids-Character-Design)

Thông tin đã thêm vào case study:

- Dự án được đăng ngày 31/05/2024.
- Studio Delpic phát triển character system cho Megastudy Elihigh Kids.
- Hệ nhân vật hướng đến engagement, cooperation và problem-solving.

### Trạng thái mascot đã chốt

Phải có đúng 6 mascot, đều là hình 2D và trình bày cân đối trong grid 3 × 2:

1. Pang-i
2. Buzzbee
3. Toto
4. Oki
5. Dino-kung
6. Pupu

Asset đang dùng:

- `mascot-pangi-2d-official.webp`
- `mascot-buzzbee-2d-official.webp`
- `mascot-toto-2d-official.webp`
- `mascot-oki-2d-official.webp`
- `mascot-dinokung-2d-clean.webp`
- `mascot-pupu-2d-official.webp`

Tất cả nằm trong:

`public/projects/drive-curated/elihigh-kids/`

Lưu ý quan trọng:

- Người dùng không muốn trộn 2D và 3D.
- Toto và Dino từng bị mờ; hiện đã thay bằng bản rõ hơn.
- Dino-kung đã được tách sạch từ character sheet.
- Trong thư mục vẫn còn một số asset thử nghiệm hoặc crop 3D cũ, nhưng chúng không còn được tham chiếu.
- Không quay lại các asset 3D hoặc phiên bản mascot cũ.
- Giữ kích thước nhân vật, khoảng trắng và nhãn tên đồng đều giữa 6 card.

Lượt QA gần nhất cho thấy grid 3 × 2 đã cân đối và TypeScript pass.

## 9. Mood

Route:

`http://localhost:3210/projects/mood`

File chính:

- `app/projects/mood/`
- `public/projects/mood/`

Cover đã được thiết kế lại theo hướng product showcase, lấy cảm hứng từ reference HabitUp:

- có nhiều screen/app layer;
- nền có màu và bố cục thay vì chỉ đặt logo giữa khung;
- tránh quay lại cover trắng trống chỉ có logo.

Vẫn nên kiểm tra ảnh ở desktop và mobile để bảo đảm crop không mất nội dung chính.

## 10. ABEECI và Fix Now

Các trang này đã được làm từ asset thật và từng được kiểm tra riêng.

Nguyên tắc:

- Không thay asset thật bằng ảnh generic.
- Không làm lại toàn bộ visual direction nếu không có yêu cầu mới.
- Nếu typography chung ảnh hưởng tới chúng, chỉ sửa có kiểm soát và kiểm tra lại visual.

File ABEECI:

- `app/projects/abeeci/page.tsx`

## 11. File quan trọng cần xem trước khi sửa

- `AGENTS.md`
- `CONTINUE_NEXT_WEEK.md`
- `app/layout.tsx`
- `app/globals.css`
- `app/font-system.css`
- `app/typography-fixes.css`
- `app/header-layout.css`
- `app/page.tsx`
- `app/project-data.ts`
- `app/project-card.tsx`
- `app/project-covers.css`
- `app/collection-data.ts`
- `app/projects/[slug]/page.tsx`
- `app/projects/auroradot/page.tsx`
- `app/elihigh-mascots.css`

## 12. Worktree và Git

Worktree hiện có nhiều file đã sửa và file mới chưa track. Đây là trạng thái làm việc hợp lệ của người dùng.

Trước khi làm:

```powershell
git status --short
git diff --stat
```

Không được:

- reset toàn repo;
- clean file untracked;
- checkout đè lên thay đổi;
- commit toàn bộ một cách máy móc;
- push/deploy khi chưa được yêu cầu.

Nếu lịch sử cũ có token GitHub từng xuất hiện, không sao chép token đó vào note, code hoặc lệnh. Nên thu hồi token cũ nếu chưa làm.

## 13. Checklist QA cho phiên tiếp theo

Sau mỗi nhóm thay đổi:

1. Chạy `npm.cmd exec tsc -- --noEmit`.
2. Mở homepage ở desktop và mobile.
3. Kiểm tra lần lượt:
   - `/`
   - `/projects/auroradot`
   - `/projects/elihigh-kids`
   - `/projects/character-worlds-fantasy`
   - `/projects/illustration-manga-studies`
   - `/projects/kids-game-art-ui`
   - `/projects/visual-storytelling-publishing`
   - `/projects/mood`
   - `/projects/abeeci`
4. Tìm:
   - chữ dính nhau;
   - dấu tiếng Việt bị cắt;
   - heading nhảy dòng xấu;
   - paragraph bị ép thành cột hẹp;
   - chữ đè lên ảnh;
   - ảnh tràn khỏi section;
   - khoảng trắng bất thường;
   - layout vỡ ở 390 px.
5. Khi mạng cho phép, chạy `npm.cmd run build`.

## 14. Thứ tự đề xuất cho ngày tiếp theo

1. Hoàn thiện `Character Worlds & Fantasy` đang mở dở.
2. Audit typography lần cuối trên toàn bộ collection pages.
3. Kiểm tra lại 6 mascot Elihigh ở mobile.
4. Soát Auroradot: đủ ảnh, đúng source Figma, không lặp và không còn màn cũ.
5. Chuẩn hóa cover project để cùng chất lượng nhưng không bị đồng dạng.
6. Tối ưu asset quá nặng hoặc mờ.
7. Chạy build khi có kết nối Google Fonts.
8. Chỉ sau khi người dùng duyệt mới chuẩn bị commit/push/deploy.

## 15. Prompt gợi ý để tiếp tục

Có thể bắt đầu phiên mới bằng câu:

> Đọc toàn bộ `CONTINUE_NEXT_WEEK.md`, kiểm tra `git status`, mở website local ở `http://localhost:3210` và giữ nguyên mọi thay đổi hiện có. Tiếp tục từ trang `Character Worlds & Fantasy`, sau đó QA font và responsive cho toàn bộ homepage cùng các project.


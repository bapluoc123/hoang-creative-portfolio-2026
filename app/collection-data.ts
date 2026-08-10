import type { ProjectCategory } from "./project-data";

export type CuratedCollection = {
  slug: string;
  title: string;
  type: string;
  category: ProjectCategory;
  description: string;
  intro: string;
  images: string[];
  chapters?: Array<{
    title: string;
    type: string;
    description: string;
    images: string[];
  }>;
  brandImages?: string[];
  sources?: Array<{ label: string; url: string }>;
  caseStudy?: {
    client: string;
    market: string;
    audience: string;
    product: string;
    challenge: string;
    approach: string;
    outcome: string;
    disciplines: string[];
    principles: Array<{ title: string; description: string }>;
  };
  tone: "yellow" | "cyan" | "pink" | "paper" | "violet";
  imageFit?: "cover" | "contain";
};

const assetRoot = "/projects/drive-curated";
const collectionImages = (slug: string, count: number) =>
  Array.from({ length: count }, (_, index) =>
    `${assetRoot}/${slug}/${String(index + 1).padStart(2, "0")}.webp`
  );

const sourceCollections: CuratedCollection[] = [
  {
    slug: "elihigh-kids",
    title: "ELIHIGH KIDS",
    type: "UI Design · Illustration · 2023",
    category: "UI/UX",
    description: "Hệ thống minigame học tập giàu màu sắc dành cho thương hiệu giáo dục mầm non Elihigh Kids tại Hàn Quốc.",
    intro: "Bộ màn hình biến các bài học dành cho trẻ 4–7 tuổi thành những hoạt động ngắn, trực quan và vui nhộn: khám phá động vật, ghép hình, trồng cây, làm đồ ăn, vận động và sáng tạo. Giao diện sử dụng nhân vật thân thiện, chỉ dẫn rõ ràng và phản hồi tức thì để trẻ có thể vừa chơi vừa học.",
    images: collectionImages("elihigh-kids", 18),
    brandImages: Array.from(
      { length: 8 },
      (_, index) => `${assetRoot}/elihigh-kids/brand-${String(index + 1).padStart(2, "0")}.webp`,
    ),
    sources: [
      { label: "ELIHIGH KIDS OFFICIAL", url: "https://elikids.mbest.co.kr/?nomobile=1" },
      { label: "BRAND WORLD BY COBB STUDIO", url: "https://cobb.tv/portfolio/elihigh-kids/" },
      { label: "CHARACTER DESIGN BY STUDIO DELPIC", url: "https://www.behance.net/gallery/198442251/Elihigh-Kids-Character-Design" },
    ],
    caseStudy: {
      client: "Megastudy Education / Elihigh Kids",
      market: "South Korea",
      audience: "Children aged 4–7",
      product: "Smart tablet learning",
      challenge: "Biến nội dung giáo dục thành những thử thách đủ đơn giản để trẻ hiểu ngay, nhưng vẫn đa dạng để duy trì sự tò mò qua nhiều môn học và hoạt động.",
      approach: "Mỗi minigame được tổ chức quanh một nhiệm vụ chính, nhân vật dẫn dắt, nút thao tác tương phản cao và phản hồi trực tiếp sau từng hành động.",
      outcome: "Một bộ 18 màn hình có cùng ngôn ngữ hình ảnh nhưng đủ linh hoạt cho các chủ đề từ khám phá động vật, thủ công, vận động đến sáng tạo.",
      disciplines: ["Korean", "Math", "English", "Coding & Exploration"],
      principles: [
        {
          title: "ONE CLEAR TASK",
          description: "Mỗi màn hình tập trung vào một hành động chính để trẻ có thể bắt đầu mà không cần đọc hướng dẫn dài.",
        },
        {
          title: "CHARACTER GUIDANCE",
          description: "Nhân vật tạo cảm giác đồng hành, giải thích nhiệm vụ và giúp phản hồi đúng–sai trở nên nhẹ nhàng hơn.",
        },
        {
          title: "INSTANT FEEDBACK",
          description: "Màu sắc, chuyển trạng thái và phần thưởng xác nhận ngay kết quả của từng thao tác.",
        },
      ],
    },
    tone: "cyan",
    imageFit: "contain",
  },
  {
    slug: "little-red-riding-hood",
    title: "LITTLE RED RIDING HOOD",
    type: "Character & Environment Design",
    category: "2D GAME ART",
    description: "Bộ thiết kế nhân vật và bối cảnh cho thế giới Cô bé quàng khăn đỏ.",
    intro: "Một series phát triển đồng thời nhân vật, turnaround và môi trường để toàn bộ câu chuyện giữ chung ngôn ngữ hình ảnh.",
    images: collectionImages("little-red-riding-hood", 13),
    tone: "pink",
    imageFit: "contain",
  },
  {
    slug: "god-of-heaven",
    title: "GOD OF HEAVEN",
    type: "Character Line-up & Concept Art",
    category: "2D GAME ART",
    description: "Phát triển đội hình nhân vật fantasy từ phác thảo đến key visual.",
    intro: "Bộ concept tập trung vào silhouette, trang phục và tương quan màu sắc giữa các nhân vật trong cùng một thế giới.",
    images: collectionImages("god-of-heaven", 7),
    tone: "yellow",
    imageFit: "contain",
  },
  {
    slug: "the-purgers",
    title: "THE PURGERS",
    type: "Character Design System",
    category: "2D GAME ART",
    description: "Hệ nhân vật game gồm key art, exploration và turnaround.",
    intro: "Từ ảnh đại diện nhóm đến từng bộ sheet riêng, series cho thấy quá trình biến ý tưởng thành một cast có cá tính thống nhất.",
    images: collectionImages("the-purgers", 5),
    tone: "violet",
    imageFit: "contain",
  },
  {
    slug: "editorial-illustration",
    title: "EDITORIAL ILLUSTRATIONS",
    type: "Narrative Illustration",
    category: "ILLUSTRATION",
    description: "Tuyển tập minh họa kể chuyện với màu sắc nhẹ và giàu cảm xúc.",
    intro: "Những khoảnh khắc đời thường được chuyển thành hình ảnh có nhịp kể, từ sự vui nhộn đến cảm giác yên tĩnh.",
    images: collectionImages("editorial-illustration", 11),
    tone: "cyan",
  },
  {
    slug: "manga-color-studies",
    title: "MANGA COLOR STUDIES",
    type: "Anime & Manga Studies",
    category: "ILLUSTRATION",
    description: "Nghiên cứu line art, ánh sáng và diễn họa nhân vật manga.",
    intro: "Một bộ thử nghiệm tập trung vào nét, biểu cảm và cách dùng mảng màu để tạo chiều sâu cho nhân vật.",
    images: collectionImages("manga-color-studies", 20),
    tone: "paper",
    imageFit: "contain",
  },
  {
    slug: "kid-song-worlds",
    title: "KID SONG WORLDS",
    type: "Kids Environment & Props",
    category: "2D GAME ART",
    description: "Bối cảnh và đạo cụ nhiều màu sắc dành cho nội dung âm nhạc trẻ em.",
    intro: "Các scene và prop được thiết kế theo cùng một hệ hình khối vui nhộn, dễ nhận biết và thân thiện với trẻ nhỏ.",
    images: collectionImages("kid-song-worlds", 12),
    tone: "yellow",
  },
  {
    slug: "cake-puzzle-ui",
    title: "CAKE PUZZLE UI",
    type: "Mobile Puzzle Game UI",
    category: "2D GAME ART",
    description: "Giao diện game puzzle với board, vật phẩm và trạng thái phần thưởng.",
    intro: "Một hệ UI game mobile chú trọng khả năng đọc nhanh, màu sắc hấp dẫn và phản hồi rõ ràng sau mỗi hành động.",
    images: collectionImages("cake-puzzle-ui", 12),
    tone: "pink",
    imageFit: "contain",
  },
  {
    slug: "portrait-fan-art",
    title: "PORTRAIT FAN ART",
    type: "Portrait Illustration",
    category: "ILLUSTRATION",
    description: "Ba hướng diễn họa chân dung từ sketch đến digital painting.",
    intro: "Series khám phá độ tương phản giữa nét chì, màu điện ảnh và ngôn ngữ manga trong cùng chủ đề chân dung.",
    images: collectionImages("portrait-fan-art", 3),
    tone: "paper",
    imageFit: "contain",
  },
  {
    slug: "storyboard-frames",
    title: "STORYBOARD FRAMES",
    type: "Visual Storytelling",
    category: "ILLUSTRATION",
    description: "Tuyển chọn storyboard thể hiện nhịp cảnh, góc máy và hành động.",
    intro: "Các frame tập trung vào staging và chuyển động để ý tưởng có thể được đọc nhanh trước khi bước vào sản xuất.",
    images: collectionImages("storyboard-frames", 11),
    tone: "paper",
    imageFit: "contain",
  },
  {
    slug: "book-cover-illustration",
    title: "BOOK COVER & ILLUSTRATION",
    type: "Publishing Illustration",
    category: "ILLUSTRATION",
    description: "Thiết kế bìa, dàn trang và mockup cho nội dung sách thiếu nhi.",
    intro: "Project kết hợp minh họa nhân vật, hệ màu và ứng dụng thực tế trên bìa sách để tạo một bộ nhận diện xuất bản hoàn chỉnh.",
    images: collectionImages("book-cover-illustration", 11),
    tone: "cyan",
  },
  {
    slug: "character-explorations",
    title: "CHARACTER EXPLORATIONS",
    type: "Expression & Character Studies",
    category: "ILLUSTRATION",
    description: "Tuyển tập nghiên cứu biểu cảm, hình khối và cá tính nhân vật.",
    intro: "Những bài thực hành tập trung vào khuôn mặt, nhịp điệu hình dáng và cách một nhân vật truyền tải cảm xúc trước khi bước vào thiết kế hoàn chỉnh.",
    images: collectionImages("character-explorations", 4),
    tone: "pink",
    imageFit: "contain",
  },
  {
    slug: "mobile-game-ui",
    title: "MOBILE GAME UI",
    type: "Game Screens & Interface Studies",
    category: "2D GAME ART",
    description: "Tuyển tập màn hình, HUD và thử nghiệm giao diện cho game mobile.",
    intro: "Các màn hình được gom thành một hệ thống nghiên cứu UI game, từ bố cục gameplay đến cấp độ, phần thưởng và các trạng thái tương tác.",
    images: collectionImages("mobile-game-ui", 11),
    tone: "violet",
    imageFit: "contain",
  },
];

const source = (slug: string) => {
  const collection = sourceCollections.find((item) => item.slug === slug);
  if (!collection) throw new Error(`Missing source collection: ${slug}`);
  return collection;
};

const chapter = (slug: string, description: string) => {
  const collection = source(slug);
  return {
    title: collection.title,
    type: collection.type,
    description,
    images: collection.images,
  };
};

const mergedCollection = (
  collection: Omit<CuratedCollection, "images"> & { chapters: NonNullable<CuratedCollection["chapters"]> },
): CuratedCollection => ({
  ...collection,
  images: collection.chapters.flatMap((item) => item.images),
});

export const curatedCollections: CuratedCollection[] = [
  source("elihigh-kids"),
  mergedCollection({
    slug: "character-worlds-fantasy",
    title: "CHARACTER WORLDS & FANTASY",
    type: "Character Design · Concept Art · Environment",
    category: "2D GAME ART",
    description: "Một tuyển tập lớn về thiết kế nhân vật, biểu cảm và xây dựng thế giới, trải dài từ truyện cổ tích đến fantasy game.",
    intro: "Bốn chương cho thấy quá trình phát triển nhân vật ở nhiều cấp độ: nghiên cứu biểu cảm, xây dựng cast, tạo silhouette và đặt nhân vật vào một thế giới có bối cảnh riêng.",
    chapters: [
      chapter("little-red-riding-hood", "Thiết kế nhân vật và bối cảnh cho thế giới Cô bé quàng khăn đỏ."),
      chapter("character-explorations", "Các nghiên cứu biểu cảm, hình khối và cá tính trước khi hoàn thiện nhân vật."),
      chapter("god-of-heaven", "Đội hình nhân vật fantasy được phát triển từ silhouette đến trang phục và key visual."),
      chapter("the-purgers", "Một character system gồm key art, exploration và turnaround cho game."),
    ],
    tone: "yellow",
    imageFit: "contain",
  }),
  mergedCollection({
    slug: "illustration-manga-studies",
    title: "ILLUSTRATION & MANGA STUDIES",
    type: "Editorial · Portrait · Anime & Manga",
    category: "ILLUSTRATION",
    description: "Tuyển tập minh họa cá nhân kết hợp kể chuyện, chân dung, line art và nghiên cứu màu theo ngôn ngữ manga.",
    intro: "Ba chương được sắp xếp như một sketchbook mở rộng: từ khoảnh khắc kể chuyện giàu cảm xúc, nghiên cứu ánh sáng–màu sắc đến diễn họa chân dung.",
    chapters: [
      chapter("editorial-illustration", "Những minh họa kể chuyện với nhịp nhẹ, màu sắc mềm và cảm xúc đời thường."),
      chapter("manga-color-studies", "Nghiên cứu line art, ánh sáng, biểu cảm và các hướng tô màu nhân vật manga."),
      chapter("portrait-fan-art", "Các hướng diễn họa chân dung từ sketch đến digital painting."),
    ],
    tone: "paper",
    imageFit: "contain",
  }),
  mergedCollection({
    slug: "kids-game-art-ui",
    title: "KIDS GAME ART & UI",
    type: "Kids Environment · Puzzle UI · Mobile Game",
    category: "2D GAME ART",
    description: "Một collection về thiết kế game dành cho trẻ em, kết hợp thế giới minh họa, đạo cụ và hệ giao diện tương tác.",
    intro: "Ba chương đi từ environment và props nhiều màu sắc đến puzzle interface và những thử nghiệm HUD cho mobile game, cùng giữ ưu tiên đọc nhanh và phản hồi trực quan.",
    chapters: [
      chapter("kid-song-worlds", "Bối cảnh và đạo cụ giàu màu sắc dành cho nội dung âm nhạc trẻ em."),
      chapter("cake-puzzle-ui", "Hệ giao diện puzzle gồm board, vật phẩm và trạng thái phần thưởng."),
      chapter("mobile-game-ui", "Các màn hình, HUD và thử nghiệm tương tác cho game mobile."),
    ],
    tone: "pink",
    imageFit: "contain",
  }),
  mergedCollection({
    slug: "visual-storytelling-publishing",
    title: "VISUAL STORYTELLING & PUBLISHING",
    type: "Storyboard · Book Cover · Publishing",
    category: "ILLUSTRATION",
    description: "Tuyển tập kể chuyện bằng hình ảnh, từ nhịp cảnh storyboard đến thiết kế bìa và ứng dụng xuất bản.",
    intro: "Hai chương nối quá trình kể chuyện từ khung hình thô đến sản phẩm hoàn thiện: staging, góc máy, minh họa nhân vật, dàn trang và mockup.",
    chapters: [
      chapter("storyboard-frames", "Storyboard tập trung vào staging, chuyển động, góc máy và nhịp kể."),
      chapter("book-cover-illustration", "Thiết kế bìa, minh họa và mockup cho nội dung sách thiếu nhi."),
    ],
    tone: "cyan",
    imageFit: "contain",
  }),
];

export type ProjectCategory = "UI/UX" | "DESIGN SYSTEM" | "2D GAME ART" | "ILLUSTRATION";

export type Project = {
  number: string;
  title: string;
  type: string;
  description: string;
  category: ProjectCategory;
  image: string | null;
  href: string | null;
  featured: boolean;
  stamp?: string;
  tone: "yellow" | "cyan" | "pink" | "paper" | "violet";
  imageFit?: "cover" | "contain";
};

export const allProjects: Project[] = [
  {
    number: "01",
    title: "FIX NOW",
    type: "UI/UX Product Design · 2024",
    description: "Ứng dụng kết nối hộ gia đình với thợ sửa chữa uy tín, tích hợp AI chẩn đoán và báo giá minh bạch.",
    category: "UI/UX",
    image: "/projects/fixnow-cover.png",
    href: "/projects/fix-now",
    featured: true,
    stamp: "MOBILE APP",
    tone: "cyan",
  },
  {
    number: "02",
    title: "ABEECI",
    type: "UI/UX Design & 2D Art",
    description: "Ứng dụng học tập cho trẻ em kết hợp bài học, minigame, phần thưởng và khu vực dành cho phụ huynh.",
    category: "UI/UX",
    image: "/projects/abeeci-home.png",
    href: "/projects/abeeci",
    featured: true,
    stamp: "EDUCATION",
    tone: "yellow",
  },
  {
    number: "03",
    title: "AURORADOT",
    type: "2D Game Art · 2024",
    description: "Thế giới phiêu lưu 2D giúp trẻ em học tư duy toán học và khám phá thiên nhiên qua những khu rừng phép thuật.",
    category: "2D GAME ART",
    image: "/projects/auroradot-cover.png",
    href: null,
    featured: true,
    stamp: "GAME ART",
    tone: "violet",
  },
  {
    number: "04",
    title: "COQNIT",
    type: "Product Design · SaaS",
    description: "Nền tảng AI marketing dành cho ứng dụng.",
    category: "UI/UX",
    image: null,
    href: null,
    featured: false,
    tone: "pink",
  },
  {
    number: "05",
    title: "KIDMOOD",
    type: "UI/UX · Illustration",
    description: "Ứng dụng hỗ trợ cảm xúc cho gia đình.",
    category: "ILLUSTRATION",
    image: null,
    href: null,
    featured: false,
    tone: "yellow",
  },
  {
    number: "06",
    title: "UI SYSTEM STUDY",
    type: "Design System",
    description: "Xây dựng nền tảng, component và trạng thái giao diện.",
    category: "DESIGN SYSTEM",
    image: "/projects/ui-system-study.png",
    href: null,
    featured: false,
    tone: "paper",
    imageFit: "contain",
  },
  {
    number: "07",
    title: "LEARNING ASSETS",
    type: "Concept Art · Illustration",
    description: "Hơn 100 tài nguyên cho game giáo dục.",
    category: "ILLUSTRATION",
    image: null,
    href: null,
    featured: false,
    tone: "cyan",
  },
  {
    number: "08",
    title: "CHARACTERS & WORLDS",
    type: "Concept Art",
    description: "Bộ sưu tập phát triển hình ảnh kỳ ảo.",
    category: "2D GAME ART",
    image: null,
    href: null,
    featured: false,
    tone: "violet",
  },
  {
    number: "09",
    title: "MOBILE GAME UI",
    type: "Game UI · Illustration",
    description: "Giao diện và asset cho game giải đố.",
    category: "2D GAME ART",
    image: null,
    href: null,
    featured: false,
    tone: "paper",
  },
];

export const featuredProjects = allProjects.filter((project) => project.featured);
export const projectFilters = ["TẤT CẢ", "UI/UX", "DESIGN SYSTEM", "2D GAME ART", "ILLUSTRATION"] as const;

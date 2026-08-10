import { curatedCollections } from "./collection-data";

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

const originalProjects: Project[] = [
  {
    number: "01",
    title: "FIX NOW",
    type: "UX/UI Design · 2026",
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
    type: "UX/UI Design · 2025",
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
    title: "MOOD",
    type: "UX/UI Design · 2026",
    description: "Ứng dụng chăm sóc sức khỏe tinh thần giúp người dùng check-in cảm xúc, hiểu nguyên nhân và chọn bài tập điều hòa phù hợp.",
    category: "UI/UX",
    image: "/projects/mood/logo-system.png",
    href: "/projects/mood",
    featured: true,
    stamp: "MENTAL WELLNESS",
    tone: "cyan",
    imageFit: "contain",
  },
  {
    number: "04",
    title: "AURORADOT",
    type: "UX/UI Design · Illustration · 2026",
    description: "Hệ sinh thái học tập cảm xúc giúp trẻ gọi tên cảm xúc, giáo viên nhận biết nhu cầu hỗ trợ và thanh thiếu niên theo dõi hành trình phát triển.",
    category: "UI/UX",
    image: "/projects/auroradot/cover.png",
    href: "/projects/auroradot",
    featured: true,
    stamp: "EDTECH / SEL",
    tone: "pink",
  },
  {
    number: "05",
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
];

const curatedProjects: Project[] = curatedCollections.map((collection, index) => ({
  number: String(index + 1).padStart(2, "0"),
  title: collection.title,
  type: collection.type,
  description: collection.description,
  category: collection.category,
  image: collection.images[0],
  href: `/projects/${collection.slug}`,
  featured: collection.slug === "elihigh-kids",
  tone: collection.tone,
  imageFit: collection.imageFit,
}));

const featuredOriginalProjects = originalProjects.filter((project) => project.featured);
const archiveOriginalProjects = originalProjects.filter(
  (project) => !project.featured && project.title !== "UI SYSTEM STUDY",
);

export const allProjects: Project[] = [
  ...featuredOriginalProjects,
  curatedProjects[0],
  ...archiveOriginalProjects,
  ...curatedProjects.slice(1),
].map((project, index) => ({
  ...project,
  number: String(index + 1).padStart(2, "0"),
}));

export const featuredProjects = allProjects.filter((project) => project.featured);
export const projectFilters = ["TẤT CẢ", "UI/UX", "DESIGN SYSTEM", "2D GAME ART", "ILLUSTRATION"] as const;

import type { Metadata } from "next";
import Image from "../../unoptimized-image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { curatedCollections } from "../../collection-data";
import { CustomCursor } from "../../custom-cursor";
import { BrandLogo } from "../../brand-logo";

type CollectionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return curatedCollections.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = curatedCollections.find((item) => item.slug === slug);

  if (!collection) return {};

  return {
    title: `${collection.title} — Huy Hoàng`,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collectionIndex = curatedCollections.findIndex((item) => item.slug === slug);

  if (collectionIndex < 0) notFound();

  const collection = curatedCollections[collectionIndex];
  const nextCollection = curatedCollections[(collectionIndex + 1) % curatedCollections.length];
  const role = collection.slug === "elihigh-kids"
    ? "UX/UI Designer · Illustrator"
    : collection.category === "UI/UX"
      ? "UX/UI Designer"
    : collection.category === "2D GAME ART"
      ? "2D Artist / Visual Designer"
      : "Illustrator / Visual Artist";
  const platform = collection.category === "UI/UX"
    ? "Digital Product"
    : collection.category === "2D GAME ART"
      ? "Game / Interactive"
      : "Illustration / Publishing";
  const isElihighKids = collection.slug === "elihigh-kids";
  const coverImage = isElihighKids
    ? "/projects/drive-curated/elihigh-kids/behance-cover.jpg"
    : collection.coverImage ?? collection.images[0];
  const hasProvidedCover = Boolean(collection.coverImage);

  return (
    <main className={`fix-case collection-page collection-case tone-${collection.tone}`}>
      <CustomCursor />
      <header className="fix-case-nav collection-case-nav">
        <Link className="fix-case-brand" href="/" aria-label="Về trang chủ"><BrandLogo compact /></Link>
        <span>{String(collectionIndex + 1).padStart(2, "0")} / PROJECT CASE STUDY</span>
        <Link href="/projects">← TẤT CẢ DỰ ÁN</Link>
      </header>

      <section className="fix-case-hero collection-case-hero paper-noise">
        <div className="fix-case-hero-copy">
          <span>{collection.category} · {collection.type}</span>
          <h1 className={collection.title.length > 24 ? "is-long" : undefined}>{collection.title}</h1>
          <p>{collection.intro}</p>
        </div>

        <div className="fix-case-hero-meta">
          <div>
            <small>VAI TRÒ</small>
            <strong>{role}</strong>
          </div>
          <div>
            <small>PHẠM VI</small>
            <strong>{collection.type}</strong>
          </div>
          <div>
            <small>NỀN TẢNG</small>
            <strong>{platform}</strong>
          </div>
        </div>

        <figure className={`fix-case-hero-visual collection-case-cover${isElihighKids ? " is-elihigh-cover" : ""}${hasProvidedCover ? " is-provided-cover" : ""}`}>
          <Image
            alt={`${collection.title} — project cover`}
            fill
            priority
            sizes="100vw"
            src={coverImage}
          />
          <span>{collection.title}</span>
        </figure>
      </section>

      <section className="collection-project-intro paper-noise">
        <span>PROJECT INTRO</span>
        <h2>{collection.caseStudy ? <>A learning brand<br /><em>built around wonder.</em></> : <>A visual archive<br /><em>with one clear voice.</em></>}</h2>
        <div>
          <p>{collection.description}</p>
          <dl>
            <div><dt>TYPE</dt><dd>{collection.type}</dd></div>
            <div><dt>FIELD</dt><dd>{collection.category}</dd></div>
          </dl>
        </div>
      </section>

      {collection.caseStudy && collection.brandImages && (
        <>
          <section className="elihigh-brand">
            <div className="elihigh-brand-copy">
              <span>01 / ABOUT THE BRAND</span>
              <Image
                alt="Elihigh Kids"
                className="elihigh-brand-logo"
                height={220}
                src="/projects/drive-curated/elihigh-kids/brand-logo.webp"
                width={560}
              />
              <h2>Premium learning<br />for curious kids.</h2>
              <p>
                Elihigh Kids là thương hiệu học tập thông minh dành cho trẻ mầm non của Megastudy Education tại Hàn Quốc.
                Sản phẩm kết hợp nội dung trên tablet, bài tập tương tác và học liệu in để trẻ 4–7 tuổi tiếp cận việc học
                bằng trải nghiệm trực quan, ngắn gọn và giàu cảm xúc.
              </p>
            </div>
            <div className="elihigh-brand-facts">
              <article><strong>4–7</strong><span>ĐỘ TUỔI TRỌNG TÂM</span></article>
              <article><strong>04</strong><span>NHÓM MÔN HỌC CHÍNH</span></article>
              <article><strong>KR</strong><span>THỊ TRƯỜNG HÀN QUỐC</span></article>
              <article><strong>PAD</strong><span>SMART LEARNING PRODUCT</span></article>
            </div>
          </section>

          <section className="elihigh-learning-system">
            <div className="elihigh-learning-heading">
              <span>02 / LEARNING SYSTEM</span>
              <h2>Many subjects.<br /><em>One playful language.</em></h2>
            </div>
            <div className="elihigh-subject-grid">
              {collection.caseStudy.disciplines.map((discipline, index) => (
                <article key={discipline}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{discipline}</strong>
                </article>
              ))}
            </div>
            <div className="elihigh-design-bridge">
              <span>FROM BRAND TO PRODUCT SCREENS</span>
              <h3>Từ thế giới thương hiệu đến các màn hình tôi thực hiện.</h3>
              <p>{collection.caseStudy.approach}</p>
              <div>
                {collection.caseStudy.principles.map((principle, index) => (
                  <article key={principle.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{principle.title}</strong>
                    <p>{principle.description}</p>
                  </article>
                ))}
              </div>
            </div>
            {collection.sources && (
              <div className="collection-brand-sources">
                <span>BRAND REFERENCES</span>
                {collection.sources.map((source) => (
                  <a href={source.url} key={source.url} rel="noreferrer" target="_blank">{source.label} ↗</a>
                ))}
              </div>
            )}
          </section>
        </>
      )}

      <div className="collection-work-heading">
        <span>{collection.caseStudy ? "03 / MY PROJECT SCREENS" : "SELECTED WORK"}</span>
        <h2>{collection.caseStudy ? <>Playful interfaces.<br /><em>Clear learning moments.</em></> : <>Selected work<br /><em>in application.</em></>}</h2>
      </div>

      {collection.chapters ? (
        <section className="collection-chapters" aria-label={`Các chương của dự án ${collection.title}`}>
          {collection.chapters.map((chapter, chapterIndex) => (
            <article className="collection-chapter" key={chapter.title}>
              <header className="collection-chapter-heading">
                <span>CHAPTER {String(chapterIndex + 1).padStart(2, "0")} / {String(collection.chapters?.length).padStart(2, "0")}</span>
                <h3>{chapter.title}</h3>
                <div>
                  <strong>{chapter.type}</strong>
                  <p>{chapter.description}</p>
                </div>
              </header>
              <div className="collection-gallery is-chapter">
                {chapter.images.map((image, imageIndex) => (
                  <figure
                    className={imageIndex === 0 ? "collection-shot is-featured" : "collection-shot"}
                    key={image}
                  >
                    <Image
                      alt={`${chapter.title} — hình ${imageIndex + 1}`}
                      fill
                      priority={chapterIndex === 0 && imageIndex === 0}
                      sizes={imageIndex === 0 ? "100vw" : "(max-width: 720px) 100vw, 50vw"}
                      src={image}
                    />
                    <figcaption>
                      <span>{String(imageIndex + 1).padStart(2, "0")}</span>
                      <span>{chapter.title}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </section>
      ) : (
        <section className="collection-gallery" aria-label={`Hình ảnh dự án ${collection.title}`}>
          {collection.images.map((image, index) => (
            <figure
              className={index === 0 ? "collection-shot is-featured" : "collection-shot"}
              key={image}
            >
              <Image
                alt={`${collection.title} — hình ${index + 1}`}
                fill
                priority={index === 0}
                sizes={index === 0 ? "100vw" : "(max-width: 720px) 100vw, 50vw"}
                src={image}
              />
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{collection.type}</span>
              </figcaption>
            </figure>
          ))}
        </section>
      )}

      <section className="collection-next">
        <span>PROJECT TIẾP THEO</span>
        <Link href={`/projects/${nextCollection.slug}`}>
          {nextCollection.title}<b>↗</b>
        </Link>
      </section>

      <footer className="collection-footer">
        <span>HUY HOÀNG © 2026</span>
        <Link href="/projects">PROJECT ARCHIVE</Link>
      </footer>
    </main>
  );
}

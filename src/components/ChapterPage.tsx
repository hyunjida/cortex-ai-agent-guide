import type { Chapter } from "../types/guide";
import GuideBlockView from "./GuideBlockView";
import ZoomableImage from "./ZoomableImage";

type ChapterPageProps = {
  chapter: Chapter;
  completed: boolean;
  onComplete: () => void;
  onNext: () => void;
  hasNext: boolean;
};

export default function ChapterPage({ chapter, completed, onComplete, onNext, hasNext }: ChapterPageProps) {
  const outcomes = <section className="outcomes">
    <span>이 장을 마치면</span>
    <ul>{chapter.outcomes.map((item) => <li key={item}><i>✓</i>{item}</li>)}</ul>
  </section>;
  const screenFirst = chapter.learningLayout === "screen-first";

  return (
    <article className="chapter-page" key={chapter.id}>
      <header className="chapter-hero">
        <div className="chapter-meta"><span>CHAPTER {chapter.no}</span><i /><span>{chapter.time}</span><i /><span>{chapter.audience}</span></div>
        <h1 className="chapter-title">{chapter.title}</h1><p>{chapter.description}</p>
        {!screenFirst && chapter.path && <div className="chapter-path"><span>MENU PATH</span><code>{chapter.path}</code></div>}
        {chapter.heroIntro && <p className="chapter-hero-intro">{chapter.heroIntro}</p>}
        {chapter.heroExample && <figure className="screen-example hero-screen-example">
          <div className="screen-example-heading"><span>{chapter.heroExample.label}</span><h2>{chapter.heroExample.title}</h2></div>
          <ZoomableImage src={chapter.heroExample.src} alt={chapter.heroExample.alt} />
          <figcaption>{chapter.heroExample.caption}</figcaption>
        </figure>}
        {chapter.heroImage && <ZoomableImage className="chapter-hero-image-link" src={chapter.heroImage.src} alt={chapter.heroImage.alt} />}
      </header>
      {outcomes}
      {screenFirst && chapter.path && <div className="chapter-path chapter-path-after-outcomes"><span>MENU PATH</span><code>{chapter.path}</code></div>}
      <div className="chapter-content">{chapter.blocks.map((block, index) => <GuideBlockView block={block} key={`${block.title}-${index}`} />)}</div>
      <footer className="chapter-footer">
        <button className={`complete-chapter ${completed ? "done" : ""}`} onClick={onComplete}>
          <span>{completed ? "✓" : "○"}</span>{completed ? "학습 완료" : "이 장을 완료했어요"}
        </button>
        {hasNext && <button className="button" onClick={onNext}>다음 장 <span>→</span></button>}
      </footer>
    </article>
  );
}

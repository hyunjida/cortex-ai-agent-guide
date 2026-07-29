import type { Chapter } from "../types/guide";
import GuideBlockView from "./GuideBlockView";

type ChapterPageProps = {
  chapter: Chapter;
  completed: boolean;
  onComplete: () => void;
  onNext: () => void;
  hasNext: boolean;
};

export default function ChapterPage({ chapter, completed, onComplete, onNext, hasNext }: ChapterPageProps) {
  return (
    <article className="chapter-page" key={chapter.id}>
      <header className="chapter-hero">
        <div className="chapter-meta"><span>CHAPTER {chapter.no}</span><i /><span>{chapter.time}</span><i /><span>{chapter.audience}</span></div>
        <h1 className="chapter-title">{chapter.title}</h1><p>{chapter.description}</p>
        {chapter.path && <div className="chapter-path"><span>MENU PATH</span><code>{chapter.path}</code></div>}
        {chapter.heroImage && <img className="chapter-hero-image" src={chapter.heroImage.src} alt={chapter.heroImage.alt} />}
      </header>
      <section className="outcomes">
        <span>이 장을 마치면</span>
        <ul>{chapter.outcomes.map((item) => <li key={item}><i>✓</i>{item}</li>)}</ul>
      </section>
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

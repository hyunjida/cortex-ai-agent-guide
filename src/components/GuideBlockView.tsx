import type { GuideBlock } from "../types/guide";

const toneLabels = { tip: "TIP", warn: "CHECK", ai: "AI" };

function BlockMeta({ block }: { block: GuideBlock }) {
  if (!block.basis && !block.references?.length) return null;
  return (
    <footer className="block-sources">
      {block.basis === "practice" && <span className="practice-badge">실무 참고</span>}
      {block.references?.map((reference) => (
        <span className="pdf-reference" key={`${reference.chapter}-${reference.pages}`}>
          PDF · {reference.chapter} · {reference.pages}
        </span>
      ))}
    </footer>
  );
}

export default function GuideBlockView({ block }: { block: GuideBlock }) {
  if (block.type === "steps") {
    return <section className="guide-block"><h3>{block.title}</h3><ol className="guide-steps">
      {block.items.map((item, index) => <li key={item}><span>{index + 1}</span><p>{item}</p></li>)}
    </ol><BlockMeta block={block} /></section>;
  }
  if (block.type === "check") {
    return <section className="guide-block"><h3>{block.title}</h3><ul className="guide-checks">
      {block.items.map((item) => <li key={item}><span>✓</span>{item}</li>)}
    </ul><BlockMeta block={block} /></section>;
  }
  if (block.type === "code") {
    return <section className="guide-block"><h3>{block.title}</h3><div className="guide-code">
      <div><i /><i /><i /><span>XQL</span></div><pre><code>{block.code}</code></pre>
    </div><BlockMeta block={block} /></section>;
  }
  if (block.type === "image") {
    return <figure className="guide-image"><img src={block.src} alt={block.alt} loading="lazy" /><figcaption>{block.title}</figcaption><BlockMeta block={block} /></figure>;
  }
  if (block.type === "cards") {
    return <section className="guide-block"><h3>{block.title}</h3><div className="guide-cards">
      {block.items.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h4>{item.title}</h4><p>{item.text}</p></article>)}
    </div><BlockMeta block={block} /></section>;
  }
  return <aside className={`guide-note ${block.tone}`}><span>{toneLabels[block.tone]}</span><div><b>{block.title}</b><p>{block.text}</p><BlockMeta block={block} /></div></aside>;
}

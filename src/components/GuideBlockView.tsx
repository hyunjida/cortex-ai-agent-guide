import type { GuideBlock } from "../types/guide";

const toneLabels = { tip: "TIP", warn: "CHECK", ai: "AI" };

export default function GuideBlockView({ block }: { block: GuideBlock }) {
  if (block.type === "steps") {
    return <section className="guide-block"><h3>{block.title}</h3><ol className="guide-steps">
      {block.items.map((item, index) => <li key={item}><span>{index + 1}</span><p>{item}</p></li>)}
    </ol></section>;
  }
  if (block.type === "check") {
    return <section className="guide-block"><h3>{block.title}</h3><ul className="guide-checks">
      {block.items.map((item) => <li key={item}><span>✓</span>{item}</li>)}
    </ul></section>;
  }
  if (block.type === "code") {
    return <section className="guide-block"><h3>{block.title}</h3><div className="guide-code">
      <div><i /><i /><i /><span>XQL</span></div><pre><code>{block.code}</code></pre>
    </div></section>;
  }
  if (block.type === "image") {
    return <figure className="screen-example guide-image">
      <div className="screen-example-heading"><span>화면 예시</span><h3>{block.title}</h3></div>
      <img src={block.src} alt={block.alt} loading="lazy" />
      <figcaption>{block.title}</figcaption>
    </figure>;
  }
  if (block.type === "annotatedImage") {
    return <figure className="screen-example annotated-screen-example">
      <div className="screen-example-heading"><span>{block.label}</span><h3>{block.title}</h3></div>
      <img src={block.src} alt={block.alt} />
      <figcaption>{block.caption}</figcaption>
    </figure>;
  }
  if (block.type === "callouts") {
    return <section className="guide-block"><h3>{block.title}</h3><div className="screen-callouts">
      {block.items.map((item) => <article key={item.number}><span>{item.number}</span><div><h4>{item.title}</h4><p>{item.text}</p></div></article>)}
    </div></section>;
  }
  if (block.type === "flowSteps") {
    return <section className="guide-block"><h3>{block.title}</h3><ol className="dashboard-flow-steps">
      {block.items.map((item, index) => <li key={item}><span>{index + 1}</span><b>{item}</b></li>)}
    </ol></section>;
  }
  if (block.type === "cards") {
    return <section className="guide-block"><h3>{block.title}</h3><div className="guide-cards">
      {block.items.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h4>{item.title}</h4><p>{item.text}</p></article>)}
    </div></section>;
  }
  return <aside className={`guide-note ${block.tone}`}><span>{toneLabels[block.tone]}</span><div><b>{block.title}</b><p>{block.text}</p></div></aside>;
}

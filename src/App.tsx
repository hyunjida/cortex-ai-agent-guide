import { useEffect, useState } from "react";
import { Header, Sidebar } from "./components/Navigation";
import ChapterPage from "./components/ChapterPage";
import { chapters } from "./data/chapters";

export default function App() {
  const [activeId, setActiveId] = useState(() => location.hash.slice(1) || chapters[0].id);
  const [completed, setCompleted] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem("xsiam-guide-progress") || "[]") as string[]; }
    catch { return []; }
  });
  const activeIndex = Math.max(0, chapters.findIndex((item) => item.id === activeId));
  const chapter = chapters[activeIndex];

  useEffect(() => {
    localStorage.setItem("xsiam-guide-progress", JSON.stringify(completed));
  }, [completed]);

  const selectChapter = (id: string) => {
    setActiveId(id);
    history.replaceState(null, "", `#${id}`);
    scrollTo({ top: 0, behavior: "smooth" });
  };
  const toggleComplete = () => setCompleted((items) =>
    items.includes(chapter.id) ? items.filter((id) => id !== chapter.id) : [...items, chapter.id]);

  return (
    <>
      <a className="skip-link" href="#main">본문으로 건너뛰기</a>
      <Header />
      <Sidebar activeId={chapter.id} completed={completed} onSelect={selectChapter} />
      <main id="main">
        <label className="mobile-chapter-select">
          <span>CHAPTER</span>
          <select value={chapter.id} onChange={(event) => selectChapter(event.target.value)}>
            {chapters.map((item) => <option value={item.id} key={item.id}>{item.no}. {item.shortTitle}</option>)}
          </select>
        </label>
        <ChapterPage chapter={chapter} completed={completed.includes(chapter.id)} onComplete={toggleComplete}
          hasNext={activeIndex < chapters.length - 1} onNext={() => selectChapter(chapters[activeIndex + 1].id)} />
      </main>
    </>
  );
}

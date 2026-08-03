import { useEffect, useState } from "react";
import Brand from "./Brand";
import { chapters, chapterSections } from "../data/chapters";

type SidebarProps = {
  activeId: string;
  completed: string[];
  onSelect: (id: string) => void;
};

type ChapterSearchProps = {
  onSelect: (id: string) => void;
  className?: string;
};

const chapterSectionById = new Map(
  chapterSections.flatMap((section) => section.chapters.map((chapter) => [chapter.id, section.title])),
);

const chapterSearchText = (chapter: (typeof chapters)[number]) => [
  chapter.no,
  chapter.title,
  chapter.shortTitle,
  chapter.description,
  chapter.path,
  ...chapter.outcomes,
  JSON.stringify(chapter.blocks),
].filter(Boolean).join(" ").toLocaleLowerCase("ko-KR");

export function ChapterSearch({ onSelect, className = "" }: ChapterSearchProps) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLocaleLowerCase("ko-KR");
  const results = normalizedQuery
    ? chapters.filter((chapter) => chapterSearchText(chapter).includes(normalizedQuery)).slice(0, 8)
    : [];

  const selectResult = (id: string) => {
    onSelect(id);
    setQuery("");
  };

  return (
    <div className={`chapter-search ${className}`.trim()}>
      <div className="chapter-search-input">
        <span aria-hidden="true">⌕</span>
        <label className="visually-hidden" htmlFor={`chapter-search-${className || "sidebar"}`}>교육 내용 검색</label>
        <input
          id={`chapter-search-${className || "sidebar"}`}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="교육 내용 검색"
          autoComplete="off"
        />
        {query && <button type="button" onClick={() => setQuery("")} aria-label="검색어 지우기">×</button>}
      </div>
      {normalizedQuery && (
        <div className="chapter-search-results" role="list" aria-label="검색 결과">
          {results.length > 0 ? results.map((chapter) => (
            <button type="button" role="listitem" onClick={() => selectResult(chapter.id)} key={chapter.id}>
              <span>{chapter.no}</span>
              <b>{chapter.shortTitle}</b>
              <small>{chapterSectionById.get(chapter.id)}</small>
            </button>
          )) : <p>일치하는 교육 내용이 없습니다.</p>}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [light, setLight] = useState(() => localStorage.getItem("xsiam-theme") === "light");
  useEffect(() => {
    document.body.classList.toggle("light", light);
    localStorage.setItem("xsiam-theme", light ? "light" : "dark");
  }, [light]);

  return (
    <header className="topbar">
      <a href="#overview" aria-label="가이드 홈"><Brand /></a>
      <div className="top-actions">
        <button className="icon-button" onClick={() => setLight(!light)} aria-label="색상 테마 전환">◐</button>
      </div>
    </header>
  );
}

export function Sidebar({ activeId, completed, onSelect }: SidebarProps) {
  const progress = Math.round(completed.length / chapters.length * 100);
  return (
    <aside className="sidebar" aria-label="가이드 목차">
      <div className="progress-box">
        <div className="progress-copy"><span>학습 진도</span><strong>{progress}%</strong></div>
        <div className="progress-track"><i style={{ width: `${progress}%` }} /></div>
      </div>
      <ChapterSearch onSelect={onSelect} />
      <nav className="course-nav">
        {chapterSections.map((section) => (
          <section className="course-nav-section" aria-labelledby={`nav-${section.id}`} key={section.id}>
            <h2 id={`nav-${section.id}`}><span>{section.no}</span>{section.title}</h2>
            {section.chapters.map((chapter) => (
              <button className={activeId === chapter.id ? "active" : ""} onClick={() => onSelect(chapter.id)} key={chapter.id}>
                <span>{chapter.no}</span><b>{chapter.shortTitle}</b>{completed.includes(chapter.id) && <i>✓</i>}
              </button>
            ))}
          </section>
        ))}
      </nav>
      <div className="side-note"><span className="pulse" /><p><b>POC 학습 가이드</b><br />조회부터 보고까지 순서대로 학습하세요.</p></div>
    </aside>
  );
}

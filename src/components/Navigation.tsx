import { useEffect, useState } from "react";
import Brand from "./Brand";
import { chapters, chapterSections } from "../data/chapters";

type SidebarProps = {
  activeId: string;
  completed: string[];
  onSelect: (id: string) => void;
};

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
